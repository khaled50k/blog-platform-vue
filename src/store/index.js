import Vuex from "vuex";
import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api"; // Adjust this to match your API base URL

export const store = new Vuex.Store({
  state: {
    user: {},
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
    getIsPostLiked: (state) => (postId) => {
      const isLiked = state.posts.find((post) => post._id == postId);
      if (isLiked) {
        return true;
      }
      return false;
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
    SET_LOADING(state) {
      state.isLoadingPosts = !state.isLoadingPosts;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/post`);
        const posts = response.data;
        await commit("SET_POSTS", posts);
      } catch (error) {
        return Promise.reject(error.response.data.message);
      }
    },
    async fetchUser({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/data`, {
          withCredentials: true,
        });
        const posts = response.data;
        await commit("SET_USER", posts);
      } catch (error) {
        return Promise.reject(error.response.data.message);
      }
    },
    async likePost({ commit }, postId) {
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
        const updatedPosts = state.posts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        );
        await commit("SET_POSTS", updatedPosts);
      } catch (error) {
        return Promise.reject(error.response);
      }
    },
    async createPost({ commit }, newPost) {
      try {
        const response = await axios.post(`${API_BASE_URL}/post`, newPost);
        const createdPost = response.data;
        commit("ADD_POST", createdPost);
      } catch (error) {
        console.error(error);
      }
    },
    async deletePost({ commit }, postId) {
      try {
        await axios.delete(`${API_BASE_URL}/post/${postId}`);
        commit("DELETE_POST", postId);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
export default store;
