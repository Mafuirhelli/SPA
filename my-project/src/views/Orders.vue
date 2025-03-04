<template>
  <div>
    <h1>Ваши заказы</h1>
    <div v-if="orders.length > 0">
      <div v-for="order in orders" :key="order.id" class="order">
        <h3>Заказ #{{ order.id }}</h3>
        <p>Сумма: {{ order.order_price }} руб.</p>
      </div>
    </div>
    <div v-else>
      <p>У вас нет заказов.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  async created() {
    await this.$store.dispatch('fetchOrders');
  },
};
</script>

<style>
.order {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>