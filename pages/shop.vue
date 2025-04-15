<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const handleScroll = () => {
  const cards = document.querySelectorAll('.parallax-card') as NodeListOf<HTMLElement>;

  cards.forEach((card, index) => {
    const scrollY = window.scrollY;
    card.style.transform = `translateY(${scrollY * (0.03 + index * 0.005)}px)`; // Уменьшенный параллакс
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Добавляем класс для анимации появления
  const cards = document.querySelectorAll('.parallax-card') as NodeListOf<HTMLElement>;
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 100); // Задержка для последовательного появления
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div class="min-h-screen bg-zinc-300">
      <div class="w-[1800px] mx-auto pt-30">
        <div class="grid grid-cols-4 gap-5">
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
          <div class="parallax-card opacity-0 transform translate-y-10">
            <CratForSale />
          </div>
        </div>
      </div>
    </div>
    <!-- Добавляем отступ для футера -->
    <div class="h-20"></div>
  </div>
</template>

<style scoped>
.min-h-screen {
  padding-bottom: 160px; /* Отступ для футера */
}

.parallax-card {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Плавный переход */
}

.parallax-card.fade-in {
  opacity: 1;
  transform: translateY(0); /* Возвращаем в исходное положение */
}
</style>