<template>
  <footer>
    <footer-menu :items="order_menu" />
    <footer-menu :items="support_menu" />
    <footer-menu :items="media_center" />
    <footer-menu :items="follow_us" />
    <div class="contract_ways">
      <div>
        <h2>400 - 603 - 5000</h2>
        <p>周一至周日 9:00 - 18:00</p>
        <p>(仅收市话费)</p>
        <button class="footer-btn">
          <n-icon size='15' class="icon">
             <question-circle24-filled/>
          </n-icon>
          在线帮助
        </button>
        
      </div>
    </div>
    <footer-info/>
  </footer>
</template>

<script setup>
import { QuestionCircle24Filled } from "@vicons/fluent";
import FooterInfo from './Footer-info.vue'
import { ref } from "vue";
import { NIcon } from "naive-ui";
import FooterMenu from "./Footer-menu.vue";
const order_menu = ref(["订单服务", "购买指南", "送货政策"]);
const support_menu = ref(["服务支持", "自助服务", "维修门店"]);
const media_center = ref(["媒体中心", "新闻动态", "官方视频", "图片资源"]);
const follow_us = ref(["关注我们", "官方微信", "新浪微博", "荣耀奖项"]);
</script>

<style scoped>
footer {
  letter-spacing: 0.2px;
  background: #fafafa;
  height: 320px;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-start;
  padding: 50px;
  padding-left: 105px;
  flex-wrap: wrap;
}
.contract_ways {
  padding: 20px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.contract_ways h2 {
  color: #5079d9;
  margin: 0;
}
.contract_ways p {
  text-align: end;
  margin: 0;
  color: rgb(122, 122, 122);
  font-weight: 500;
}
.footer-btn {
  margin-top: 15px;
  background-color: white;
  padding: 10px 50px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #5079d9;
  font-weight: 700;
  cursor: pointer;
}
.footer-btn:hover{
  background-color: rgb(252, 249, 249);
}
.icon{
  position: relative;
  top: 2px;
}
</style>