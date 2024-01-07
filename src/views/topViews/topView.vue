<template>
  <div class="main">
    <div class="top">
      <div class="button-group1">
        <button  :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">
          <DownloadOutlined style="font-size: 20px;"/><br>
          <span>买入摘牌</span>
        </button>
        <button  :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">
          <UploadOutlined style="font-size: 20px;"/><br>
          <span>卖出摘牌</span>
        </button>
        <button  :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">
          <ShoppingOutlined style="font-size: 20px;"/><br>
          <span>市场</span>
        </button>
        <button  :class="{ active: activeButton === 'button4' }" @click="activeButton = 'button4'">
          <LineChartOutlined style="font-size: 20px;"/><br>
          <span>分时</span>
        </button>
        <button  :class="{ active: activeButton === 'button5' }" @click="activeButton = 'button5'">
          <SlidersOutlined style="font-size: 20px;"/><br>
          <span>K线</span>
        </button>
        <button  :class="{ active: activeButton === 'button6' }" @click="activeButton = 'button6'">
          <UnorderedListOutlined style="font-size: 20px;"/><br>
          <span>分笔</span>
        </button>
      </div>
      <div class="button-group2">
        <button @click="changeContent('BuyDeListing')">
          <span>官网</span>
        </button>
        <button @click="changeContent('SellDeListing')">
          <span>帮助</span>
        </button>
        <button @click="changeContent('Market')">
          <span>联系管理员</span>
        </button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>

    <div>
      <BuyDeListing v-if="activeButton === 'button1'"></BuyDeListing>
      <SellDeListing v-if="activeButton === 'button2'"></SellDeListing>
      <Market v-if="activeButton === 'button3'"></Market>
      <Time-sharing v-if="activeButton === 'button4'"></Time-sharing>
      <KLine v-if="activeButton === 'button5'"></KLine>
      <Part-by-Part v-if="activeButton === 'button6'"></Part-by-Part>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Market from "@/views/topViews/Market/Market.vue";
import KLine from "@/views/topViews/KLine/KLine.vue";
import BuyDeListing from "@/views/topViews/BuyDeListing/BuyDeListing.vue";
import SellDeListing from "@/views/topViews/SellDeListing/SellDeListing.vue";
import {
  UnorderedListOutlined,
  DownloadOutlined,
  UploadOutlined,
  ShoppingOutlined,
  LineChartOutlined,
  SlidersOutlined
} from "@ant-design/icons-vue"

const activeButton = ref("button3")
const contentComponent = ref('');
const changeContent = (newContent) => {
  contentComponent.value = newContent;
};

</script>

<style scoped>
.main{
  height: 47vh;
}
.top{
  background: #001c3a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button-group1{
  display: flex;
}
.button-group1{
  display: flex;
}
.button-group1 button {
  padding: 10px 16px;
  color: #c4c8cf;
  border-right: 0.1px solid #003267;
  background-color: #001c3a;
  width: 86px;
}
.button-group1 button:last-child {
  border-right: none; /* 最后一个按钮不显示右侧分隔线 */
}
.button-group2 button {
  margin: 6px;
  padding: 5px 24px;
  font-size: 14px;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  background-color: #1e9978;
}
.button-group1 button:hover,button.active{
  color: #d8dce1;
  background-color: #1a386e;
  background-image: linear-gradient(to top, #1973a4, #1a386e);
  cursor: pointer;
}

</style>
