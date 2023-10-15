<template>
  <div class="bg-gray-300">
    <div class="bg-white w-full px-6 py-4 mb-4">
      <div class="justify-start items-center gap-2 inline-flex">
        <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40"/>
        <div class="flex-col justify-start items-start inline-flex">
          <div class="justify-start items-center gap-1 inline-flex">
            <div class="w-fit h-5 text-zinc-700 text-sm font-bold leading-tight tracking-wide">{{ posts[1].name }}</div>
            <span class="text-gray-300">•</span>
            <div class="text-blue-600 text-xs font-normal leading-none tracking-tight">08123456789</div>
            <!--            <div class="h-[3.59px] justify-between items-start flex"></div>-->
          </div>
          <div class="text-neutral-400 text-xs font-normal leading-none">{{ posts[1].location }}</div>
        </div>
      </div>
    </div>
    <div class="bg-white w-full px-6 py-4 mb-4">
      <div>
        <h3 class="font-bold">Pickup Address</h3>
        <p class="py-4">Ground Floor Sahid J-Walk, Jl. Babarsari No. 2, Janti, Caturtunggal, Depok, Sleman, Daerah Istimewa Yogyakarta, Indonesia 55281</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.095602216577!2d110.41156581097042!3d-7.779687477156071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5e877816cf5d%3A0xf7563af0e28d004c!2sJala%20Tech!5e0!3m2!1sen!2sid!4v1697327430151!5m2!1sen!2sid" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-1/2 aspect-video"></iframe>
      </div>
    </div>
    <div class="bg-white w-full px-6 py-4 mb-12">
      <div>
        <h3 class="font-bold">Picked Product</h3>
        <div class="h-5 mb-2 mt-2 w-full justify-between gap-8 items-center inline-flex">
          <div class="w-full text-left text-sm text-gray-500 font-['Lato'] leading-tight tracking-wide">Kipas Angin Cosmos Wadesdes</div>
          <div class="w-fit text-right text-sm text-gray-500 font-['Lato'] leading-tight tracking-wide">Free
          </div>
        </div>
        <hr>
        <div class="h-5 mb-2 mt-2 w-full justify-between gap-8 items-center inline-flex">
          <div class="w-full text-left text-bold text-sm text-black font-['Lato'] leading-tight tracking-wide">Total</div>
          <div class="w-full text-right text-bold text-sm text-black font-['Lato'] leading-tight tracking-wide">Free</div>
        </div>
        <hr>
        <hr>
      </div>
    </div>
  </div>
  <div class="w-full bottom-0 h-14 relative bg-white shadow sticky">
    <div class="left-[16px] top-[8px] absolute justify-center items-center w-full pr-8">
      <a href="#" @click="changeCta"  class="w-full h-10 justify-center items-center">
        <div :class="cta === 'Revive Now' ? 'bg-green-900' : 'bg-gray-900'" class="w-full px-6 py-2 rounded">
          <div class="text-center text-white text-base font-bold font-['Lato'] leading-normal tracking-wide">{{
              cta
            }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterBar from "~/components/home/FilterBar.vue";
import PostCard from "~/components/home/PostCard.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const cta = useState('cta', () => 'Revive Now');

const changeCta = () => {
  cta.value = 'Waiting For Confirmation';
  // set timeout to redirect to home page
  setTimeout(() => {
    window.location.href = '/';
  }, 1500);
}

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
