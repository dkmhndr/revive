<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <a href="/detail">
  <div class="w-full h-fit py-3 bg-white flex-col justify-start items-center gap-3 inline-flex">
    <div class="px-4 h-5 mb-2 mt-2 w-full justify-between items-center inline-flex">
      <div class="justify-start items-center gap-2 inline-flex">
        <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40"/>
        <div class="flex-col justify-start items-start inline-flex">
          <div class="justify-start items-center gap-[182px] inline-flex">
            <div class="w-fit h-5 text-zinc-700 text-sm font-bold leading-tight tracking-wide">{{ props.name }}</div>
            <div class="h-[3.59px] justify-between items-start flex"></div>
          </div>
          <div class="text-neutral-400 text-xs font-normal leading-none">{{ props.time }}</div>
        </div>
      </div>
      <div class="w-5 h-5 relative">
        <font-awesome-icon :icon="['fas', 'ellipsis']"></font-awesome-icon>
      </div>
    </div>
    <div class="w-full flex-col justify-start items-start gap-2 flex">
      <div class="h-fit px-4 flex-col justify-start items-start gap-1 flex">
        <div class="justify-start items-center gap-0.5 inline-flex">
          <div :class="props.type === 'Looking for'? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'"
               class="px-2  rounded-xl justify-center items-center gap-2.5 flex">
            <div class="p-1  text-xs font-normal leading-none tracking-tight">{{ props.type }}</div>
          </div>
          <span class="text-gray-300">•</span>
          <div class="text-blue-600 text-xs font-normal leading-none tracking-tight">{{ props.category }}</div>
        </div>
        <div class="py-2 w-full text-zinc-700 text-sm font-normal leading-tight"><p>{{
            props.body
          }}</p>
          <div class="carousel py-4" v-if="photos?.length > 0">
            <div class="carousel-item" v-for="photo in props.photos" :key="id" style="margin: 0 8px;">
              <img :src="photo.toString()"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </a>
</template>

<style scoped>

</style>