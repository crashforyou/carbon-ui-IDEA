<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">资金账号</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">出入金流水</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">资金交易流水</button>
      <button :class="{ active: activeButton === 'button4' }" @click="activeButton = 'button4'">出入金申请流水</button>
    </div>
    <CapitalAccount v-if="activeButton === 'button1'"></CapitalAccount>
    <CapitalFlow v-if="activeButton === 'button2'"></CapitalFlow>
    <TransactionFlow v-if="activeButton === 'button3'"></TransactionFlow>
    <CapitalRequestFlow v-if="activeButton === 'button4'"></CapitalRequestFlow>
  </div>
</template>

<script  setup>
import {ref} from "vue";
import CapitalAccount from "@/views/bottomViews/CapitalServiceView/components/CapitalAccount.vue";
import CapitalFlow from "@/views/bottomViews/CapitalServiceView/components/CapitalFlow.vue";
import CapitalRequestFlow from "@/views/bottomViews/CapitalServiceView/components/CapitalRequestFlow.vue";
import TransactionFlow from "@/views/bottomViews/CapitalServiceView/components/TransactionFlow.vue";

const activeButton = ref("button1");
</script>

<style scoped>
.main{
  background: #eceff6;
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
