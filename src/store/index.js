import Vuex from "vuex";
import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api"; // Adjust this to match your API base URL

export const store = new Vuex.Store({
  state: {
    user: {},
    posts: [],
  },
  getters:{
    getPosts:(state)=> state.posts
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
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/post`);
        const posts = response.data;
       await commit("SET_POSTS", posts);
      } catch (error) {
        console.error(error);
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
