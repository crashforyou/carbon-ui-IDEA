<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">挂牌交易历史委托</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">挂牌交易历史成交</button>
    </div>
    <ListingHistoryCommission v-if="activeButton === 'button1'"></ListingHistoryCommission>
    <ListingHistoryBargain v-if="activeButton === 'button2'"></ListingHistoryBargain>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import ListingHistoryCommission from "./components/ListingHistoryCommission.vue"
  import ListingHistoryBargain from "./components/ListingHistoryBargain.vue"

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
