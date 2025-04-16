<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isDropdownOpen = ref(false);
const user = ref(null);
const router = useRouter();

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Закрытие меню при изменении маршрута
const route = useRoute();
watch(route, () => {
  isDropdownOpen.value = false;
});

// Функция для прокрутки к футеру с эффектом скольжения
const scrollToFooter = () => {
  const footer = document.querySelector('footer');
  if (footer) {
    window.scrollTo({
      top: footer.offsetTop,
      behavior: 'smooth', // Плавный скролл
    });
  }
};

// Проверка токена и данных пользователя при загрузке
onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

const logout = () => {
  // Удаление токена и данных пользователя
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
  user.value = null;

  // Перенаправление на главную страницу
  router.push('/');
};
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
            <a class="nav-link cursor-pointer" id="template" @click="toggleDropdown">Create New Template</a>
            <!-- Dropdown Menu -->
            <div v-if="isDropdownOpen"
              class="absolute top-10 left-0 w-[230px] h-[350px] backdrop-blur-sm bg-zinc-300/30 rounded-md shadow-md flex flex-col gap-5 p-5">
              <NuxtLink to="/shop" class="dropdown-link">Template</NuxtLink>
              <NuxtLink to="/creator" class="dropdown-link">Template 2</NuxtLink>
              <NuxtLink to="/template3" class="dropdown-link">Template 3</NuxtLink>
              <NuxtLink to="/template4" class="dropdown-link">Template 4</NuxtLink>
            </div>
          </nav>
          <a class="nav-link cursor-pointer" id="about" @click="scrollToFooter">About Us</a>
          <div v-if="user" class="flex items-center gap-4">
            <span class="text-lg">Привет, {{ user.username }}</span>
            <button @click="logout" class="btn-primary-outline px-4 py-2">
              Logout
            </button>
          </div>
          <NuxtLink v-else to="/autoteficationSignIn" class="btn-primary px-10 py-3">
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
