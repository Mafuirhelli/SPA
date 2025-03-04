<template>
  <div id="app">
    <nav>
      <router-link to="/">Каталог</router-link> |
      <router-link to="/cart">Корзина</router-link> |
      <router-link to="/orders">Заказы</router-link> |
      <template v-if="!user">
        <router-link to="/login">Вход</router-link> |
        <router-link to="/register">Регистрация</router-link>
      </template>
      <template v-else>
        <a href="#" @click="logout">Выйти</a>
      </template>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>