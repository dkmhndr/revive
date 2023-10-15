<script setup lang="ts">

import PostCard from "~/components/home/PostCard.vue";
import FilterBar from "~/components/home/FilterBar.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  avatar: {
    type: String,
    required: true,
    default: "https://via.placeholder.com/40x40",
  },
  name: {
    type: String,
    required: true,
    default: "Dayat Rungkad",
  },
  time: {
    type: String,
    required: true,
    default: "12 hours ago",
  },
  type: {
    type: String,
    required: true,
    default: "Looking for",
  },
  category: {
    type: String,
    required: true,
    default: "Electronic",
  },
  body: {
    type: String,
    required: true,
    default: "Cari Kipas Angin Kosmos Nich",
  },
  offerings: {
    type: Array,
    required: false,
    default: [
      {
        id: 1,
        name: "Mama Yukero",
        body: "Aku ada nihhh",
        avatar: "https://via.placeholder.com/40x40",
        time: "12 hours ago",
        photos: [
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
        ],
      },
      {
        id: 2,
        name: "Mama Yukero",
        body: "Aku ada nihhh",
        avatar: "https://via.placeholder.com/40x40",
        time: "12 hours ago",
        photos: [
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
        ],
      },
      {
        id: 3,
        name: "Supriyadi",
        body: "Kalo mau punya gw nih",
        avatar: "https://via.placeholder.com/40x40",
        time: "12 hours ago",
        photos: [
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
          "https://via.placeholder.com/150x150",
        ],
      },
    ]
  }
});

</script>

<template>
  <div class="bg-gray-300">
    <div class="w-full h-fit py-3 bg-white flex-col justify-start items-center gap-3 inline-flex">
      <div class="w-full flex-col justify-start items-start gap-2 flex">
        <div class="h-fit px-4 flex-col justify-start items-start gap-1 flex">
          <div class="justify-start items-center gap-0.5 inline-flex">
            <div class="px-2 bg-green-100 text-green-600  rounded-xl justify-center items-center gap-2.5 flex">
              <div class="p-1 text-xs font-normal leading-none tracking-tight">Looking For</div>
            </div>
            <span class="text-gray-300">•</span>
            <div class="text-blue-600 text-xs font-normal leading-none tracking-tight">{{ props.category }}</div>
          </div>
          <div class="py-2 w-full text-zinc-700 text-sm font-semibold text-xl leading-tight"><p>{{
              props.body
            }}</p>
          </div>
          <div class="py-2 w-full text-zinc-700 text-sm font-normal text-lg leading-tight"><p>{{
              props.offerings.length
            }} Jawaban</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">

    </div>
  </div>
</template>

<style scoped>

</style>