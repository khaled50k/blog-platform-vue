<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white px-4 py-5 sm:px-6 flex flex-col  rounded-xl">
        <div class="flex space-x-3 mb-4">
            <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="../../assest/social logo.png" alt="" />
            </div>
            <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900">
                    <span class="hover:underline">Chelsea Hagon</span>
                </p>
                <p class="text-sm text-gray-500">
                    <span class="hover:underline">December 9 at 11:43 AM</span>
                </p>
            </div>
            <div class="flex-shrink-0 self-center flex">
                <Menu as="div" class="relative z-30 inline-block text-left">
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
                </Menu>
            </div>
        </div>
        <div class="min-w-0 flex-1 mb-2" @dblclick="toggleLike()">
            <img src="../../assest/feed-1.jpg" alt="" class="rounded-lg">

        </div>
        <div class="flex space-x-3 mb-1">
            <div class="min-w-0 flex-1">
                <span @dblclick="toggleLike()" class="text-2xl text-center"> <i class="uil uil-heart text-gray-500  "
                        :class="{ 'liked': liked }"></i> </span>

                <span class="text-2xl text-center"> <i class="uil uil-comment text-gray-500  "></i> </span>
                <span class="text-2xl text-center"> <i class="uil uil-share text-gray-500  "></i> </span>

            </div>
            <div class="flex-shrink-0">
                <span class="text-2xl text-center"> <i class="uil uil-bookmark text-gray-500  "></i> </span>

            </div>


        </div>
        <div class="flex space-x-3 mb-1">
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
        <div class="flex space-x-3">
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
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';

export default {
    setup(props) {
        let liked = ref(true);
        const toggleLike = () => {
            liked.value = liked.value ? false : true
        }
        return {
            liked, toggleLike
        }
    },
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        CodeIcon,
        DotsVerticalIcon,
        FlagIcon,
        StarIcon,
    },
}
</script>

<style>
.liked {
    color: red;
    /* Example styling for a liked state */
}
</style>