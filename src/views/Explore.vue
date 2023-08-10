<template>
  <div class="ml-0 lg:ml-4 w-full">
  <div class="grid grid-cols-3 gap-2 w-[inherit]">
    <router-link :to="{name:'PostExplore',params:{postId:post._id}}" v-for="post in posts" :key="post._id" class="w-full h-full">
      <div class="flex flex-col items-center justify-center">
        <img :src="post.postPicture" class="w-full h-full rounded-lg" />
 
      </div>
    </router-link >
  </div>
</div>
</template>

<script setup>
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
