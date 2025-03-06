<template>
  <nav class="navbar nav-links logo" >
    <div class="logo"><router-link to="/main"><img class="logo-image" src="https://imgpng.ru/d/magen_david_PNG9.png">Просто купить</router-link></div>
    <div class="nav-links">
      <router-link to="/products">Каталог</router-link>
      <router-link to="/cart">
        Корзина
        <span v-if="cartItemCount" class="cart-count">{{ cartItemCount }}</span>
      </router-link>
      <router-link to="/orders">Заказы</router-link>
      <router-link to="/signup">Регистрация</router-link>
      <router-link to="/login">Вход в систему</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cartItemCount() {
      return this.$store.state.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
};
</script>

<style scoped>


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-family: "Hummus";
}
.logo-image{
  width: 15px;
}
.nav-links {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

.cart-count {
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
}
</style>