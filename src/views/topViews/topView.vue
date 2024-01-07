<template>
  <div>
    <div class="button-group">
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
    <div class="display-area">
      <component :is="contentComponent"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Market from "@/views/topViews/Market/Market.vue";
import KLine from "@/views/topViews/KLine/KLine.vue";
import {
  UserOutlined,
  AreaChartOutlined,
  InteractionOutlined,
  TransactionOutlined,
  CreditCardOutlined,
  PoundOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  SwitcherOutlined,
} from "@ant-design/icons-vue";

const contentComponent = ref('');
const changeContent = (newContent) => {
  contentComponent.value = newContent;
};

</script>

<style scoped>
.button-group > button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1em;
}

.display-area {
  margin-top: 2em;
  border: 1px solid #ccc;
  padding: 1em;
}
</style>
