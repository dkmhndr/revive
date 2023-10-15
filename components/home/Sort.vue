<template>
  <div class="px-6">
    <h3 class="text-xl py-4 font-bold">Sort</h3>
    <hr class="mb-2">
    <a href="#">
      <div class="h-5 mb-2 mt-2 w-full justify-between items-center inline-flex">
        <div class="text-sm font-bold font-['Lato'] leading-tight tracking-wide">All</div>
        <div class="w-5 h-5 relative text-green-500">
          <font-awesome-icon :icon="['fas', 'circle-check']"></font-awesome-icon>
        </div>
      </div>
      <hr>
    </a>
    <a href="#">
      <div class="h-5 mb-2 mt-2 w-full justify-between items-center inline-flex">
        <div class="text-sm font-bold font-['Lato'] leading-tight tracking-wide">Looking for</div>
      </div>
      <hr>
    </a>
    <a href="#">
      <div class="h-5 mb-2 mt-2 w-full justify-between items-center inline-flex">
        <div class="text-sm font-bold font-['Lato'] leading-tight tracking-wide">Offering</div>
      </div>
      <hr>
    </a>
  </div>
</template>

<script setup lang="ts">


</script>