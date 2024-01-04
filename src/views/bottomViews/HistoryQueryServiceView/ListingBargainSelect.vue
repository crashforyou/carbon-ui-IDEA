<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="挂牌交易历史委托"
    >Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="挂牌交易历史成交" force-render
    >Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>
<script setup>
import { ref } from "vue";
const activeKey = ref("1");
</script>
