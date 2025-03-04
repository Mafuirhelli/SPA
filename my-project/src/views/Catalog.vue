<template>
  <div>
    <h1>Каталог товаров</h1>
    <div class="products">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get('/products');
      this.products = response.data.data;
    } catch (error) {
      alert(error.response?.data?.error?.message || 'Ошибка загрузки товаров');
    }
  },
  methods: {
    async addToCart(productId) {
      if (!this.$store.state.user) {
        this.$router.push('/login');
        return;
      }
      try {
        await this.$axios.post(`/cart/${productId}`);
        this.$store.dispatch('fetchCart');
      } catch (error) {
        alert(error.response?.data?.error?.message || 'Ошибка добавления товара в корзину');
      }
    },
  },
};
</script>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>