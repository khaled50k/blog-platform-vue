<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class=" w-full max-h-full m-w-auto flex-1 flex flex-col min-h-0 fixed-sidebar ">
        <div class="flex-1 flex flex-col   overflow-y-auto gap-5   ">
            <div class="flex gap-4 items-center flex-shrink-0 px-4 bg-white p-4 rounded-xl">
                <img class="inline-block h-10 w-10 rounded-full"
                    src="../../assest/social logo.png"
                    alt="" />
                <div class="flex flex-col">
                    <h3>My Name</h3>
                    <p class="text-gray-400">@khaled walead</p>

                </div>
            </div>

            <div class="flex gap-4 items-center flex-shrink-0  bg-white   rounded-xl">
                <ul class="flex flex-col gap-1 w-full">
                    <li class="w-full">
                        <router-link to="Home"
                            class="w-full p-4 text-center items-center inline-flex gap-1 hover:bg-gray-100 active:active-link">

                            <span class="text-xl text-center"> <i class="uil uil-home text-gray-500  "></i> </span>
                            <h3 class="text-gray-800 font-bold text-lg">Home</h3>
                        </router-link>
                    </li>
                    <li class="w-full ">
                        <router-link to="Home"
                            class="w-full p-4 inline-flex items-center  gap-1 hover:bg-gray-100 active:active-link">
                            <span class="text-xl relative">
                                <i class="uil uil-bell text-gray-500 lg"></i>
                                <span class="notifications-count">
                                    <small v-if="notificationCount">{{ notificationCount > 9 ? '+9' : notificationCount
                                    }}</small>

                                </span>
                            </span>

                            <h3 class="text-gray-700 font-bold text-lg">Notification</h3>
                        </router-link>

                    </li>

                    <li class="w-full">
                        <router-link to="Home"
                            class=" items-center w-full p-4 inline-flex gap-1 hover:bg-gray-100 active:active-link">
                            <span class="text-xl"> <i class="uil uil-compass text-gray-500 lg "></i> </span>
                            <h3 class="text-gray-700 font-bold text-lg">Explore</h3>
                        </router-link>

                    </li>
                    <li class="w-full">
                        <router-link to="Home"
                            class=" items-center w-full p-4 inline-flex gap-1 hover:bg-gray-100 active:active-link">
                            <span class="text-xl"> <i class="uil uil-setting text-gray-500 lg "></i> </span>
                            <h3 class="text-gray-700 font-bold text-lg">Settings</h3>
                        </router-link>

                    </li>






                </ul>
            </div>

        </div>

    </div>
</template>
  
<script>
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/outline'

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]

export default {
    setup() {
        const notificationCount = 10;
        return {
            notificationCount, navigation, CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon
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
    top: 80px;
   

    width: 100%;

}
</style>