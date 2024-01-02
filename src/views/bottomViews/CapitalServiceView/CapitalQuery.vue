<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="资金账号">
      <CapitalAccount/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="出入金流水" force-render>
      <CapitalFlow/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="资金交易流水">
      <TransactionFlow/>
    </a-tab-pane>
    <a-tab-pane key="4" tab="出入金申请流水">
      <CapitalRequestFlow/>
    </a-tab-pane>
  </a-tabs>
</template>

<script  setup>
import {ref} from "vue";
import {Tabs, TabPane} from "ant-design-vue";
import CapitalAccount from "@/views/bottomViews/CapitalServiceView/components/CapitalAccount.vue";
import CapitalFlow from "@/views/bottomViews/CapitalServiceView/components/CapitalFlow.vue";
import CapitalRequestFlow from "@/views/bottomViews/CapitalServiceView/components/CapitalRequestFlow.vue";
import TransactionFlow from "@/views/bottomViews/CapitalServiceView/components/TransactionFlow.vue";

const activeKey = ref("1");
</script>

