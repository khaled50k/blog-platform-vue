<template>
    <div class="mobile-menu flex gap-4 items-center flex-shrink-0 bg-white rounded-xl fixed-113">
        <ul class="flex gap-1 w-full">
            <li class="w-full">
                <router-link to="Home"
                    class="w-full p-4 text-center items-center inline-flex gap-1  active:active-link">

                    <span class="text-xl text-center"> <i class="uil uil-home" style="color: hsl(252, 30%, 95%);"></i> </span>
                </router-link>
            </li>
            <li class="w-full ">
                <router-link to="Home"
                    class="w-full p-4 inline-flex items-center  gap-1  active:active-link">
                    <span class="text-xl relative">
                        <i class="uil uil-bell" style="color: hsl(252, 30%, 95%);"></i>
                        <!-- <span class="notifications-count">
                            <small v-if="notificationCount">{{ notificationCount > 9 ? '+9' : notificationCount
                            }}</small>

                        </span> -->
                    </span>

                </router-link>

            </li>

            <li class="w-full">
                <router-link to="Home"
                    class=" items-center w-full p-4 inline-flex gap-1  active:active-link">
                    <span class="text-xl"> <i class="uil uil-compass" style="color: hsl(252, 30%, 95%);"></i> </span>
                </router-link>

            </li>
            <li class="w-full">
                <router-link to="Home"
                    class=" items-center w-full p-4 inline-flex gap-1 active:active-link">
                    <span class="text-xl"> <i class="uil uil-setting" style="color: hsl(252, 30%, 95%);"></i> </span>
                </router-link>

            </li>

        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@media (min-width: 1024px) {
    /* Define the breakpoint above which the menu will be hidden */
    .mobile-menu {
        display: none;
    }
}
.fixed-113 {
    position: fixed;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
