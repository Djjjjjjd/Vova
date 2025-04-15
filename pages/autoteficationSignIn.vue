<script lang="ts" setup></script>
<template>
  <div class="bg-[url(/images/heroBg.jpg)] w-full min-h-screen flex items-center justify-between">
    <!-- autrosetion -->
    <div class="min-w-[50%] backdrop-blur-md min-h-screen mt-31 ml-auto">
      <!-- form -->
      <div class="flex flex-col items-center mt-25">
        <h3 class="text-white font-bold text-3xl capitalize mb-25">sign in</h3>
        <!-- inputs -->
        <div class="flex flex-col items-center gap-5 w-[80%]" id="inputs">
          <!-- Name Input -->
          <input
            type="text"
            placeholder="Name"
            class="inputs"
          />
          <!-- Email Input -->
          <input
            type="email"
            placeholder="Email"
            class="inputs"
          />
          <!-- Number Input -->
          <input
            type="text"
            placeholder="Phone Number"
            class="inputs"
          />
          <!-- Password Input -->
          <input
            type="password"
            placeholder="Password"
            class="inputs"
          />
        </div>
        <div class="mt-40">
          <NuxtLink to="/" class="text-white font-bold capitalize bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-xl rounded-md px-20 py-4 transition-all">submit</NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="realtive w-[600px]">
    <div class="max-w-[600px] mt-[1000px] parallax-clamp absolute top-[-170px]">
      <img src="/images/clampR.png" alt="clamp" class="drop-shadow-md">
    </div>
    <div class="max-w-[500px] mt-[1000px] parallax-imp absolute top-[-750px] left-25">
      <img src="/images/impR.png" alt="imp" class="drop-shadow-xl hover:drop-shadow-2xl hover:scale-[102%] transition-transform">
    </div>
  </div>
</template>

<style scoped>
.parallax-clamp {
  margin-left: 0; /* Зеркальное расположение */
}

.parallax-imp {
  margin-left: 0; /* Зеркальное расположение */
}
</style>

