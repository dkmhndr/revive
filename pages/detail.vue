<template>
  <div class="">
    <div class="carousel aspect-1/1 w-full object-fill">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="/img/image_3.png" class="w-full"/>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="/img/image_4.png" class="w-full"/>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="/img/image_5.png" class="w-full"/>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    <div class="px-4 h-5 mb-2 w-full justify-between items-center inline-flex">
      <div :class="!true? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'"
           class="px-2  rounded-xl justify-center items-center gap-2.5 flex">
        <div class="p-1  text-xs font-normal leading-none tracking-tight">Offering</div>
      </div>
      <div class="w-5 h-5 relative text-block text-xl">
        <font-awesome-icon :icon="['fas', 'share-nodes']"></font-awesome-icon>
      </div>
    </div>
    <div class="px-6">
      <div class="mb-4">
        <h2 class="text-xl">Kipas angin kosmos wadesdes</h2>
        <client-only>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2"></font-awesome-icon>
        </client-only>
        Sleman, DIY
      </div>
      <div>
        <h3 class="font-bold">Product Detail</h3>
        <div class="h-5 mb-2 mt-2 w-1/2 justify-evenly gap-8 items-center inline-flex">
          <div class="w-full text-left text-sm text-gray-500 font-['Lato'] leading-tight tracking-wide">Category</div>
          <div class="w-full text-left text-sm text-blue-500 font-['Lato'] leading-tight tracking-wide">Electronics
          </div>
        </div>
        <hr>
        <div class="h-5 mb-2 mt-2 w-1/2 justify-evenly gap-8 items-center inline-flex">
          <div class="w-full text-left text-sm text-gray-500 font-['Lato'] leading-tight tracking-wide">Condition</div>
          <div class="w-full text-left text-sm text-black font-['Lato'] leading-tight tracking-wide">Like New</div>
        </div>
        <hr>
        <div class="h-5 mb-2 mt-2 w-1/2 justify-evenly gap-8 items-center inline-flex">
          <div class="w-full text-left text-sm text-gray-500 font-['Lato'] leading-tight tracking-wide">Offering Price
          </div>
          <div class="w-full text-left text-sm text-black font-['Lato'] leading-tight tracking-wide">Free</div>
        </div>
        <hr>
      </div>
      <div>
        <div tabindex="0" class="collapse collapse-arrow border-0">
          <div class="collapse-title font-semibold px-0">
            Product Description
          </div>
          <div class="collapse-content px-0 mb-32">
            <p>Alasan dijual: pindah kos.<br>Kondisi produk:
              <ul class="list-disc ml-8">
              <li>Button kipas mendelep</li>
              <li>Tidak ada tutup nya</li>
              <li>Bisa pasang di dinding</li>
              <li>Bisa di meja</li>
              <li>Bisa di lantai</li>
              <li>Bisa berdiri</li>
              <li>Tahan lama</li>
              <li>Masih garansi sampai akhir bulan oktober</li>
              </ul>
              <br> 75 watt 220V/50HZ
              <br>ukuran: 381x195x361
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="w-full bottom-0 h-14 relative bg-white shadow sticky">
    <div class="left-[16px] top-[8px] absolute justify-center items-center w-full pr-8">
      <a href="/pickup" class="w-full h-10 justify-center items-center">
        <div class="w-full px-6 py-2 bg-green-900 rounded">
            <div class="text-center text-white text-base font-bold font-['Lato'] leading-normal tracking-wide">Interested</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterBar from "~/components/home/FilterBar.vue";
import PostCard from "~/components/home/PostCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const posts = [
  {
    id: 1,
    name: "Dayat Rungkad",
    body: "Cari Kipas Angin Kosmos Wadas Memanggil",
    type: "Looking for",
    category: "Electronic",
    location: "Sleman, Yogyakarta",
    date: "2021-08-01",
    time: "12 hours ago"
  },
  {
    id: 2,
    name: "Sumini Mletre",
    body: "Mo Jual Kipas Angin Cosmos Wadas Memanggil",
    type: "Offering",
    category: "Electronic",
    location: "Sleman, Yogyakarta",
    date: "2021-08-01",
    time: "12 hours ago",
    photos: [
      // image from public/img folder
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
    name: "Gijono Kewer",
    body: "Kardus ngga kepake nichhh",
    type: "Offering",
    category: "Cardboard",
    location: "Sleman, Yogyakarta",
    date: "2021-08-01",
    time: "12 hours ago",
    photos: [
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
      "https://via.placeholder.com/150x150",
    ],
  },
  {
    id: 4,
    name: "Dika Slebew",
    body: "Cari life partner",
    type: "Looking for",
    category: "Life Partner",
    location: "Sleman, Yogyakarta",
    date: "2021-08-01",
    time: "12 hours ago",
  }

]
</script>

<style scoped></style>
