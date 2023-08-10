<template>
<div class="md:col-span-3 lg:col-span-2 ml-0  flex flex-col gap-5 lg:ml-4 w-full items-center ">
    <Post v-for="(post,index) in posts" :post="post" :key="index"></Post>

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

import { defineProps,ref,computed } from 'vue';
import { useStore } from 'vuex';
const props = defineProps({
    postId: Number, // You can change the type to match your needs
});
// Create a virtual list instance
const store = useStore();
const posts = computed(() => store.getters.getPosts);

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
  