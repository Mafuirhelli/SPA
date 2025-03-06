<template>
  <div class="app-wrapper">
    <!-- Ваш основной контент страницы -->
    <div class="main-content">
      <slot></slot> <!-- Контент страницы будет вставляться сюда -->
    </div>

    <!-- Футер -->
    <footer class="footer">
      <div class="container">
        <div class="footer-section">
          <h3>О нас</h3>
          <p>
            Добро пожаловать на наш сайт «Просто купить»! Мы предоставляем высококачественные товары по доступным ценам.
            Наша команда работает круглосуточно, чтобы обеспечить вам лучший сервис.
          </p>
        </div>

        <div class="footer-section">
          <h3>Контакты</h3>
          <ul class="contact-list">
            <li><strong>Телефон:</strong>  +7 (495) 123-45-67</li>
            <li><strong>Email:</strong> info@evreyskiy-magazin.ru</li>
            <li><strong>Адрес:</strong> Адрес: ул. Еврейская, д. 18, Москва</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Социальные сети</h3>
          <ul class="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>

        <div class="copyright">
          <p>&copy; 2025 Просто купить. Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: lightslategray;
  color: whitesmoke;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.footer-section{
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}
li{
  list-style-type:  none;
}
.footer-section h3 {
  color: lightblue;
  font-family: "Hummus";
}

.footer-section p {
  color: whitesmoke;
}

.social-links a {
  color: lightblue;
  text-decoration: none;
}

.social-links a:hover {
  color: dodgerblue;
}
</style>
