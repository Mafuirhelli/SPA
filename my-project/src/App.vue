<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, Header },
};
</script>

<style>
@font-face {
  font-family: "Hummus";
  src: url("assets/fonts/hummus.ttf");
}
body {
  background-color: #f8f9fa;
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}
span{
  color: #007bff;
}
#app {
  margin: 0 auto;
  text-align: center;
}
</style>
