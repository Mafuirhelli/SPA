<template>
  <div>
    <h1 class="title">Список товаров</h1>
    <div class="products-list">
      <div v-if="isLoading" class="loading">Загрузка...</div>
      <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div style="display: flex; flex-wrap: wrap; justify-content: space-around; width: 1850px; height: auto" v-else>
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: { ProductCard },
  computed: {
    ...mapState(['products', 'isLoading', 'errorMessage']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: #007bff;
  font-size: 24px;
  margin-top: 20px;
  font-family: "Hummus";
}

.products-list {
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  padding: 20px;
}
</style>