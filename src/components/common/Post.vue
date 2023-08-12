<template>
    <div
        class="bg-white p-3 sm:p-4 flex flex-col justify-between rounded-xl sm:min-w-[445px] sm:min-h-[627px] overflow-hidden">

        <div class="flex  mb-4 py-1 items-center">
            <div class="flex-shrink-0 mr-3">
                <router-link :to="{name:'Profile',params:{userId:post.author._id}}">                <img class="h-10 w-10 rounded-full cursor-pointer" :src="post.author.profilePicture" alt="" />
</router-link>
            </div>
            <div class="min-w-0 flex-0  mr-3">
                <router-link :to="{name:'Profile',params:{userId:post.author._id}}">    
                <p class="text-sm font-medium text-gray-900">
                    <span class="cursor-pointer">{{ post.author.username }}</span>
                </p>
                </router-link>
                <p class="text-sm text-gray-500">
                    <span>{{ timeAgo(post.createdAt) }}</span>
                </p>
            </div>
            <div class="flex-shrink-0 mr-3 flex items-center" v-if="post.author.isVerified">
                <span class="material-icons text-blue-500 cursor-pointer">verified</span>
            </div>
            <div class="flex-1 items-center flex  "  >
                <div v-if="user._id==post.author._id"></div>
                <div  v-else-if="isFollowLoading" class="flex justify-center items-center "
                    :class="isFollowing ? 'w-[68px]' : ' w-[81px]'">
                    <div class="custom-loader "></div>

                </div>
                <button v-else
                    class=" py-2 px-4 rounded-lg font-semibold text-sm text-end border-0 bg-transparent hover:bg-gray-100 hover:text-primary"
                    :class="isFollowing ? 'text-gray-900 hover:text-primary' : 'text-primary hover:text-gray-900 '"
                    @click="toggleFollow()">{{ isFollowing ? 'Unfollow' : 'Follow' }}</button>



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
            <img :src="post.postPicture" alt="" class=" w-full h-full rounded-lg">

        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 inline-flex items-center gap-2">
                <span @click="toggleLike()" class="text-2xl text-center">
                    <solidHeart v-if="isLiked" class="uil uil-heart h-8 text-red-500 cursor-pointer"></solidHeart>
                    <HeartIcon v-else class="uil uil-heart text-gray-500 h-8 cursor-pointer"></HeartIcon>
                </span>

                <span @click="toggleSaved()" class="">
                    <!-- <ChatIcon class="h-8 text-gray-500 cursor-pointer"></ChatIcon> -->


                </span>
                <span @click="toggleSaved()" class="">
                    <!-- <ShareIcon class="h-8 text-gray-500 cursor-pointer"></ShareIcon> -->


                </span>
            </div>
            <div class="flex-shrink-0">
                <span @click="toggleSaved()" class="">
                    <!-- <solidBookMark v-if="saved" class="h-8 text-gray-700 cursor-pointer"></solidBookMark> -->

                    <!-- <BookmarkIcon v-else class=" text-gray-500 h-8 cursor-pointer"></BookmarkIcon> -->
                </span>
            </div>


        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 flex gap-2 items-center h-[20px]">
                <div class="flex -space-x-1 overflow-hidden">
                    <img v-for="(like, index) in post.likes.slice(0, 3)" :key="index"
                        class="inline-block h-5 w-5 rounded-full ring-2 ring-white" :src="like.author.profilePicture"
                        :alt="like.author.username + ' profile picture'" />
                </div>
                <p class="text-sm font-medium text-gray-500 ">
                    <span v-if="post.likes.length === 0">
                        <b class="text-sm font-medium text-gray-500">No likes yet </b>
                    </span>
                    <span v-else-if="post.likes.length === 1">
                        Liked by <b class="text-gray-900 cursor-pointer">{{ post.likes[0].author.username }}</b>
                    </span>
                    <span v-else>
                        Liked by <b class="text-gray-900 cursor-pointer">{{ post.likes[0].author.username }}</b> and {{
                            post.likes.length -
                            1 }} others
                    </span>
                </p>
            </div>


        </div>
        <div class="flex space-x-3 mb-2">
            <div class="min-w-0 flex-1 flex gap-2 items-center">

                <p class="text-sm font-medium text-gray-500">
                    <span class=""><b class="text-gray-900 cursor-pointer">{{ post.author.username }} </b> {{ post.content
                    }}</span>

                </p>
            </div>


        </div>
        <div class="flex space-x-3">
            <div class="min-w-0 flex-1 flex gap-2 items-center">

                <p class="text-sm font-medium text-gray-500">
                    <span v-if="post.comments.length >= 1" class="cursor-pointer">View all {{ post.comments.length }}
                        comment</span>
                    <span v-else>No comments available</span>
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
import { array } from 'yup';
import { useStore } from 'vuex';


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
        post: {
            required: true,
            type: Object
        }
    },
    setup(props) {
        const store = useStore()
        const user = computed(() => store.getters.getUser)
        const isLiked = ref(false);
        const isFollowLoading = ref(false);
        const post = computed(() => {
            isLiked.value = props.post.likes.some((like) => {
                const boolean = like.author._id == user.value._id
                return boolean;
            });

            return props.post
        })
        const length = (array) => {
            return array.length
        }
        const timeAgo = (timestamp) => {

            const now = new Date();
            const timestampDate = new Date(timestamp);

            const secondsAgo = Math.floor((now - timestampDate) / 1000);

            if (secondsAgo < 60) {
                return "just a moment ago";
            } else if (secondsAgo < 3600) {
                const minutesAgo = Math.floor(secondsAgo / 60);
                return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
            } else if (secondsAgo < 86400) {
                const hoursAgo = Math.floor(secondsAgo / 3600);
                return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
            } else if (secondsAgo < 2592000) {
                const daysAgo = Math.floor(secondsAgo / 86400);
                return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
            } else if (secondsAgo < 31536000) {
                const monthsAgo = Math.floor(secondsAgo / 2592000);
                return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
            } else {
                const yearsAgo = Math.floor(secondsAgo / 31536000);
                return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
            }
        }
        let saved = ref(true);
        const toggleSaved = () => {
            saved.value = !saved.value;
        }

        const isFollowing = computed(() => user.value.following.some((user) => user._id == post.value.author._id));

        const toggleFollow = async () => {
            if (!isFollowLoading.value) {
                isFollowLoading.value = true;

                try {
                    isFollowing.value = !isFollowing.value;

                    if (!isFollowing.value) {
                        await store.dispatch('followUser', post.value.author._id);
                    } else {
                        await store.dispatch('unFollowUser', post.value.author._id);
                    }
                } catch (error) {
                    // Handle any errors that might occur during API requests
                    console.error(error);
                }

                isFollowLoading.value = false;
            }


        }
        const toggleLike = () => {
            isLiked.value = !isLiked.value;
            if (isLiked.value) {
                post.value.likes = [...post.value.likes, { author: user.value }];
            } else {
                post.value.likes = post.value.likes.filter((like) => like.author._id != user.value._id);
            }
            store.dispatch('likePost', post.value._id);
        }

        return {
            isLiked,
            toggleLike,
            saved,
            toggleSaved,
            toggleFollow,
            post, timeAgo, length, isFollowing, user, isFollowLoading
        };
    }
};
</script>


<style scoped>
/* .post {
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  border: 1px solid gray;
  margin: 10px;
} */

.liked {
    color: red;
    /* Example styling for a liked state */
}

.custom-loader {
    width: 25px;
    height: 25px;
    display: grid;
    border-radius: 50%;
    -webkit-mask: radial-gradient(farthest-side, #0000 40%, #000 41%);
    background:
        linear-gradient(0deg, #766DF480 50%, #766DF4FF 0) center/4px 100%,
        linear-gradient(90deg, #766DF440 50%, #766DF4BF 0) center/100% 4px;
    background-repeat: no-repeat;
    animation: s3 1s infinite steps(12);
}

.custom-loader::before,
.custom-loader::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
}

.custom-loader::after {
    opacity: 0.83;
    transform: rotate(60deg);
}

@keyframes s3 {
    100% {
        transform: rotate(1turn)
    }
}</style>