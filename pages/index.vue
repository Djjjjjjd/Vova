<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
  lastScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const clamp = document.querySelector('.parallax-clamp') as HTMLElement;
      const imp = document.querySelector('.parallax-imp') as HTMLElement;

      if (clamp) {
        clamp.style.transform = `translateY(${lastScrollY * 0.1}px)`; // Медленное движение
      }

      if (imp) {
        imp.style.transform = `translateY(${lastScrollY * 0.15}px)`; // Немного быстрее, чем clamp
      }

      const map = document.querySelector('#map') as HTMLElement;
      const block = document.querySelector('#block') as HTMLElement;
      const blockTwo = document.querySelector('#block-two') as HTMLElement;
      const groupImage = document.querySelector('img[alt="group"]') as HTMLElement;

      // Увеличенный параллакс для карты
      if (map) {
        map.style.transform = `translateY(${lastScrollY * 0.1}px)`; // Чуть сильнее эффект
      }

      // Легкий параллакс для блока
      if (block) {
        block.style.transform = `translateY(${lastScrollY * 0.05}px)`; // Легкий эффект
      }

      // Легкий параллакс для второго блока
      if (blockTwo) {
        blockTwo.style.transform = `translateY(${lastScrollY * 0.03}px)`; // Очень легкий эффект
      }

      // Легкий параллакс для изображения
      if (groupImage) {
        groupImage.style.transform = `translateY(${lastScrollY * 0.07}px)`; // Чуть сильнее
      }

      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const feedbackContainer = ref<HTMLDivElement | null>(null);

const scrollLeft = () => {
  if (feedbackContainer.value) {
    feedbackContainer.value.scrollBy({
      left: -300, // Прокрутка влево
      behavior: 'smooth',
    });
  }
};

const scrollRight = () => {
  if (feedbackContainer.value) {
    feedbackContainer.value.scrollBy({
      left: 300, // Прокрутка вправо
      behavior: 'smooth',
    });
  }
};
</script>
<template>
  <!-- Hero section -->
  <div class="">
    <div class="bg-[url(/images/heroBg.jpg)] w-full min-h-[960px] bg-cover">
      <!-- HeroSection -->
      <div class="container mx-auto pt-[300px] px-5">
          <!-- text -->
          <div class="max-w-[660px] flex flex-col gap-[80px] pl-10">
            <h1 class="text-5xl font-bold text-white leading-[150%]">
              Create <br>
              Lorem ipsum
            </h1>
            <p class="text-sm text-zinc-600 max-w-[550px]">Lorem Ipsum is simply dummy text of the printing and
              typesetting
              industry.
              Lorem Ipsum has been the
              industry's standard dummy</p>
            <div class=" flex gap-10">
              <button class="btn-primary">free consult</button>
              <button class="btn-primary-outline">not free consult</button>
            </div>
          </div>
        </div>
      </div>
      <!-- items -->
    <div class=" max-w-[600px] ml-auto mt-[-250px] parallax-clamp">
     <img src="/images/clamp.png" alt="clamp" class="drop-shadow-md">
    </div>
    <div class="max-w-[500px] ml-auto mt-[-800px] parallax-imp">
     <img src="/images/imp.png" alt="clamp" class="drop-shadow-xl hover:drop-shadow-2xl hover:scale-[102%] transition-transform">
    </div>
  </div>
  <!--  feedback -->
  <div class="relative">
    <div class="bg-[url(/images/temp.png)] w-full cover min-h-[830px] drop-shadow-2xl opacity-90">
      <!-- items -->
       <div class="w-full flex flex-col gap-15 py-40 pl-50">
         <!-- Title and Arrows -->
         <div class="flex items-center justify-between pr-100">
           <h2 class="text-slate-950 text-4xl font-bold capitalize ml-10  ">Our Doctors are saying</h2>
           <!-- Arrows -->
           <div class="flex gap-5">
             <button
               @click="scrollLeft"
               class="px-5 py-4 rounded-sm text-blue-500 hover:bg-blue-400 hover:text-zinc-300 backdrop-blur-2xl transition"
               aria-label="Scroll Left">
               <i class="fas fa-chevron-left drop-shadow-xl"></i>
             </button>
             <button
               @click="scrollRight"
               class="px-5 py-4 rounded-sm text-blue-500 hover:bg-blue-400 hover:text-zinc-300 backdrop-blur-2xl transition"
               aria-label="Scroll Right">
               <i class="fas fa-chevron-right"></i>
             </button>
           </div>
         </div>
         <!-- Feedback Carousel -->
          <div class="">
            <div
              ref="feedbackContainer"
              id="feedback"
              class="flex items-center gap-10 overflow-x-hidden scroll-smooth 
              min-h-[400px]">
              <FeedbackCart />
              <FeedbackCart />
              <FeedbackCart />
              <FeedbackCart />
            </div>
          </div>
       </div>
    </div>
  </div>
  <!-- location -->
  <div class="mt-50 pb-50 relative">
    <div class="container mx-auto z-10 relative top-10 left-[140px]" id="map">
      <!-- Встраивание карты -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.707782974483!2d37.780130392670394!3d48.01935519705133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e09073d1ee49c1%3A0x50348b6b26f5ed32!2z0L_RgNC-0YHQvy4g0J_QsNC90YTQuNC70L7QstCwLCAyNCwg0JTQvtC90LXRhtC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgODMwMDA!5e0!3m2!1sru!2sru!4v1744213103349!5m2!1sru!2sru"
        width="600" 
        height="630" 
        style="border:0;" 
        allowfullscreen="true" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-sm overflow-hidden"
      ></iframe>
      <div class="absolute top-40 right-140">
        <div class="flex flex-col gap-10">
          <h2 class="font-black text-4xl">Our location</h2>
          <div class="flex flex-col gap-3">
            <p class="text-blue-400 uppercase text-sm">address</p>
            <a href="#" class="text-xl hover:text-blue-400">Your Address Here</a>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-blue-400 uppercase text-sm">phone</p>
            <a href="tel:+1234567890" class="text-xl hover:text-blue-400">7 949 12 34</a>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-blue-400 uppercase text-sm">office hours</p>
            <p class="text-xl">8am - 9am</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start z-0 relative" id="block-container">
      <!-- elements -->
      <div class="bg-blue-400 w-[790px] h-[300px] rounded-sm mt-100" id="block"></div>
      <div class="bg-blue-400 w-[250px] h-[20px] rounded-sm ml-auto" id="block-two"></div>
      <div class="ml-auto absolute bottom-[-50px] right-0">
        <img src="/images/Group.png" alt="group">
      </div>
    </div>
  </div>
</template>

<style scoped>
#map {
  position: absolute;
  z-index: 10; /* Поверх блока */
}

#block-container {
  position: relative;
  z-index: 1; /* Под картой */
}

#map,
#block,
#block-two,
img[alt="group"] {
  transition: transform 0.2s ease-out; /* Плавный переход */
}
</style>
