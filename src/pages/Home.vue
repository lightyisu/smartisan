<template>
  <Header/>
  <!--For temporary fill the content for dev performance-->
  <div id="temp_fill"></div>
  <Footer/>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

</script>

<style scoped>
#temp_fill{
    height: 1000px;
}
</style>