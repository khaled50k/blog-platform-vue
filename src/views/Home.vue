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

                <div class="md:col-span-3 lg:col-span-2 ml-0 flex flex-col gap-5 lg:ml-4 w-full items-center" id="posts">
        <Post v-for="post in posts" :post="post" :key="post._id" id="post"></Post>
    </div>

            </div>
            <FloatingNav class="w-full"></FloatingNav>
        </div>
    </div>
   
</template>
  
<script>

import Post from '../components/common/Post.vue';
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex'
import FloatingNav from '../components/common/FloatingNav.vue';
import SideBar from '../components/common/SideBar.vue';
import Header from '../components/common/Header.vue';
export default {
    components: {
        Post,FloatingNav,SideBar,Header
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
const posts = computed(() => {
   return  store.getters.getPosts;
  
});


</script>
   
<style></style>
   