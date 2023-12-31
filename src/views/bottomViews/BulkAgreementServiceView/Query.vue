<!--大宗协议询价-->
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="询价查询" @click="showQuerySelect">
      <QuerySelect datasrc="queryResult1"/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="成交查询" @click="showBargainSelect" force-render>
      <BargainSelect datasrc="queryResult2"/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import {ref} from "vue";
import QuerySelect from "@/views/bottomViews/BulkAgreementServiceView/components/QuerySelect.vue";
import BargainSelect from "@/views/bottomViews/BulkAgreementServiceView/components/BargainSelect.vue";
import {Tabs, TabPane} from "ant-design-vue";

const activeKey = ref("1");
export default {
  components: {
    "a-tabs": Tabs,
    "a-tab-pane": TabPane,
    QuerySelect,
    BargainSelect,
  },
  setup() {
    const queryResult1 = ref([]);
    const queryResult2 = ref([]);
    const showQuerySelect = () => {
      // 询价查询并更新queryResult
      activeKey.value = "1";
    };
    const showBargainSelect = () => {
      // 成交查询并更新queryResult
      activeKey.value = "2";
    };
    return {
      activeKey,
      queryResult1,
      queryResult2,
      showQuerySelect,
      showBargainSelect,
    };
  },
};
</script>
