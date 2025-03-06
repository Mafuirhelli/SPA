<template>
  <div class="home">
    <!-- Герой-секция -->
    <div class="hero-section">
      <img src="@/assets/vrey.jpg" alt="Приветственная картинка" class="hero-image" />
      <div class="welcome-text">
        <h1>Добро пожаловать-таки в наш магазин!</h1>
        <p>
          Здесь вы найдете широкий ассортимент товаров халяльного качества по выгодной цене.
          Мы ценим каждого клиента и стремимся обеспечить лучший сервис.
        </p>
        <router-link to="/products" class="shop-now-button">Перейти к каталогу</router-link>
      </div>
    </div>

    <!-- Популярные товары -->
    <div class="popular-products" v-if="popularProducts.length > 0">
      <h2>Популярные товары</h2>
      <div class="product-grid">
        <div class="product-card" v-for="product in popularProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} ₽</p>
        </div>
      </div>
    </div>

    <!-- О нас -->
    <div class="about-us">
      <h2>О нас</h2>
      <p>
        Наш магазин уже более 10 лет радует своих клиентов качественными товарами и отличным сервисом.
        Мы специализируемся на продуктах, соответствующих еврейским традициям и стандартам качества.
      </p>
    </div>

    <!-- Отзывы клиентов -->
    <div class="testimonials" v-if="testimonials.length > 0">
      <h2>Отзывы наших клиентов</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <p>"{{ testimonial.text }}"</p>
          <span>- {{ testimonial.author }}</span>
        </div>
      </div>
    </div>

    <!-- Акции и скидки -->
    <div class="promotions" v-if="promotions.length > 0">
      <h2>Акции и скидки</h2>
      <div class="promotion-grid">
        <div class="promotion-card" v-for="promotion in promotions" :key="promotion.id">
          <img :src="promotion.image" :alt="promotion.title" class="promotion-image" />
          <h3>{{ promotion.title }}</h3>
          <p>{{ promotion.description }}</p>
        </div>
      </div>
    </div>

    <!-- Контакты -->
    <div class="contact-section">
      <h2>Контакты</h2>
      <p>Адрес: ул. Еврейская, д. 18, Москва</p>
      <p>Телефон: +7 (495) 123-45-67</p>
      <p>Email: info@evreyskiy-magazin.ru</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      popularProducts: [],
      testimonials: [],
      promotions: [],
    };
  },
  async created() {
    // Загрузка данных (пример)
    await this.loadPopularProducts();
    await this.loadTestimonials();
    await this.loadPromotions();
  },
  methods: {
    async loadPopularProducts() {
      // Пример асинхронной загрузки данных
      this.popularProducts = [
        { id: 1, name: "Матца", price: 150, image: require("@/assets/matza.jpg") },
        { id: 2, name: "Кошерное вино", price: 1200, image: require("@/assets/wine.jpg") },
        { id: 3, name: "Хала", price: 200, image: require("@/assets/challah.jpg") },
      ];
    },
    async loadTestimonials() {
      this.testimonials = [
        { id: 1, text: "Отличный магазин, всегда свежие продукты!", author: "Иванка Петровштейн" },
        { id: 2, text: "Очень доволен обслуживанием и качеством товаров.", author: "Марий Иванович" },
      ];
    },
    async loadPromotions() {
      this.promotions = [
        {
          id: 1,
          title: "Скидка 10% на все вина",
          description: "Только до конца месяца!",
          image: require("@/assets/wine-promo.jpg"),
        },
        {
          id: 2,
          title: "Бесплатная доставка",
          description: "При заказе от 5000 ₽",
          image: require("@/assets/delivery-promo.jpg"),
        },
      ];
    },
  },
};
</script>

<style scoped>
h2{
  font-family: "Hummus";
  color: #007bff;
}
.hero-section {
  padding: 50px 20px;
  background-color: #f8f9fa;
  text-align: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.welcome-text h1 {
  color: #007bff;
  font-family: "Hummus";
}

.welcome-text p {
  color: #666;
}

.shop-now-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #0056b3;
}

.popular-products,
.about-us,
.testimonials,
.promotions,
.contact-section {
  padding: 40px 20px;
  text-align: center;
}

.product-grid,
.testimonial-grid,
.promotion-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card,
.testimonial-card,
.promotion-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 450px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image,
.promotion-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.testimonial-card p {
  font-style: italic;
  color: #555;
}

.testimonial-card span {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

.contact-section p {
  color: #666;
}
</style>