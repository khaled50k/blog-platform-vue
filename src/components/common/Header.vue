<template>
  <header class="bg-white  fixed w-full top-0 py-2">

    <div class="container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl mx-auto flex justify-between items-center w-full">
      <h1 class="text-xl font-semibold text-gray-600">Social App</h1>
      <div class="bg-gray-100 flex  w-150 items-center justify-center rounded-md py-1 px-3 md:flex hidden">
        <!-- Updated class for hiding on mobile screens -->
        <input type="text" placeholder="Search..."
          class="border w-full border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 w-full">
        <SearchIcon class="h-8 text-gray-600 "></SearchIcon> <!-- Adjusted icon color -->
      </div>
      <img class="inline-block h-10 w-10 rounded-full"
        src="../../assest/social logo.png"
        alt="" />

    </div>

  </header>
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
import { SearchIcon } from '@heroicons/vue/solid'
export default {
  components: {
SearchIcon
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

<style></style>
