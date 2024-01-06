<!--配额查询-->
<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">交易配额</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton === 'button1'">登记配额</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton === 'button1'">转入转出流水</button>
      <button :class="{ active: activeButton === 'button4' }" @click="activeButton === 'button1'">配额交易流水</button>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {Tabs,TabPane} from "ant-design-vue";
import TransactionSubject from "@/views/bottomViews/QuotaServiceView/components/TransactionSubject.vue";
import InOrOutFlow from "@/views/bottomViews/QuotaServiceView/components/InOrOutFlow.vue";
import QuotaTransactionFlow from "@/views/bottomViews/QuotaServiceView/components/QuotaTransactionFlow.vue";

const activeKey = ref("1");
</script>
<style scoped>
.main{
  background: #eceff6;
  border: 2px solid #a8b7d3;
}
.buttonGroup{
  position: relative;
  gap: 10vh;
  border-bottom:2px solid #a8b7d3;
}
button {
  margin: 5px;
  padding: 6px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover,button:active{
  color: white;
  background-color: #17294f;
}
</style>
