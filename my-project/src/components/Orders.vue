<template>
  <div class="orders">
    <h2>Оформленные заказы</h2>
    <button @click="goBack" class="back-button">Назад</button>
    <div v-if="orders.length === 0" class="empty-orders">
      У вас пока нет оформленных заказов.
    </div>
    <div v-else>
      <div v-for="(order, index) in orders" :key="index" class="order-item">
        <h3>Заказ #{{ index + 1 }}</h3>
        <ul>
          <li v-for="item in order.items" :key="item.id" class="order-product">
            <span>{{ item.name }} ({{ item.quantity }} шт.) - {{ item.price * item.quantity }} ₽</span>
          </li>
        </ul>
        <p><strong>Итого: {{ order.total }} ₽</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // Получаем список заказов из Vuex store
    orders() {
      return this.$store.state.orders;
    }
  },
  methods: {
    goBack() {
      this.$router.push('/products'); // Переход на страницу каталога
    }
  },
  beforeRouteLeave(to, from, next) {
    // Очищаем или сбрасываем данные, если нужно
    // Например, если мы не хотим, чтобы старые данные из хранилища оставались
    this.$store.commit('CLEAR_ORDERS'); // если нужно очистить заказы
    next();
  }

};
</script>

<style scoped>
.orders {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #0056b3;
}

.empty-orders {
  font-size: 18px;
  color: #666;
  text-align: center;
}

.order-item {
  border: 1px solid #e0e0e0;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}
</style>