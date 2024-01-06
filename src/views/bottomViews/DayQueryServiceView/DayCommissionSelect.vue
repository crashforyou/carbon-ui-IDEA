<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">挂牌交易委托</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">大宗协议报价查询</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">大宗协议询价查询</button>
      <button :class="{ active: activeButton === 'button4' }" @click="activeButton = 'button4'">单向竞价查询</button>
    </div>
    <ListingDayCommission v-if="activeButton === 'button1'"></ListingDayCommission>
    <BulkAgreementOffer v-if="activeButton === 'button2'"></BulkAgreementOffer>
    <BulkAgreementQuery v-if="activeButton === 'button3'"></BulkAgreementQuery>
    <AuctionSelect v-if="activeButton === 'button4'"></AuctionSelect>
  </div>
</template>
<script setup>
import { ref } from "vue";

import BulkAgreementOffer from "./components/BulkAgreementOffer.vue"
import BulkAgreementQuery from "./components/BulkAgreementQuery.vue"
import ListingDayCommission from "./components/ListingDayCommission";
import AuctionSelect from "./components/AuctionSelect";

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