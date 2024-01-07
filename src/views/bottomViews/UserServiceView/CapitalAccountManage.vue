<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">资金账号创建</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">银行卡号关联</button>
      <button :class="{ active: activeButton === 'button3' }" @click="activeButton = 'button3'">资金账户删除</button>
    </div>
    <CapitalAccountCreate v-if="activeButton === 'button1'"></CapitalAccountCreate>
    <BindBankAccount v-if="activeButton === 'button2'"></BindBankAccount>
    <CapitalAccountDelete v-if="activeButton === 'button3'"></CapitalAccountDelete>
  </div>
</template>

<script  setup>
import {ref} from "vue";

import BindBankAccount from "@/views/bottomViews/UserServiceView/components/BindBankAccount";
import CapitalAccountCreate from "@/views/bottomViews/UserServiceView/components/CapitalAccountCreate";
import CapitalAccountDelete from "@/views/bottomViews/UserServiceView/components/CapitalAccountDelete";

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
