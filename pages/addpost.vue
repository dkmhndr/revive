<script setup lang="ts">
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import Offer from "~/components/home/Offer.vue";
import {ref} from "vue";

const mode = useState('mode', () => 1);

const changeMode = () => {
  mode.value = mode.value === 1 ? 2 : 1;
}

const postBS = ref<InstanceType<typeof VueBottomSheet>>()

const postNow = () => {
  postBS.value.open();
  // delay 1.5 second, redirect to home
  setTimeout(() => {
    window.location.href = '/';
  }, 1500);
}
</script>

<template>
  <div v-if="mode===1" class="w-full h-[764px] flex-col justify-start items-start gap-2 inline-flex">
    <div class="h-[76px] px-4 py-3 bg-white flex-col justify-start items-start gap-1 flex">
      <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
        <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Type</span></div>
      </div>
      <div class="w-[343px] justify-start items-start gap-5 inline-flex">
        <div @click="changeMode" class="justify-start items-center gap-1 flex">
          <input type="radio" class="radio" name="" id="" v-bind:checked="mode===1">
          <div class="text-zinc-700 text-sm font-normal leading-tight">Offering</div>
        </div>
        <div @click="changeMode" class="justify-start items-center gap-1 flex">
          <input type="radio" class="radio" name="" id="" v-bind:checked="mode===2">
          <div class="text-zinc-700 text-sm font-normal leading-tight">Looking for</div>
        </div>
      </div>
    </div>
    <div class="w-[375px] h-[680px] bg-white flex-col justify-start items-center flex">
      <div class="w-[375px] h-px justify-center items-center inline-flex"></div>
      <div class="flex-col justify-start items-start flex">
        <div class="w-full h-[84px] px-4 py-2 flex-col justify-start items-start gap-2.5 inline-flex">
          <div class="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
              <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Product Name</span></div>
            </div>
            <div class="self-stretch h-10 p-2 rounded-[5px] border border-stone-300 flex-col justify-center items-start gap-2.5 flex">
              <input type="text" class="form-control w-full" name="" id="" placeholder="Product Name">
            </div>
          </div>
        </div>
        <div class="px-4 w-full h-[100px] flex-col justify-start items-start gap-1 inline-flex">
          <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
            <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Value of Money</span></div>
          </div>
          <div class="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
            <div class="self-stretch h-10 p-2 rounded-[5px] border border-stone-300 flex-col justify-center items-start gap-2.5 flex">
              <input type="number" class="form-control w-full" name="" id="" placeholder="Value of Money">
            </div>
            <div class="w-[328px] justify-start items-center gap-1 inline-flex">
              <input type="checkbox" class="checkbox" name="" id="">
              <div class="text-zinc-700 text-sm font-normal leading-tight">Free</div>
            </div>
          </div>
        </div>
        <div class="h-[132px] px-4 py-2 flex-col justify-start items-start gap-2.5 flex">
          <div class="self-stretch h-[116px] flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
              <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Product Condition</span></div>
            </div>
            <div class="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div class="w-[328px] justify-start items-center gap-1 inline-flex">
                <input type="radio" class="radio" name="condition" id="">
                <div class="text-zinc-700 text-sm font-normal leading-tight">Like new</div>
              </div>
              <div class="w-[328px] justify-start items-center gap-1 inline-flex">
                <input type="radio" class="radio" name="condition" id="">
                <div class="text-zinc-700 text-sm font-normal leading-tight">Gently used</div>
              </div>
              <div class="w-[328px] justify-start items-center gap-1 inline-flex">
                <input type="radio" class="radio" name="condition" id="">
                <div class="text-zinc-700 text-sm font-normal leading-tight">Well-worn</div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-36 px-4 py-2 flex-col justify-start items-start gap-2.5 flex">
          <div class="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
              <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Description</span></div>
            </div>
            <div class="w-full h-fit px-1 py-1 rounded-lg justify-start items-start gap-4 inline-flex">
              <div class="flex-col justify-start items-start gap-1 inline-flex">
                <textarea class="w-100 textarea bg-gray-200">Type here the description your product</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="h-36 px-4 py-2 flex-col justify-start items-start gap-2.5 flex">
          <div class="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
              <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Upload</span></div>
            </div>
            <div class="w-[343px] h-[100px] relative bg-white">
              <div class="w-[343px] h-[100px] left-0 top-0 absolute rounded border border-stone-300"></div>
              <div class="left-[61px] top-[14px] absolute flex-col justify-start items-center gap-1 inline-flex">
                <div class="w-[36.92px] h-8 relative">
                  <div class="w-[5.18px] h-[8.06px] left-[16px] top-[18.36px] absolute">
                  </div>
                </div>
                <input type="file" name="Upload File" class="form-control">
<!--                <div class="text-center text-zinc-800 text-xs font-bold leading-none tracking-wide">Upload photo</div>-->
<!--                <div class="text-center text-neutral-500 text-xs font-normal leading-none tracking-tight">Max.10 MB/file (png, img, jpg, and jpeg)</div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="mode===2" class="w-full h-[730px] flex-col justify-start items-start gap-2 inline-flex">
    <div class="h-[76px] px-4 py-3 bg-white flex-col justify-start items-start gap-1 flex">
      <div class="self-stretch py-0.5 justify-start items-start gap-2 inline-flex">
        <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Type</span></div>
      </div>
      <div class="w-[343px] justify-start items-start gap-5 inline-flex">
        <div @click="changeMode" class="justify-start items-center gap-1 flex">
          <input type="radio" class="radio" name="" id="" v-bind:checked="mode===1">
          <div class="text-zinc-700 text-sm font-normal leading-tight">Offering</div>
        </div>
        <div @click="changeMode" class="justify-start items-center gap-1 flex">
          <input type="radio" class="radio" name="" id="" v-bind:checked="mode===2">
          <div class="text-zinc-700 text-sm font-normal leading-tight">Looking for</div>
        </div>
      </div>
    </div>
    <div class="w-full px-4 py-3 bg-white flex-col justify-start items-start gap-1 flex">
      <div class="w-full py-0.5 justify-start items-start gap-2 inline-flex">
        <div class="grow shrink basis-0"><span :style="'text-red-600 text-sm font-bold leading-tight tracking-wide'">*</span><span :style="'text-zinc-700 text-sm font-bold leading-tight tracking-wide'"> Post</span></div>
      </div>
      <div class="w-full h-fit px-1 py-1 rounded-lg justify-start items-start gap-4 inline-flex">
        <div class="flex-col justify-start items-start gap-1 inline-flex">
          <textarea class="textarea bg-gray-200">What are you looking for</textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-14 px-4 py-2 bg-white shadow justify-center items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-4 inline-flex">
      <div class="h-10 justify-center items-center gap-4 flex">
        <div @click="postNow" class="grow w-full shrink basis-0 px-6 py-2 bg-green-600 rounded flex-col justify-start items-center gap-2 inline-flex">
          <div  class="justify-start w-full items-start gap-2 inline-flex">
            <div class="text-center text-white text-base font-bold  leading-normal tracking-wide">Post</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <client-only>
    <vue-bottom-sheet ref="postBS" :overlay-color="'#1B77DF80'">
      <div class="w-full h-fit px-4 py-6 bg-white rounded-2xl flex-col justify-start items-center gap-5 inline-flex">
        <client-only>
          <font-awesome-icon :icon="['fas', 'check-circle']" class="text-6xl w-20 h-20 text-green-500"></font-awesome-icon>
        </client-only>
        <div class="self-stretch text-center text-neutral-700 text-xl font-bold leading-7 tracking-wide">Post success</div>
      </div>
    </vue-bottom-sheet>
  </client-only>
</template>

<style scoped>

</style>