<template>
  <div>
    <h1>Регистрация</h1>
    <form @submit.prevent="register">
      <input v-model="userData.fio" placeholder="ФИО" required />
      <input v-model="userData.email" type="email" placeholder="Email" required />
      <input v-model="userData.password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        fio: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', this.userData);
        this.$router.push('/');
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>