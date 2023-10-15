<template>
  <div class="bg-gray-300">
    <FilterBar/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      <PostCard v-for="post in posts" :key="post.id" :id="post.id" :avatar="post.avatar" :name="post.name"
                :time="post.time" :type="post.type" :category="post.category" :body="post.body" :photos="post.photos"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterBar from "~/components/home/FilterBar.vue";
import PostCard from "~/components/home/PostCard.vue";

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
