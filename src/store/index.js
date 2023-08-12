import Vuex from "vuex";
import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api"; // Adjust this to match your API base URL

export const store = new Vuex.Store({
  state: {
    user: {},
    users: [],
    posts: [],
    isLoadingPosts: false,
  },
  getters: {
    getPosts: (state) => state.posts,
    getIsLoading: (state) => state.isLoadingPosts,
    getUser: (state) => state.user,
    getIsFollowingAuthor: (state) => (authorId) => {
      const isFollowing = state.user.following.find(
        (user) => user._id == authorId
      );
      if (isFollowing) {
        return true;
      }
      return false;
    },
    getIsPostLiked: (state) => (postId, userId) => {
      const post = state.posts.find((p) => p._id == postId);

      if (post) {
        return post.likes.some((like) => like.author._id == userId);
      }
      return false;
    },
    getPostById: (state) => (postId) => {
      return state.posts.find((post) => post._id === postId);
    },
    getUserById: (state) => (userId) => {
      return state.users.find((user) => user._id === userId);
    },
  },
  mutations: {
    async SET_POSTS(state, posts) {
      state.posts = await posts;
    },
    ADD_POST(state, post) {
      state.posts.unshift(post);
    },
    DELETE_POST(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    SET_USER(state, user) {
      state.user = user;
    },
    Add_USER(state, user) {
      state.users.push(user);
    },
    SET_LOADING(state, isLoading) {
      state.isLoadingPosts = isLoading;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await axios.get(`${API_BASE_URL}/post`);
        const posts = response.data;
        commit("SET_POSTS", posts);
      } catch (error) {
        return Promise.reject(error.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchUserByCookie({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await axios.get(`${API_BASE_URL}/users/data`, {
          withCredentials: true,
        });
        const posts = response.data;
        commit("SET_USER", posts);
      } catch (error) {
        return Promise.reject(error.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchUser({ commit }, id) {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/${id}`, {
          withCredentials: true,
        });
        commit("Add_USER", response.data);
        return await response.data;
      } catch (error) {
        return Promise.reject(error.response.data.message);
      } finally {
        commit("SET_LOADING", false)
      }
    },
    async likePost({ commit, state }, postId) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/post/${postId}/like`,
          null, // Pass the data you want to send here
          {
            withCredentials: true,
          }
        );
        const res = await axios.get(`${API_BASE_URL}/post/${postId}`);

        const updatedPost = res.data;
        const updatedPosts = state.posts.map((post) => {
          if (post._id === updatedPost._id) {
            return updatedPost;
          } else {
            return post;
          }
        });
        await commit("SET_POSTS", updatedPosts);
      } catch (error) {
        return Promise.reject(error.response);
      }
    },
    async createPost({ commit, dispatch }, data) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/post/`,
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        // Dispatch the 'fetchPosts' action to update the list of posts
        await dispatch("fetchPosts");
      } catch (error) {
        return Promise.reject(error.response);
      }
    },

    async uploadImage({ commit, state }, { data }) {
      try {
        const formData = new FormData();
        formData.append("photo", data.photo); // Assuming `data.photo` is the file input from the form

        const response = await axios.post(
          `${API_BASE_URL}/upload/photo`,
          data, // Pass the FormData object
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        return response.data;
      } catch (error) {
        return Promise.reject(error.response);
      }
    },
    async followUser({ commit, state, dispatch }, userId) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/users/${userId}/follow`,
          null, // Pass the data you want to send here
          {
            withCredentials: true,
          }
        );

        await dispatch("fetchUserByCookie");
      } catch (error) {
        return Promise.reject(error.response);
      }
    },
    async unFollowUser({ commit, state, dispatch }, userId) {
      try {
        const response = await axios.delete(
          `${API_BASE_URL}/users/${userId}/follow`,
          // Pass the data you want to send here
          {
            withCredentials: true,
          }
        );

        await dispatch("fetchUserByCookie");
      } catch (error) {
        return Promise.reject(error.response);
      }
    },
  },
});
export default store;
