<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Закрытие меню при изменении маршрута
const route = useRoute();
watch(route, () => {
  isDropdownOpen.value = false;
});
</script>

<template>
  <header class="w-full backdrop-blur-sm fixed z-100">
    <div class="container mx-auto p-5">
      <div class="flex items-center justify-between">
        <!-- logo -->
         <a href="/">
           <div class="flex items-center gap-5 cursor-pointer">
             <img src="/images/logoBlack.png" class="max-w-[90px]" alt="logo" />
             <div>
               <h2>СТУДИЯ ИМПЛАНТОЛОГИИ</h2>
               <h2>ДОКТОРА ДЗЮБЫ</h2>
             </div>
           </div>
         </a>
        <!-- nav -->
        <div class="flex items-center gap-20">
          <nav class="relative">
            <a
              class="nav-link cursor-pointer"
              id="template"
              @click="toggleDropdown"
            >
              Create New Template
            </a>
            <!-- Dropdown Menu -->
            <div
              v-if="isDropdownOpen"
              class="absolute top-10 left-0 w-[230px] h-[350px] backdrop-blur-sm bg-zinc-300/30 rounded-md shadow-md flex flex-col gap-5 p-5"
            >
              <NuxtLink to="/shop" class="dropdown-link">Template 1</NuxtLink>
              <NuxtLink to="/template2" class="dropdown-link">Template 2</NuxtLink>
              <NuxtLink to="/template3" class="dropdown-link">Template 3</NuxtLink>
              <NuxtLink to="/template4" class="dropdown-link">Template 4</NuxtLink>
            </div>
          </nav>
          <NuxtLink to="" class="nav-link">About Us</NuxtLink>
          <NuxtLink to="" class="nav-link">Contacts</NuxtLink>
          <div>
            <NuxtLink to="/autoteficationSignIn" class="btn-primary px-10 py-3">Sign In</NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<style scoped>
/* Стили для выпадающего меню */
</style>
