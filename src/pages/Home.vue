<template>
  <Header/>
  <!--For temporary fill the content for dev performance-->
   <Banner/>
   <n-spin v-if="isloading" class="spin_loading" />
  <div  v-if="!isloading" id="temp_fill"></div>
  <Footer/>
  
</template>

<script setup>
import {NSpin} from 'naive-ui'
import {onMounted, ref} from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
let isloading=ref(1);
onMounted(()=>{
  new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(0)
      }, 2000);
  }).then((res)=>{
    isloading.value=res
  })
})

</script>

<style scoped>
.spin_loading{
  position: fixed;
  top: 270px;
  left: 50%;
}
#temp_fill{
    height: 1000px;
}
</style>