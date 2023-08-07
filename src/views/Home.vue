<template>

    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
</template>
   
<script>
import Header from '../components/common/Header.vue';
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
    ShoppingCartIcon
} from '@heroicons/vue/outline'
import {
    SearchIcon,
    ChatIcon, ShareIcon,
    HeartIcon, BookmarkIcon
} from '@heroicons/vue/outline'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon, HeartIcon as solidHeart, BookmarkIcon as solidBookMark } from '@heroicons/vue/solid'

import SideBar from '../components/common/SideBar.vue';
import FloatingNav from '../components/common/FloatingNav.vue';
import Post from '../components/common/Post.vue';



import axios from 'axios'
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useVirtualList } from "@vueuse/core";
import { useStore } from 'vuex'



export default {
    components: {
        Header, BellIcon, SearchIcon, FloatingNav,
        CalendarIcon,
        ChartBarIcon, Menu,
        MenuButton, BookmarkIcon, solidBookMark,
        solidHeart,
        DotsVerticalIcon,
        MenuItem, ChatIcon,
        MenuItems,
        CodeIcon,
        DotsVerticalIcon,
        FlagIcon,
        StarIcon,
        HeartIcon, ShareIcon,
        FolderIcon,
        HomeIcon,
        InboxIcon,
        ShoppingBagIcon,
        MenuAlt2Icon,
        UsersIcon,
        XIcon,
        ShoppingCartIcon,
        Post,
        SideBar
    },
    setup(props) {
        const store = useStore();
        const data = ref(null);
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

            liked, toggleLike, saved, toggleSaved, isFollowig, toggleFollow, isLoading, data

        };
    }
}
</script>
   
<style>

</style>
   