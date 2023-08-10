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
        <div
            class="container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl flex justify-start items-start w-full  " style="height: 100%; max-height:100% ;">
            <div class="  ml-0 mt-[64px]   py-4 lg:ml-[250px] items-start justify-center flex w-full min-h-full " style="width: 100%; max-width:100% ">
        
                <router-view class="w-full h-full" ></router-view>
  
            </div>
            <FloatingNav class="w-full"></FloatingNav>
        </div>
    </div>
</template>
   
<script>
import Header from './components/common/Header.vue';
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

import SideBar from './components/common/SideBar.vue';
import FloatingNav from './components/common/FloatingNav.vue';
import Post from './components/common/Post.vue';
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex'
import RightSideBar from './components/common/RightSideBar.vue';
export default {
    components: {
        Header, BellIcon, SearchIcon, FloatingNav, RightSideBar,
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
        const isLoading = computed(() =>
            store.getters.getIsLoading
        );

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
   
<style scoped>
.route-fade-enter-active, .route-fade-leave-active {
  transition: opacity 5s;
}
.route-fade-enter, .route-fade-leave-to {
  opacity: 0;
}
.marg {
    margin-top: 64px;
    margin-left: 388px;
}

.custom-loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid;
    border-color: #766DF4 #0000;
    animation: s1 1s infinite;
}

@keyframes s1 {
    to {
        transform: rotate(.5turn)
    }
}
</style>
   