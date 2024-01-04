<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="报价查询"
    >Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="询价查询" force-render
    >Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="成交查询" force-render
    >Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="4" tab="对话流水查询" force-render
    >Content of Tab Pane 2</a-tab-pane>
  </a-tabs>
</template>
<script setup>
import { ref } from "vue";
const activeKey = ref("1");
</script>
