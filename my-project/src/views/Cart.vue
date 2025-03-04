<template>
  <div>
    <h1>Корзина</h1>
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Цена: {{ item.price }} руб.</p>
        <button @click="removeFromCart(item.id)">Удалить</button>
      </div>
      <button @click="checkout">Оформить заказ</button>
    </div>
    <div v-else>
      <p>Ваша корзина пуста.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  async created() {
    await this.$store.dispatch('fetchCart');
  },
  methods: {
    async removeFromCart(itemId) {
      try {
        await this.$axios.delete(`/cart/${itemId}`);
        this.$store.dispatch('fetchCart');
      } catch (error) {
        alert(error.response?.data?.error?.message || 'Ошибка удаления товара');
      }
    },
    async checkout() {
      try {
        await this.$axios.post('/order');
        this.$store.dispatch('fetchOrders');
        this.$router.push('/orders');
      } catch (error) {
        alert(error.response?.data?.error?.message || 'Ошибка оформления заказа');
      }
    },
  },
};
</script>

<style>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>