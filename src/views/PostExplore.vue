<template>
    <div class=" w-full min-h-[100vh] flex items-center justify-center bg-white" v-if="isLoading">
        <div class="custom-loader"></div>
    </div>

    <div class=" w-full min-h-screen " v-else>
        <Header class="main-content w-[inherit] h-[inherit]"></Header>
        <div
            class="  hidden lg:block  outline-line   container max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto w-full ">
            <SideBar></SideBar>
        </div>
        <div class="container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl flex justify-start items-start w-full  "
            style="height: 100%; max-height:100% ;">
            <div class="  ml-0 mt-[64px]   py-4 lg:ml-[250px] items-start justify-center flex w-full min-h-full "
                style="width: 100%; max-width:100% ">
                <div class="md:col-span-3 lg:col-span-2 ml-0  flex flex-col gap-5 lg:ml-4 w-full items-center ">
        <Post :post="post" :key="index"></Post>
        <Post v-for="(post, index) in filteredPosts" :post="post" :key="index"></Post>

    </div>
            </div>
            <FloatingNav class="w-full"></FloatingNav>
        </div>
    </div>

 
</template>
  
<script>
export default {
    data() {
        return {

        };
    }
};
</script>
<script setup>
import Post from '../components/common/Post.vue';
import FloatingNav from "../components/common/FloatingNav.vue";
import Header from "../components/common/Header.vue";
import SideBar from "../components/common/SideBar.vue";
import { defineProps, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps({
    postId: Number, // You can change the type to match your needs
});
// Create a virtual list instance
const store = useStore();
const posts = computed(() => store.getters.getPosts);
const route = useRoute()
const post = computed(() => store.getters.getPostById(route.params.postId))
const  filteredPosts= ()=> {
  const filteredPosts = [];
  for (const p of posts.value) {
    if (p._id !== post.value._id) {
      filteredPosts.push(p);
    }
  }

  return filteredPosts;
}

</script>
<style>
.explore-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
}

.post {
    width: 100%;
    height: 100%;
}
</style>
  