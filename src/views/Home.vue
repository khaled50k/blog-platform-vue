<template>
    <Header class="main-content"></Header>

    <div
        class="grid grid-cols-1 md:grid-cols-4 items-center gap-5 py-4 container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto h-full w-full ">
        <!-- Sidebar for medium and larger screens -->
        <div class="md:col-span-1  hidden lg:block h-full relative outline-line">
            <SideBar></SideBar>
        </div>
        <div class="md:col-span-3 lg:col-span-2 h-full flex flex-col gap-5 " >
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          
        </div>

        <div class=" hidden md:block md:col-span-1 lg:col-span-1 bg-gray-200 h-full">1/4</div>

    </div>
    <FloatingNav class=" container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto "></FloatingNav>
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
import { SearchIcon } from '@heroicons/vue/solid'
import SideBar from '../components/common/SideBar.vue';
import FloatingNav from '../components/common/FloatingNav.vue';
import Post from '../components/common/Post.vue';


export default {
    components: {
        Header, BellIcon, SearchIcon, FloatingNav, Post,
        CalendarIcon,
        ChartBarIcon,
        FolderIcon,
        HomeIcon,
        InboxIcon,
        ShoppingBagIcon,
        MenuAlt2Icon,
        UsersIcon,
        XIcon,
        ShoppingCartIcon,
        SideBar
    },
    setup(props) {

    }
}
</script>
   
<style>
.main-content {
    position: sticky;
    top: 0;
}
</style>
   