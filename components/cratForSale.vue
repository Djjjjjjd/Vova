<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  publishedAt: string
  imageUrl?: string
}>();
</script>
<template>
  <div
    class="w-[420px] h-[420px] bg-white shadow-md hover:scale-[105%] hover:shadow-xl rounded-xl p-5 flex flex-col items-center gap-5 transition-transform">
    <div class="rounded-md w-[360px] h-[280px]">
      <img v-if="imageUrl" :src="imageUrl" alt="tamplate">
    </div>
    <!-- tsummary -->
    <div class="flex justify-between gap-35 items-center">
      <!-- text -->
      <div class="flex flex-col gap-3 max-w-[130px] justify-between">
        <h3 class="font-bold capitalize">
          {{ title }}
        </h3>
        <p class="text-zinc-300 text-sm"> {{ description }} </p>
      </div>
      <div class="">
        <p class="text-zinc-700 text-sm">{{ new Date(publishedAt).toLocaleString() }}</p>
      </div>
      <!-- indicator -->
      <div class="flex flex-col items-end gap-5">
        <div class="bg-lime-500 w-[20px] h-[20px] rounded-full"></div>
        <NuxtLink to="/cartVieve" class="bg-zinc-300 text-white hover:bg-blue-400 rounded-sm font-bold px-5 py-1">vieve
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
