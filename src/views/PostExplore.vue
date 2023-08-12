<template>
    <div class="md:col-span-3 lg:col-span-2 ml-0  flex flex-col gap-5 lg:ml-4 w-full items-center ">
        <Post :post="post" :key="index"></Post>
        <Post v-for="(post, index) in filteredPosts" :post="post" :key="index"></Post>

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
  