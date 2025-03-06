<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="fio">ФИО:</label>
        <input type="text" id="fio" v-model="fio" required />
      </div>
      <div>
        <label for="email">Почта:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <hr />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

const API_HOST = 'http://lifestealer86.ru/api-shop';

export default {
  name: 'Signup',
  data() {
    return {
      fio: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      this.error = null; // Сброс ошибки перед новой попыткой регистрации

      try {
        const response = await axios.post(`${API_HOST}/signup`, {
          fio: this.fio,
          email: this.email,
          password: this.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 201) {
          const token = response.data.data.user_token;

          // Сохраните токен в Vuex Store или localStorage
          this.$store.dispatch('AUTH_REQUEST', { token });

          // Перенаправление на страницу входа
          this.$router.push('/login');
        }
      } catch (error) {
        if (error.response) {
          // Обработка ошибок от сервера
          this.error = error.response.data.message || 'Ошибка регистрации';
        } else if (error.request) {
          // Обработка ошибок, связанных с отсутствием ответа от сервера
          this.error = 'Сервер не отвечает. Пожалуйста, попробуйте позже.';
        } else {
          // Обработка других ошибок
          this.error = 'Произошла ошибка при отправке запроса.';
        }
      }
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

.register h2 {
  color: #007bff;
  font-family: "Hummus";
  text-align: center;
  margin-bottom: 20px;
}

.register input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.register button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>