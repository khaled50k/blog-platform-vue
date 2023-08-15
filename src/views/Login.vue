<template>
  <div class=" w-full min-h-[100vh] flex items-center justify-center bg-white" v-if="isLoading">
    <div class="custom-loader"></div>
  </div>

  <div class=" w-full min-h-screen " v-else>

    <div class="container mx-auto max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-6xl flex justify-start items-start w-full  "
      style="height: 100%; max-height:100% ;">
      <div class="  ml-0 mt-[64px]   py-4 items-start justify-center flex w-full min-h-full "
        style="width: 100%; max-width:100% ">


        <div class="w-full h-full flex items-center justify-center">
          <div class="w-full sm:w-[450px] h-screen">
            <div class="bg-white p-4 sm:p-6 flex flex-col  rounded-xl ">

              <div class="flex  mb-4 py-1 items-center  flex-col w-full gap-5">

                <h2 class="text-2xl font-semibold text-gray-800 text-center">Log in</h2>
                <input type="text"
                  class="w-full px-4 py-2 mb-2 rounded-md  text-gray-700  border border-solid border-t-1 border-gray-300"
                  placeholder="Username" v-model="user.username">
                <input type="password"
                  class="w-full px-4 py-2 mb-2 rounded-md  text-gray-700  border border-solid border-t-1 border-gray-300"
                  placeholder="Password" v-model="user.password">
                <button @click="login"
                  class="w-full px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-opacity-90 mt-4">Log
                  in</button>
                <p class="text-gray-600 text-md mt-2">Do not have an account? <router-link to="/register"
                    class="text-primary">Create an account</router-link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingNav class="w-full"></FloatingNav>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import FloatingNav from "../components/common/FloatingNav.vue";
import Header from "../components/common/Header.vue";
const store = useStore()
const router = useRouter()
const user = ref({ username: '', passowrd: '' });
const login = async () => {
  try {
    await store.dispatch('login', user.value)
    router.push({ 'name': "Home" })
  } catch (error) {

  }
}

</script>
