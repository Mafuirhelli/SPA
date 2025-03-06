<template>
  <div class="product-card">
    <img
        :src="getFullImageUrl(product.image)"
        :alt="product.name || 'Product Image'"
        class="product-image"
        @error="handleImageError"
    />
    <h3>{{ product.name || 'No Title' }}</h3>
    <p>{{ product.description || 'No Description' }}</p>
    <p><strong>Цена: {{ product.price ? formatPrice(product.price) : 'Цена не указана' }} ₽</strong></p>
    <button @click="addToCart" aria-label="Добавить в корзину">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.product);
    },
    handleImageError(event) {
      if (event.target.src !== require('@/assets/default-product.jpg')) {
        event.target.src = require('@/assets/default-product.jpg');
      }
    },
    getFullImageUrl(imagePath) {
      if (!imagePath) {
        return require('@/assets/default-product.jpg');
      }
      const baseUrl = 'http://lifestealer86.ru/'; // Замените на ваш базовый URL
      return `${baseUrl}${imagePath}`;
    },
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
};
</script>

<style scoped>
.product-card {
  padding: 16px;
  margin: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card h3 {
  color: #007bff;
  font-family: "Hummus";
}

.product-card p {
  color: #666;
}

.product-card button {
  background-color: #007bff;
  font-family: "Hummus";
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;
}

.product-card button:hover {
  background-color: #0056b3;
}

.product-card button:active {
  transform: scale(0.95);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>