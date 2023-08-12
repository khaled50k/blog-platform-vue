<template>
    <div class=" h-screen">

        <div class=" ml-0  flex flex-col lg:ml-4 w-full items-center bg-white rounded-2xl">
            <div class="flex  mb-4 py-2 items-center px-4   justify-center w-full gap-5">
                <div class=" mr-3 ">
                    <img class=" sm:h-40 sm:w-40 h-20 w-20 rounded-full cursor-pointer" :src="user.profilePicture" alt="" />
                </div>
                <div class="mr-3 flex flex-col items-center gap-4  flex-1 justify-center">
                    <div class="flex gap-4 items-center justify-start w-full">
                        <p class="text-xl font-medium text-gray-900">{{ user.username }}</p>
                        <button
                            class="py-1 px-1 font-medium text-gray-900 rounded-md text-lg border border-solid border-t-1 border-gray-300">
                            Edit profile
                        </button>
                        <button>
                            <svg class="text-gray-900 h-7 hover:text-gray-700" fill="none" stroke="currentColor"
                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex gap-4 items-center justify-start w-full">
                        <p class="text-md font-medium text-gray-900"><b>{{ user.posts.length }}</b> posts</p>
                        <p class="text-md font-medium text-gray-900"><b>{{ user.followers.length }}</b> followers</p>
                        <p class="text-md font-medium text-gray-900"><b>{{ user.following.length }}</b> following</p>

                    </div>
                    <div class="flex gap-4 items-center justify-start w-full">
                        <p class="text-md font-medium text-gray-900"> {{ user.name }}</p>

                    </div>
                </div>

            </div>
            <div
                class="flex  mb-4 py-2 items-center px-4  justify-center w-full gap-5 border-solid border-gray-300  border-0 border-t  ">
                <div class="grid grid-cols-3 gap-2 w-[inherit]">
                    <router-link :to="{ name: 'PostExplore', params: { postId: post._id } }" v-for="post in user.posts"
                        :key="post._id" class="w-full h-full">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="post.postPicture" class="w-full h-full rounded-lg" />

                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { CalendarIcon, BellIcon, PlusCircleIcon, SearchCircleIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, PlusSmIcon } from '@heroicons/vue/outline'

export default {
    components: {
        CalendarIcon, BellIcon, PlusCircleIcon, SearchCircleIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, PlusSmIcon
    }
}
</script>
<script setup>


import { defineProps, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Post from '../components/common/Post.vue';
const props = defineProps({
    userId: Number, // You can change the type to match your needs
});
// Create a virtual list instance
const store = useStore();
const posts = computed(() => store.getters.getPosts);
const route = useRoute()

const user = computed(() => {
    return store.getters.getUserById(route.params.userId)
}
); // Initialize with a default value, like null


</script>

<style></style>