<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }} руб.</p>
    <button @click="$emit('add-to-cart', product.id)">Добавить в корзину</button>
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
};
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
}
</style>