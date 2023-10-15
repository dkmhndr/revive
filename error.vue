<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })


</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-screen gap-6 ">
      <h1 class="text-6xl  text-primary">
        {{ error.statusCode }}
      </h1>
      <h2 class="text-2xl text-secondary">
        {{ error.message }}
      </h2>
    </div>
  </NuxtLayout>
</template>
