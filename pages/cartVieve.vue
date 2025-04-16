<script lang="ts" setup></script>
<template>
  <div class="h-screen pt-40">
    <div class="container mx-auto bg-white rounded-xl p-10 flex">
      <div class="w-[65%]">
        <img src="/images/tem2.jpg" alt="temp" class="w-[90%] rounded-sm">
      </div>
      <!-- text -->
      <div class="w-[35%] flex flex-col items-center py-10 gap-10">
        <h3 class="font-bold text-2xl text-zinc-950 capitalaze">Template</h3>
        <p class="text-sm text-zinc-700 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat suscipit ad dolore quae officiis,
          adipisci error, facilis, aliquam velit corporis inventore perspiciatis autem rem repellendus voluptatem.
          Dolores, nisi modi.
        </p>
        <NuxtLink to="" class="btn-primary capitalize py-3 px-20 text-xl font-bold hover:scale-[101%] mt-auto">order
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
