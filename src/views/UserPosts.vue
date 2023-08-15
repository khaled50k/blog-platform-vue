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
                    <Post v-for="(post, index) in user.posts" :post="post" :key="index"></Post>

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
// hi there(this is me)
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Post from "../components/common/Post.vue";
const route = useRoute()

const store = useStore()
const user = computed(() => {
    return store.getters.getUserById(route.params.userId)
}
);
</script>

<style></style>