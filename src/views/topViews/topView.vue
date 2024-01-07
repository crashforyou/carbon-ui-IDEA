<template>
  <div class="main">
    <div class="top">
      <div class="button-group1">
        <button @click="changeContent('BuyDeListing')">
          <a-icon type="buy"/>
          <span>买入摘牌</span>
        </button>
        <button @click="changeContent('SellDeListing')">
          <a-icon type="sell"/>
          <span>卖出摘牌</span>
        </button>
        <button @click="changeContent('Market')">
          <a-icon type="market"/>
          <span>市场</span>
        </button>
        <button @click="changeContent('TimeDivision')">
          <a-icon type="time-sharing"/>
          <span>分时</span>
        </button>
        <button @click="changeContent('KLine')">
          <a-icon type="k-line"/>
          <span>K线</span>
        </button>
        <button @click="changeContent('DealDivision')">
          <a-icon type="part-by-part"/>
          <span>分笔</span>
        </button>
      </div>
      <div class="button-group2">
        <button @click="changeContent('BuyDeListing')">
          <a-icon type="buy"/>
          <span>官网</span>
        </button>
        <button @click="changeContent('SellDeListing')">
          <a-icon type="sell"/>
          <span>帮助</span>
        </button>
        <button @click="changeContent('Market')">
          <a-icon type="market"/>
          <span>联系管理员</span>
        </button>
      </div>
    </div>

    <div class="display-area">
      <component :is="contentComponent"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Market from "@/views/topViews/Market/Market.vue";
import KLine from "@/views/topViews/KLine/KLine.vue";
import BuyDeListing from "@/views/topViews/BuyDeListing/BuyDeListing.vue";
import SellDeListing from "@/views/topViews/SellDeListing/SellDeListing.vue";

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
}
.button-group1{

}
.button-group1{

}
</style>
