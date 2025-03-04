<template>
  <div>
    <h1>Вход в систему</h1>
    <form @submit.prevent="login">
      <input v-model="credentials.email" type="email" placeholder="Email" required />
      <input v-model="credentials.password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', this.credentials);
        this.$router.push('/');
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>