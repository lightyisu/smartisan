<template>
<main class="wrapper">
<div class="banner">
<n-carousel autoplay>
    <img class="carousel-img" 
         src="../assets/b1.webp"/>
         <img class="carousel-img" 
         src="../assets/b2.webp"/>
         <img class="carousel-img" 
         src="../assets/b3.webp"/>

</n-carousel>
</div>
</main>
</template>

<script setup>
import {NCarousel} from 'naive-ui'
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
}
.banner{
    width: 1200px;
    margin-top: 20px;

}
img{
    width: 1200px;
    border-radius: 20px;
}
</style>