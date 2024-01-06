<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">单向竞价委托</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">单向竞价成交</button>

    </div>
    <AuctionRequest v-if="activeButton === 'button1'"></AuctionRequest>
    <AuctionDone v-if="activeButton === 'button2'"></AuctionDone>
<!--    <BulkAgreementQuery v-if="activeButton === 'button2'"></BulkAgreementQuery>-->
  </div>
</template>
<script setup>
import { ref } from "vue";

import AuctionDone from "./components/AuctionDone.vue"
import AuctionRequest from "@/views/bottomViews/HistoryQueryServiceView/components/AuctionRequest";


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
