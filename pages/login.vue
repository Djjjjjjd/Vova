<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Поля формы
const email = ref('');
const password = ref('');
const errorMessage = ref('');

// Функция для входа
const login = async () => {
  try {
    // Отправка данных на Strapi
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Сохранение токена в localStorage
      localStorage.setItem('jwt', data.jwt);

      // Получение данных пользователя с использованием токена
      const userResponse = await fetch('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${data.jwt}`,
        },
      });

      const userData = await userResponse.json();

      if (userResponse.ok) {
        // Сохранение данных пользователя в localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // Перенаправление на главную страницу
        router.push('/');
      } else {
        errorMessage.value = 'Не удалось получить данные пользователя.';
      }
    } else {
      // Обработка ошибок
      errorMessage.value = data.error.message || 'Вход не выполнен.';
    }
  } catch (error) {
    errorMessage.value = 'Произошла ошибка. Попробуйте снова.';
  }
};
</script>

<template>
  <div class="h-screen bg-[url(/images/herobg.jpg)] bg-fixed">
    <div class="container mx-auto pt-70">
      <div class="w-[40%] mx-auto bg-white rounded-xl flex flex-col">
        <div class="w-[100%] mx-auto flex flex-col items-center p-10 gap-15">
          <h3 class="text-zinc-950 capitalize text-4xl font-bold">log in</h3>
          <div class=" flex flex-col items-center gap-5">
            <input v-model="email" type="email" placeholder="Email" class="inputs">
            <input v-model="password" type="password" placeholder="Password" class="inputs">
          </div>
          <button @click="login" class="btn-primary px-20 py-5 font-bold text-xl">log in</button>
          <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
        </div>
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