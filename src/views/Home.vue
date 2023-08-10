<template>
    <div 
        class="md:col-span-3 lg:col-span-2 ml-0 flex flex-col gap-5 lg:ml-4 w-full items-center" id="posts">
        <Post v-for="post in posts" :post="post" :key="post._id" id="post"></Post>
    </div>
</template>
  
<script>

import Post from '../components/common/Post.vue';
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex'
export default {
    components: {
        Post,
    },
    setup(props) {
        const isLoading = ref(true);

        let liked = ref(true);
        const toggleLike = () => {
            liked.value = liked.value ? false : true
        }
        let saved = ref(true);
        const toggleSaved = () => {
            saved.value = saved.value ? false : true
        }
        let isFollowig = ref(false);
        const toggleFollow = () => {
            isFollowig.value = isFollowig.value ? false : true
        }

   
        return {

            liked, toggleLike, saved, toggleSaved, isFollowig, toggleFollow, isLoading

        };
    }
}
</script>
<script setup>
import { useStore } from 'vuex'
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useVirtualList } from "@vueuse/core";

// Create a virtual list instance
const store = useStore();
const posts = computed(() => store.getters.getPosts);

</script>
   
<style></style>
   