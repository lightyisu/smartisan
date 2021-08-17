<template>
  
    <div class="footer-menu">
      <ul>
        <li v-for="(item,index) in items" :key="index">{{item}}</li>
     
      </ul>
    </div>
 
</template>

<script setup>
const props=defineProps(['items']);
const items=props.items;
</script>

<style scoped>

div.footer-menu{
  width: 10vw;
  height: 180px;
}
ul{
  list-style: none;
  
}
li:first-child{
  font-weight: 700;
  margin-bottom: 3vh;
  color: rgb(90, 90, 90);
}
li{
  color: rgb(168, 152, 152);
  padding: 5px 0;
}
</style>