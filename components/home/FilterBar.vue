<template>
  <div class="px-6 py-4 bg-white">
    <p>Location: <a href="#"  class="text-blue-500 font-semibold">Sleman, Yogyakarta <font-awesome-icon :icon="['fas', 'chevron-down']"></font-awesome-icon></a></p>
  </div>
  <div class="px-6 pb-4 bg-white">
    <div class="w-fit bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div class="justify-start items-start gap-8 inline-flex">
          <p>Category: <a href="#" @click="openCategories" class="text-blue-500 font-semibold">All <font-awesome-icon :icon="['fas', 'chevron-down']"></font-awesome-icon></a></p>
          <p>Sort: <a href="#" @click="openSort" class="text-blue-500 font-semibold">All <font-awesome-icon :icon="['fas', 'chevron-down']"></font-awesome-icon></a></p>
      </div>
    </div>
  </div>
  <client-only>
    <vue-bottom-sheet ref="categories" :overlay-color="'#1B77DF80'">
        <Categories/>
    </vue-bottom-sheet>
    <vue-bottom-sheet ref="sort" :overlay-color="'#1B77DF80'">
        <Sort/>
    </vue-bottom-sheet>

  </client-only>
</template>

<script setup lang="ts">
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Categories from "~/components/home/Categories.vue";
import Sort from "~/components/home/Sort.vue";

let selectedBottomSheet = ""
const categories = ref<InstanceType<typeof VueBottomSheet>>()

const openCategories = () => {
  categories.value.open();
}

const sort = ref<InstanceType<typeof VueBottomSheet>>()

const openSort = () => {
  sort.value.open();
}


</script>

<style scoped>

</style>