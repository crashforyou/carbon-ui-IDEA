<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="资金账号" @click="showCapitalAccountSelect">
      <CapitalAccount/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="出入金流水" @click="showDepositAndWithdrawalRecordSelect" force-render>
      <CapitalFlow/>
    </a-tab-pane>
    <a-tab-pane key="3" @click="showCapitalTradeRecordSelect" tab="资金交易流水">
      <TransactionFlow/>
    </a-tab-pane>
    <a-tab-pane key="4" @click="showDepositAndWithdrawalRequestRecordSelect" tab="出入金申请流水">
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

const showCapitalAccountSelect = () => {
  // 询价查询并更新queryResult
  activeKey.value = "1";
};

const showDepositAndWithdrawalRecordSelect = () => {
  // 询价查询并更新queryResult
  activeKey.value = "2";
};

const showCapitalTradeRecordSelect = () => {
  // 询价查询并更新queryResult
  activeKey.value = "3";
};

const showDepositAndWithdrawalRequestRecordSelect = () => {
  // 询价查询并更新queryResult
  activeKey.value = "4";
};
</script>

<style scoped>
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
