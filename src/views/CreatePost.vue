
<template>
  
    <div class="bg-white p-4 sm:p-6 flex flex-col  rounded-xl">

        <div class="flex  mb-4 py-1 items-center  flex-col w-full gap-5">
            <div class="min-w-0 flex-0 w-full flex flex-col gap-2">
                <label for="about" class="block text-sm  text-gray-700 font-semibold text-lg"> Post photo
                </label>
                <div
                    class="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                            aria-hidden="true">
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                            <label for="file-upload"
                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <div class="min-w-0 flex-0 flex  flex-col w-full gap-2">
                <label for="about" class="block text-sm  text-gray-700 font-semibold text-lg"> Description
                </label>
                <div class=" w-full   border border-gray-300 border-solid ">
                    <textarea id="about" name="about" rows="5"
                        class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full text-sm border border-gray-300  "
                        placeholder="Post Description..."></textarea>

                </div>
            </div>
            <div class="min-w-0 flex-0 w-full">
                <button type="button"
                    class="w-full py-3 px-6 text-gray-500 rounded-2xl font-semibold text-lg border-2 border-solid tw-border-solid border-gray-500 hover:border-primary hover:text-primary hover:bg-opacity-0 transition-colors duration-300"
                    @click="open = false">Post</button>
            </div>




        </div>


</div>
    <!-- -------------------------------------------- -->
</template>
    

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'

export default {
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        CheckIcon,
    },
    setup(props, { emit }) {

        const closeTap = () => {



        }
        return {
            closeTap
        }
    }, props: {
        open
    }
}
</script>