<script lang="ts" setup>
import { ref } from 'vue';
import cartComponent from '@/components/cratForSale.vue';

const title = ref('');
const description = ref('');
const publishedAt = ref('');
const image = ref<File | null>(null);
const createCards = ref<any[]>([]);
const success = ref(false);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files?.length) {
    image.value = target.files[0];
  }
};

const submit = async () => {
  const formData = new FormData();
  formData.append('data', JSON.stringify({
    title: title.value,
    description: description.value,
    publishedAt: new Date().toISOString(),
  }));

  if (image.value) {
    formData.append('files.image', image.value);
  }

  for (const [key, value] of formData.entries()) {
    console.log('formData check:', key, value);
  }

  try {
    const res = await fetch('http://localhost:1337/api/templates', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    console.log('✔ success', data);
    success.value = true;
    createCards.value.unshift(data);

    // Очистка полей
    title.value = '';
    description.value = '';
    publishedAt.value = '';
    image.value = null;

  } catch (err) {
    console.error('❌ error', err);
    success.value = false;
  }
};
</script>

<template>
  <div class="h-screen pt-40">
    <div class="container mx-auto px-10 py-10 bg-white rounded-md">
      <form class="flex justify-between" @submit.prevent="submit">
        <!-- input -->
        <div
          class="w-[65%] outline-dashed outline-zinc-400 hover:outline-zinc-700 focuse:outline-zinc-700 outline-5 hover:scale-[101%] focus:scale-[101%] rounded-md transition-all flex flex-col items-center justify-around"
          id="inpBoxFile">
          <img src="/images/arrow.png" alt="arrow">
          <input type="file" name="Upload" @change="handleFileChange" accept=".jpg, .png,"
            class="font-bold text-center text-2xl hover:text-zinc-700 text-zinc-400 transition-all mx-auto">
        </div>
        <!-- editor -->
        <div class="w-[35%] flex flex-col items-center gap-5">
          <h3 class="text-zinc-950 font-bold text-4xl mt-15 mb-5">Create Template</h3>
          <input type="text" v-model="title" placeholder="Name..."
            class="inputs font-regular italic text-zinc-800 p-4" />
          <textarea v-model="description" placeholder="Summary..."
            class="inputs font-regular italic text-zinc-800 p-4" />
          <!-- items -->
          <div class="w-[300px]">
            <div class="flex flex-col gap-5 mr-auto">
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
            </div>
          </div>
          <div class="w-[300px]">
            <div class="mr-auto">
              <input type="time" name="time" v-model="publishedAt"
                class="outline outline-solid outline-zinc-600 rounded-sm px-5 py-2 focus:outline-blue-500 focus:px-6 focus:py-3 hover:px-6 hover:py-3 transition-all">
            </div>
          </div>
          <div class="w-[300px] mt-4">
            <div class="mr-auto flex items-stretch px-3">
              <button type="submit" class="btn-primary capitalize w-100 py-5 hover:scale-[101%]">create</button>
              <p v-if="success">successfully added</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>