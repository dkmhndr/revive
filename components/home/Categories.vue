<template>
  <div class="px-6">
    <h3 class="text-xl py-4 font-bold">Category</h3>
    <hr class="mb-2">
    <div v-for="category in categories" :key="category">
      <a href="#">
        <div class="h-5 mb-2 mt-2 w-full justify-between items-center inline-flex">
          <div class="text-sm font-bold font-['Lato'] leading-tight tracking-wide">{{ category }}</div>
          <div v-if="category==='All'" class="w-5 h-5 relative text-green-500">
            <client-only>
              <font-awesome-icon :icon="['fas', 'circle-check']"></font-awesome-icon>
            </client-only>
          </div>
        </div>
        <hr>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

const categories = ["All", "Baby goods", "Beauty", "Books", "Cardboard", "Clothing", "Electronics", "Furniture", "Sport", "Toys", "Other"];

</script>