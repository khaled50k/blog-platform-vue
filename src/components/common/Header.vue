<template>
  
  <header class="bg-white fixed left-0  w-full top-0 py-2 w-[inherit] z-50">

    <div
      class="container flex justify-between items-center w-[inherit]">
      <h1 class="text-xl font-semibold text-gray-600">Social App</h1>
      <div class="bg-gray-100 flex  w-150 items-center justify-center rounded-md py-1 px-3 md:flex hidden ">
        <!-- Updated class for hiding on mobile screens -->
        <input type="text" placeholder="Search..."
          class="border w-full border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 w-full">
        <SearchIcon class="h-8 text-gray-600 "></SearchIcon> <!-- Adjusted icon color -->
      </div>
      <Menu as="div" class="relative z-30 inline-block text-left z-50">
        <div>
          <MenuButton class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
            <span class="sr-only">Open options</span>
            <img class="inline-block h-10 w-10 rounded-full" :src="user.profilePicture" :alt="user.username +' profile picture'" />
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <router-link :to="{name:'Profile',params:{userId:user._id}}" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']" class="items-center">
                <UserCircleIcon  class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Profile</span>
              </router-link>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link :to="{name:'Login'}" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']" class="items-center">
                <LogoutIcon   class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Log out</span>
              </router-link>
              </MenuItem>
         
          
            </div>
          </MenuItems>
        </transition>
      </Menu>


    </div>

  </header>

</template>

<script>
import { LogoutIcon } from "@heroicons/vue/outline"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { CodeIcon ,UserCircleIcon ,DotsVerticalIcon, FlagIcon, StarIcon, SearchIcon } from '@heroicons/vue/solid'

export default {
  components: {
    CodeIcon, DotsVerticalIcon,LogoutIcon ,UserCircleIcon , FlagIcon, StarIcon, SearchIcon, Menu, MenuButton, MenuItem, MenuItems
  },
  setup(props) {

  },
  data() {
    return {
      navigation
    }
  },
}
</script>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store=useStore();
const user=computed(()=>store.getters.getUser)
</script>

<style></style>
