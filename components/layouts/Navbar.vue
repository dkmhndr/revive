<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const route = useRoute();
</script>

<template>
    <div class="navbar bg-green-900 max-w-full px-6 text-white top-0 sticky z-99">
      <div class="navbar-start text-xl" :style="route.name != 'index' ? 'width:100%;' : ''">
          <h1 class="font-bold" v-if="route.name==='index'">REVIVE</h1>
        <div v-if="route.name === 'detail'" >
          <a href="/" class="font-bold"><client-only>
            <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>&nbsp;
          </client-only> Product Detail</a>
        </div>
        <div v-if="route.name === 'pickup'">
          <a href="/" class="font-bold"><client-only>
            <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>&nbsp;
          </client-only> Pickup Detail</a>
        </div>
        <div v-if="route.name === 'lookingstuff'">
          <div class="w-full h-14 py-2 flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="justify-start items-center gap-3 inline-flex">
              <div class="w-6 h-6 relative">
                <a href="/">
                  <client-only>
                    <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
                  </client-only>
                </a>
              </div>
              <div class="justify-start items-center gap-2 flex">
                <img class="w-9 h-9 rounded-full" src="https://placekitten.com/36x36" />
                <div class="flex-col justify-start items-start inline-flex">
                  <div class="w-full h-5 text-white text-sm font-bold leading-tight tracking-wide">Joo Min Ten</div>
                  <div class="justify-start items-center gap-0.5 inline-flex">
                    <div class="text-white text-xs font-normal leading-none">Yogyakarta dan sekitarnya</div>
                    <span class="text-gray-300">•</span>
                    <div class="text-white text-xs font-normal leading-none">12h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="navbar-end" v-if="route.name === 'index'">
        <div class="w-[72px] h-6 justify-start items-start gap-6 inline-flex text-lg text-center">
          <div class="w-6 h-6 relative">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"></font-awesome-icon>
          </div>
          <div class="w-6 h-6 relative">
            <font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
