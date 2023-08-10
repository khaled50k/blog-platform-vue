<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    
        <div class="flex-1 flex flex-col   overflow-y-auto gap-5  w-[250px] h-full  fixed top-[80px]  ">
            <div class="flex gap-2 items-center flex-shrink-0 px-4 w-full bg-white p-4 rounded-xl">
                <img class="inline-block h-10 w-10 rounded-full"
                    :src="user.profilePicture" :alt="user.username+'profile picture'" />
                <div class="flex flex-col">
                    <h3>{{ user.name }}</h3>
                    <p class="text-gray-400">@{{ user.username }}</p>

                </div>
            </div>

            <div class="flex gap-4 items-center flex-shrink-0  bg-white   rounded-xl w-full">
                <ul class="flex flex-col gap-1 w-full">
                    <li class="w-full">
                        <router-link :to="{ name: 'Home' }"
                            class="w-full p-4 text-center items-center inline-flex gap-1 hover:bg-gray-100 active:active-link">

                            <HomeIcon class="text-gray-500 h-7 "></HomeIcon>
                            <h3 class="text-gray-800 font-bold text-lg">Home</h3>
                        </router-link>
                    </li>
                    <li class="w-full ">
                        <router-link to="Home"
                            class="w-full p-4 inline-flex items-center  gap-1 hover:bg-gray-100 active:active-link">
                            <span class="text-xl relative">
                                <BellIcon class="text-gray-500 h-7 "></BellIcon>
                                <span class="notifications-count">
                                    <small v-if="notificationCount">{{ notificationCount > 9 ? '+9' : notificationCount
                                    }}</small>

                                </span>
                            </span>

                            <h3 class="text-gray-700 font-bold text-lg">Notification</h3>
                        </router-link>

                    </li>

                    <li class="w-full">
                        <router-link :to="{name:'Explore'}"
                            class=" items-center w-full p-4 inline-flex gap-1 hover:bg-gray-100 active:active-link">
                            <SearchCircleIcon class="text-gray-500 h-7 "></SearchCircleIcon>

                            <h3 class="text-gray-700 font-bold text-lg">Explore</h3>
                        </router-link>

                    </li>

                    <li class="w-full">
                        <router-link to="Home"
                            class=" items-center w-full p-4 inline-flex gap-1 hover:bg-gray-100 active:active-link">
                            <svg class="text-gray-500 h-7" fill="none" stroke="currentColor" stroke-width="1.5"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                            </svg>
                            <h3 class="text-gray-700 font-bold text-lg">Settings</h3>
                        </router-link>

                    </li>

                </ul>
            </div>
            <div class="flex items-center flex-shrink-0  w-full">
                <button @click="toggleShowCreatePostModal"
                    class="w-full py-3 px-6 bg-primary rounded-2xl font-bold text-lg text-white hover:bg-opacity-90    ">Create
                    Post</button>
            </div>
        </div>

 
</template>
  
<script>
import { CalendarIcon, BellIcon, PlusCircleIcon, SearchCircleIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, PlusSmIcon } from '@heroicons/vue/outline'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]

export default {
    components: { CalendarIcon, PlusCircleIcon, ChartBarIcon, SearchCircleIcon, FolderIcon, BellIcon, HomeIcon, InboxIcon, UsersIcon, PlusSmIcon },
    setup() {
        const store=useStore()
        const user=computed(()=>store.getters.getUser)
        const router = useRouter()
        const notificationCount = 10;
        const showCreatePostModal = ref(false)
        const toggleShowCreatePostModal = () => {
            router.push({ name: 'CreatePost' })
        }
        const updateDialogState = () => {
            showCreatePostModal.value = !showCreatePostModal.value
        }
        return {
          user,  notificationCount, navigation, showCreatePostModal, toggleShowCreatePostModal, updateDialogState
        }
    },
}
</script>

<style>
.active-link h3,
.active-link i {
    color: hsl(252, 75%, 60%) !important;
}

.active-link::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 100%;
    background-color: hsl(252, 75%, 60%);
    margin-right: 8px;
    border-radius: 50%;
}

.notifications-count {
    background: var(--color-danger);
    color: var(--color-white);
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
}

.fixed-sidebar {
    position: sticky;
    top: 0px;
    width: 100%;

}
</style>