<template>
  <a-tabs v-model:activeKey="activeKey" tabPosition="left">
    <a-tab-pane key="1" tab="买方挂牌"><Buyer/></a-tab-pane>
    <a-tab-pane key="2" tab="卖方挂牌" force-render
    ><Seller/>
    </a-tab-pane>
  </a-tabs>
</template>
<script setup>
import {ref} from "vue";
import {Tabs, TabPane} from "ant-design-vue";
import Buyer from "@/views/topViews/Market/components/Buyer.vue";
import Seller from "@/views/topViews/Market/components/Seller.vue";
const activeKey = ref("1");
</script>
