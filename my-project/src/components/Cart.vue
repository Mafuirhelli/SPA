<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">
      Корзина пуста
    </div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
        <img :src="getFullImageUrl(item.image)" alt="Product Image" />
        <div>
          <p>{{ item.name }}</p>
          <p><strong>Цена: {{ item.price }} ₽</strong></p>
        </div>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(index)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(index)">+</button>
        </div>
        <button @click="removeFromCart(index)" class="claersButton">Удалить</button>
      </div>
      <div class="total">
        <p>Итого: {{ totalAmount }} ₽</p>
        <button @click="clearCart" class="claersButton">Очистить корзину</button>
        <button @click="placeOrder" class="place-order-button">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    getFullImageUrl(imagePath) {
      const baseUrl = '';
      return `${baseUrl}${imagePath}`;
    },
    removeFromCart(index) {
      this.$store.commit('REMOVE_FROM_CART', index);
    },
    clearCart() {
      this.$store.commit('CLEAR_CART');
    },
    increaseQuantity(index) {
      this.$store.commit('UPDATE_CART_QUANTITY', { index, quantity: 1 });
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.$store.commit('UPDATE_CART_QUANTITY', { index, quantity: -1 });
      } else {
        this.removeFromCart(index);
      }
    },
    placeOrder() {
      if (this.cartItems.length === 0) {
        alert("Корзина пуста. Добавьте товары для оформления заказа.");
        return;
      }

      const confirmation = confirm(`Вы уверены, что хотите оформить заказ на сумму ${this.totalAmount} ₽?`);
      if (confirmation) {
        this.$store.dispatch('addOrder', this.cartItems); // Сохраняем заказ
        alert("Заказ успешно оформлен!");
        this.clearCart(); // Очищаем корзину
        this.$router.push('/orders'); // Переходим на страницу заказов
      }
    }
  }
};
</script>

<style scoped>
.cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item p {
  color: #333;

}

.quantity-controls button {
  color: white;
  background: #007bff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 5px;
}

.quantity-controls button:hover {
  background: #0056b3;
}

.total {
  text-align: right;
  margin-top: 20px;
}

.total button {
  margin-top: 10px;
}

.claersButton {
  color: white;
  background: #007bff;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.claersButton:hover {
  background-color: #0056b3;
}

.empty-cart {
  font-size: 18px;
  color: #666;
  font-family: "Hummus";
  text-align: center;
}

.place-order-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}

.place-order-button:hover {
  background-color: #0056b3;
}
</style>
