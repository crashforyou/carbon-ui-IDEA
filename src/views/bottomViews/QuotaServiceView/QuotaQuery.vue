<!--配额查询-->
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="交易科目">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="转入转出流水" force-render
    >Content of Tab Pane 2
    </a-tab-pane
    >
    <a-tab-pane key="3" tab="配额交易流水">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script>
import {ref} from "vue";
import {Tabs,TabPane} from "ant-design-vue";
import TransactionSubject from "@/views/bottomViews/QuotaServiceView/components/TransactionSubject.vue";
import InOrOutFlow from "@/views/bottomViews/QuotaServiceView/components/InOrOutFlow.vue";
import QuotaTransactionFlow from "@/views/bottomViews/QuotaServiceView/components/QuotaTransactionFlow.vue";
export default {
  components: {
    "a-tabs": Tabs,
    "a-tab-pane": TabPane,
    TransactionSubject,
    InOrOutFlow,
    QuotaTransactionFlow,
  },
  setup() {
    const activeKey = ref("1");
    return {
      activeKey,
    };
  },
};
</script>
