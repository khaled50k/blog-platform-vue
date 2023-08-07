<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!-- {{ posts[0] }} -->
    <div class="bg-white p-4 sm:p-6 flex flex-col  rounded-xl">

        <div class="flex  mb-4 py-1 items-center">
            <div class="flex-shrink-0 mr-3">
                <img class="h-10 w-10 rounded-full"
                    src="https://i.pinimg.com/550x/2d/1c/98/2d1c982d5c164860b84e9d670581bab2.jpg" alt="" />
            </div>
            <div class="min-w-0 flex-0">
                <p class="text-sm font-medium text-gray-900">
                    <span>khaled walead</span>
                </p>
                <p class="text-sm text-gray-500">
                    <span>December 9 at 11:43 AM</span>
                </p>
            </div>
            <div class="flex-1 items-center">
                <button class=" py-2 px-4 rounded-lg font-semibold text-sm "
                    :class="isFollowig ? 'text-gray-900 hover:text-primary' : 'text-primary hover:text-gray-900 '"
                    @click="toggleFollow()">{{ isFollowig ? 'Unfollow' : 'Follow' }}</button>

            </div>
            <div class="flex-shrink-0 self-center flex">
                <!-- <Menu as="div" class="relative z-30 inline-block text-left">
                    <div>
                        <MenuButton class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                            <span class="sr-only">Open options</span>
                            <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <StarIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Add to favorites</span>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <CodeIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Embed</span>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <FlagIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Report content</span>
                                </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu> -->

            </div>
        </div>
        <div class="min-w-0 flex-1 mb-2" @dblclick="toggleLike()">
            <img src="../../assest/feed-2.jpg" alt="" class="rounded-lg">

        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 inline-flex items-center gap-2">
                <span @click="toggleLike()" class="text-2xl text-center">
                    <solidHeart v-if="liked" class="uil uil-heart h-8 text-red-500"></solidHeart>
                    <HeartIcon v-else class="uil uil-heart text-gray-500 h-8 "></HeartIcon>
                </span>

                <span @click="toggleSaved()" class="">
                    <ChatIcon class="h-8 text-gray-500"></ChatIcon>


                </span>
                <span @click="toggleSaved()" class="">
                    <ShareIcon class="h-8 text-gray-500"></ShareIcon>


                </span>
            </div>
            <div class="flex-shrink-0">
                <span @click="toggleSaved()" class="">
                    <solidBookMark v-if="saved" class="h-8 text-gray-700"></solidBookMark>

                    <BookmarkIcon v-else class=" text-gray-500 h-8 "></BookmarkIcon>
                </span>
            </div>


        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 flex gap-2 items-center">
                <div class="flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                    <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                    <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="" />
                    <img class="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                </div>
                <p class="text-sm font-medium text-gray-500">
                    <span class="">Liked by <b class="text-gray-900">Ersant Achieverand</b> 3.510 others</span>

                </p>
            </div>


        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 flex gap-2 items-center">

                <p class="text-sm font-medium text-gray-500">
                    <span class=""><b class="text-gray-900">Lana HaleLorem </b> ipsum dolor sit amet. #lifestyle</span>

                </p>
            </div>


        </div>
        <div class="flex space-x-3">
            <div class="min-w-0 flex-1 flex gap-2 items-center">

                <p class="text-sm font-medium text-gray-500">
                    <span class="">View all 25 comment</span>

                </p>
            </div>


        </div>

    </div>
</template>
  
<script>
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    ShoppingBagIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
    ShoppingCartIcon, ChatIcon, ShareIcon,
    HeartIcon, BookmarkIcon
} from '@heroicons/vue/outline'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon, HeartIcon as solidHeart, BookmarkIcon as solidBookMark } from '@heroicons/vue/solid'
import { ref, watch, computed, onMounted } from 'vue';

export default {
    components: {
        BellIcon,
        CalendarIcon,
        ChartBarIcon,
        FolderIcon,
        HomeIcon,
        InboxIcon,
        ShoppingBagIcon,
        MenuAlt2Icon,
        UsersIcon,
        XIcon,
        ShoppingCartIcon, ChatIcon, ShareIcon,
        HeartIcon, BookmarkIcon, Menu, MenuButton, MenuItem, MenuItems, solidHeart, CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon, solidBookMark
    },
    props: {

    },
    setup(props) {
        const posts = computed(() => props.posts)
        let liked = ref(true);
        const toggleLike = () => {
            liked.value = !liked.value;
        }

        let saved = ref(true);
        const toggleSaved = () => {
            saved.value = !saved.value;
        }

        let isFollowing = ref(false);
        const toggleFollow = () => {
            isFollowing.value = !isFollowing.value;
        }

        return {
            liked,
            toggleLike,
            saved,
            toggleSaved,
            isFollowing,
            toggleFollow
        };
    }
};
</script>


<style>
.liked {
    color: red;
    /* Example styling for a liked state */
}
</style>