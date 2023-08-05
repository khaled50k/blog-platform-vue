
<template>
<router-view class=""></router-view>
</template>


<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();

onMounted(async () => {
  try {
    await store.dispatch('fetchPosts');
  } catch (error) {
    console.error(error);
  }
});
</script>
<style scoped></style>
