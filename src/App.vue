<template>
<router-view></router-view>
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
    ShoppingCartIcon
} from '@heroicons/vue/outline'
import {
    SearchIcon,
    ChatIcon, ShareIcon,
    HeartIcon, BookmarkIcon
} from '@heroicons/vue/outline'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon, HeartIcon as solidHeart, BookmarkIcon as solidBookMark } from '@heroicons/vue/solid'

import Post from './components/common/Post.vue';
import { onMounted, ref, watch, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex'
export default {
    components: {
         BellIcon, SearchIcon,
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
.route-fade-enter-active,
.route-fade-leave-active {
    transition: opacity 5s;
}

.route-fade-enter,
.route-fade-leave-to {
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
}</style>
   