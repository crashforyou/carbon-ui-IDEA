<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">报价查询</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">挂牌交易历史成交</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">挂牌交易历史成交</button>
      <button :class="{ active: activeButton === 'button4' }" @click="activeButton = 'button4'">挂牌交易历史成交</button>
    </div>
    <BulkAgreementOffer v-if="activeButton === 'button1'"></BulkAgreementOffer>
1
2
3
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import BulkAgreementOffer from "./components/BulkAgreementOffer.vue"
1
2
3
  const activeButton = ref("button1")
</script>
<style scoped>
.main{
  border: 2px solid #a8b7d3;
}
.buttonGroup{
  border-bottom: 2px solid #a8b7d3;
}
button {
  margin: 5px;
  padding: 8px 13px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover,button.active{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}
</style>
