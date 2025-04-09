<script lang="ts" setup>
</script>
<template>
  <header class="w-full backdrop-blur-sm fixed z-100">
    <div class="container mx-auto p-5">
      <div class="flex items-center justify-between">
        <!-- logo -->
        <div class="flex items-center gap-5 cursor-pointer">
          <img src="/images/logoBlack.png" class="max-w-[90px]" alt="logo" />
          <div class="">
            <h2>СТУДИЯ ИМПЛАНТОЛОГИИ</h2>
            <h2>ДОКТОРА ДЗЮБЫ</h2>
          </div>
        </div>
        <!-- nav -->
        <div class=" flex items-center gap-20">
          <nav class="flex gap-5">
            <NuxtLink to="" class="nav-link">Create New Template</NuxtLink>
            <NuxtLink to="" class="nav-link">About Us</NuxtLink>
            <NuxtLink to="" class="nav-link">Contacts</NuxtLink>
          </nav>
          <div class="">
            <button class="btn-primary px-10 py-3">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
