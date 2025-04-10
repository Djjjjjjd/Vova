<script lang="ts" setup></script>
<template>
  <div class="w-[420px] h-[420px] bg-white shadow-md hover:scale-[105%] hover:shadow-xl rounded-xl p-5 flex flex-col items-center gap-5 transition-transform">
    <div class="rounded-md w-[360px] h-[280px]">
      <img src="/images/tem2.jpg" alt="tamplate">
    </div>
    <!-- tsummary -->
    <div class="flex justify-between gap-35 items-center">
      <!-- text -->
      <div class="flex flex-col gap-3 max-w-[130px] justify-between">
        <h3 class="font-bold capitalize">
          template
        </h3>
        <p class="text-zinc-300 text-sm"> Lorem ipsum dolor  </p>
      </div>
      <!-- indicator -->
       <div class="flex flex-col items-end gap-5">
        <div class="bg-lime-500 w-[20px] h-[20px] rounded-full"></div>
        <button class="bg-zinc-300 text-white hover:bg-blue-400 rounded-sm font-bold px-5 py-1">vieve</button>
       </div>
    </div>
  </div>
</template>
