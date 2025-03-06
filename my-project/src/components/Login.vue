<template>
  <form class="login" @submit.prevent="login">
    <h1>Авторизация</h1>
    <label for="email">Почта:</label>
    <input type="email" id="email" v-model="email" required />
    <label for="password">Пароль:</label>
    <input type="password" required v-model="password" />
    <hr />
    <button type="submit">Войти</button>
  </form>
</template>

<script>
import axios from 'axios';
const API_HOST = 'http://lifestealer86.ru/api-shop';

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${API_HOST}/login`, {
          email: this.email,
          password: this.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const token = response.data.data.user_token;
          // Сохраните токен в Vuex Store или localStorage
          this.$store.dispatch('AUTH_REQUEST', {token});
          this.$router.push('/');
        } else {
          this.error = 'Неверный email или пароль';
        }
      } catch (error) {
        if (error.response && error.response.data) {
          this.error = error.response.data.message || 'Ошибка авторизации';
        } else {
          this.error = 'Произошла ошибка на сервере';
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

.login h1 {
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
}

.login input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.login button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login button:hover {
  background-color: #0056b3;
}
</style>
