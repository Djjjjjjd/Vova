<script setup></script>
<template>
  <div>
    <footer class="w-full bg-zinc-300">
      <div class="container mx-auto flex justify-between py-10 px-20">
        <!-- icon -->
        <div class="max-w-[320px] flex flex-col gap-10 mt-10">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
          <!-- icons -->
          <div class="flex space-x-7">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-blue-600">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="hover:text-orange-600">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-rose-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://vk.com" target="_blank" aria-label="VKontakte" class="hover:text-blue-600">
              <i class="fab fa-vk"></i>
            </a>
          </div>
        </div>
        <!-- contact -->
        <div class="flex flex-col gap-5">
          <h4 class="mb-5 font-bold" >Contact Us</h4>
          <!-- map -->
          <a href="https://yandex.ru/maps/142/donetsk/house/prospekt_panfilova_24/Z04YcQ9lSUQPQFpifXxweHhmbA==/?ll=37.785018%2C48.019458&z=17" class="flex items-center space-x-3">
            <i class="fas fa-map-marker-alt text-blue-500 hover:text-red-500"></i>
            <p>24 Panfilova Ave</p>
          </a>
          <!-- phone -->
          <a href="tel:+1234567890" class="flex items-center space-x-2">
            <i class="fas fa-phone text-blue-500 hover:text-green-500"></i>
            <p>7 234 56 89</p>
          </a>
          <!-- email -->
          <a href="mailto:jDguide@yandex.ru" class="flex items-center space-x-2">
            <i class="fas fa-envelope text-blue-500 hover:text-orange-500"></i>
            <p>support mail</p>
          </a>
          <!-- chart -->
          <a href="chart" class="flex items-center space-x-2">
            <i class="fas fa-calendar text-blue-500 hover:text-purple-500"></i>
            <p>Chart</p>
          </a>
        </div>
        <!-- info -->
        <div class="flex flex-col gap-5">
          <h4 class="font-bold mb-5">More Information</h4>
          <a href="" class="foot-link">Copyright</a>
          <a href="" class="foot-link">Privacy Pollcy</a>
          <a href="" class="foot-link">Tersm & Conditions</a>
          <a href="" class="foot-link">Site map</a>
        </div>
        <!-- links -->
        <div class="flex flex-col gap-5">
          <h4 class="font-bold mb-5">Quick Links</h4>
          <a href="" class="foot-link">About Us</a>
          <a href="" class="foot-link">Our Doctors</a>
          <a href="" class="foot-link">Neews & Media</a>
          <a href="" class="foot-link">Appintments</a>
        </div>
      </div>
    </footer>
  </div>
</template>