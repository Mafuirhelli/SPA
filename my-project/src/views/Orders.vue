<script setup>

</script>

<template>
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="altText"/>
    </div>
    <div class="product-info" >
      <h1>{{ title }}</h1>
      <span v-show="onSale">{{ sale }}</span>
      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
      <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
      <b>Sizes</b>
      <ul>
        <li v-for="size in sizes">{{ size }}</li>
      </ul>
      <p>Shipping: {{ shipping }}</p>
      <b>Variants</b>
      <div class="color-box"
           v-for="(variant, index) in variants"
           :key="variant.variantId"
           :style="{ backgroundColor:variant.variantColor }"
           @mouseover="updateProduct(index)"
      >
      </div>
      <button @click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">
        Add to cart
      </button>
      <button
          @click="decreaseCart" class="deleteFromCart"
      >
        <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
      <br>
      <a :href="link">More products like this</a>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Product Added to Cart</h2>
        <p>{{ product }} {{ brand }} - {{ variants[selectedVariant].variantColor }}</p>
      </div>
    </div>

    <product-tabs :reviews="reviews" :shipping="shipping" :details="details" :variant-color="variants[selectedVariant].variantColor"></product-tabs>
  </div>

</template>

<style scoped>

</style>