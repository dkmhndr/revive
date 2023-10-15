<script setup lang="ts">

import PostCard from "~/components/home/PostCard.vue";
import FilterBar from "~/components/home/FilterBar.vue";
import Categories from "~/components/home/Categories.vue";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import Sort from "~/components/home/Sort.vue";
import Offer from "~/components/home/Offer.vue";
import {ref} from "vue";

const offerBS = ref<InstanceType<typeof VueBottomSheet>>()

const offerNow = () => {
  offerBS.value.open();
}

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
        avatar: "https://placekitten.com/40/40",
        time: "12 hours ago",
        photos: [
          "/img/image_3.png",
          "/img/image_4.png",
          "/img/image_5.png",
          "/img/image_3.png",
          "/img/image_3.png",
          "/img/image_3.png",
        ],
      },
      {
        id: 2,
        name: "Dimas Anjay",
        body: "Gratis for you sweetheart :*",
        avatar: "https://placekitten.com/4040",
        time: "12 hours ago",
        photos: [
          "/img/image_3.png",
          "/img/image_4.png",
          "/img/image_5.png",
          "/img/image_3.png",
          "/img/image_3.png",
          "/img/image_3.png",
        ],
      },
      {
        id: 3,
        name: "Supriyadi",
        body: "Kalo mau punya gw nih",
        avatar: "https://placekitten.com/40/40",
        time: "12 hours ago",
        photos: [
          "/img/image_3.png",
          "/img/image_4.png",
          "/img/image_5.png",
          "/img/image_3.png",
          "/img/image_3.png",
          "/img/image_3.png",
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

    <div class="grid grid-cols-1 gap-4 py-4">
      <PostCard v-for="offering in props.offerings" :key="offering.id" :id="offering.id" :avatar="offering.avatar"
                :name="offering.name" :time="offering.time" :body="offering.body" :photos="offering.photos">
      </PostCard>
    </div>

    <div class="w-full bottom-0 h-14 relative bg-white shadow sticky">
      <div class="left-[16px] top-[8px] absolute bg-green-900 justify-center items-center w-[350px] mx-auto">
        <a href="#" @click="offerNow"  class="w-full h-10 justify-center items-center">
          <div class="bg-green-900w-full px-6 py-2 rounded">
            <div class="text-center text-white text-base font-bold font-['Lato'] leading-normal tracking-wide">Offer Now
            </div>
          </div>
        </a>
      </div>
    </div>

    <client-only>
      <vue-bottom-sheet ref="offerBS" :overlay-color="'#1B77DF80'">
        <Offer/>
      </vue-bottom-sheet>
    </client-only>
  </div>
</template>

<style scoped>

</style>