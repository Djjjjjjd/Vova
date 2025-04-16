<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Поля формы
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const errorMessage = ref('');

// Функция для авторизации
const login = async () => {
  try {
    // Сохранение данных в localStorage
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);

    // Отправка данных на Strapi
    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Сохранение токена в localStorage
      localStorage.setItem('jwt', data.jwt);

      // Перенаправление на главную страницу
      router.push('/login');
    } else {
      // Обработка ошибок
      errorMessage.value = data.error.message || 'Регистрация провалена';
    }
  } catch (error) {
    errorMessage.value = 'Вы допустили ошибку. Попробуйте снова.';
  }
};
</script>

<template>
  <div class="h-screen pt-40 bg-fixed bg-[url(/images/heroBg.jpg)] flex items-center justify-center">
    <div class="w-[400px] bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl">
      <h3 class="text-zinc-950 font-bold text-4xl text-center mb-10">Sign In</h3>
      <div class="flex flex-col items-center w-full gap-5">
        <!-- Name Input -->
        <input v-model="name" type="text" placeholder="Name" class="inputs" />
        <!-- Email Input -->
        <input v-model="email" type="email" placeholder="Email" class="inputs" />
        <!-- Phone Input -->
        <input v-model="phone" type="text" placeholder="Phone" class="inputs" />
        <!-- Password Input -->
        <input v-model="password" type="password" placeholder="Password" class="inputs" />
        <!-- Submit Button -->
        <button @click="login" class="btn-primary px-20 py-3 hover:scale-[101%] mt-5 transition">
          Submit
        </button>
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputs {
  border: 1px solid #ccc;
  padding: 20px 30px;
  border-radius: 5px;
  width: 100%;
}
</style>