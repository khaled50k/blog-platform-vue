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

           
  <div class="ml-0 lg:ml-4 w-full">
  <div class="grid grid-cols-3 gap-2 w-[inherit]">
    <router-link :to="{name:'PostExplore',params:{postId:post._id}}" v-for="post in posts" :key="post._id" class="w-full h-full">
      <div class="flex flex-col items-center justify-center">
        <img :src="post.postPicture" class="w-full h-full rounded-lg" />
 
      </div>
    </router-link >
  </div>
</div>
            </div>
            <FloatingNav class="w-full"></FloatingNav>
        </div>
    </div>
</template>

<script setup>
import FloatingNav from "../components/common/FloatingNav.vue";
import Header from "../components/common/Header.vue";
import SideBar from "../components/common/SideBar.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store=useStore();
const posts=computed(()=>store.getters.getPosts)
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
