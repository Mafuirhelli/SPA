<template>
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="title"/>
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ price }} руб.</p>
      <button @click="addToCart" :disabled="!inStock">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    description: String,
    price: Number,
    image: String,
    inStock: Boolean,
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.id);
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
</style>