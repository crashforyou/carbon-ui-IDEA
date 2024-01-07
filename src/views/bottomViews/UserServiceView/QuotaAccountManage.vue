<template>
  <div class="main">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">配额账号创建</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">配额账户删除</button>
    </div>
    <QuotaAccountCreate v-if="activeButton === 'button1'"></QuotaAccountCreate>
    <QuotaAccountDelete v-if="activeButton === 'button2'"></QuotaAccountDelete>
  </div>
</template>

<script  setup>
import {ref} from "vue";


import QuotaAccountCreate from "@/views/bottomViews/UserServiceView/components/QuotaAccountCreate";
import QuotaAccountDelete from "@/views/bottomViews/UserServiceView/components/QuotaAccountDelete";

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