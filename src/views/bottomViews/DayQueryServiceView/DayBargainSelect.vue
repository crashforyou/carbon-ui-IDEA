<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">挂牌交易成交</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">大宗协议成交</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">单向竞价成交</button>
    </div>
    <ListingDayBargain v-if="activeButton === 'button1'"></ListingDayBargain>
    <BulkAgreementDone v-if="activeButton === 'button2'"></BulkAgreementDone>
    <AuctionDayDone v-if="activeButton === 'button3'"></AuctionDayDone>
  </div>
</template>
<script setup>
import { ref } from "vue";

import ListingDayBargain from "@/views/bottomViews/DayQueryServiceView/components/ListingDayBargain";
import BulkAgreementDone from "@/views/bottomViews/DayQueryServiceView/components/BulkAgreementDone";
import AuctionDayDone from "@/views/bottomViews/DayQueryServiceView/components/AuctionDayDone";

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