<!--大宗协议询价-->
<template>
  <!-- <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="询价查询" @click="showQuerySelect">
      <QuerySelect datasrc="queryResult1"/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="成交查询" @click="showBargainSelect" force-render>
      <BargainSelect datasrc="queryResult2"/>
    </a-tab-pane>
  </a-tabs> -->
  <div class="main">
    <div class="butttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">询价查询</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">成交查询</button>
    </div>
    <QuerySelect v-if="activeButton === 'button1'"/>
    <BargainSelect v-if="activeButton === 'button2'"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import QuerySelect from "@/views/bottomViews/BulkAgreementServiceView/components/QuerySelect.vue";
import BargainSelect from "@/views/bottomViews/BulkAgreementServiceView/components/BargainSelect.vue";

const activeButton = ref('button1')
const isQuerySelect = ref(true);
const isBargainSelect = ref(false);

</script>
<style scoped>
.main{
  border: 2px solid #a8b7d3;
}
.butttonGroup{
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
}
.selectButton{
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-bottom: 2px solid #a8b7d3;
}
</style>

