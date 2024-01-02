<template>
  <div>
    <a-select v-model="selectedCode" placeholder="请选择标的物代码">
      <a-select-option v-for="code in codes" :key="code">{{
          code
        }}
      </a-select-option>
    </a-select>
    <a-select v-model="selectedMode" placeholder="请选择交易模式">
      <a-select-option v-for="mode in modes" :key="mode">{{
          mode
        }}
      </a-select-option>
    </a-select>
    <a-select v-model="selectedDirection" placeholder="请选择买卖方向">
      <a-select-option v-for="direction in directions" :key="direction">{{
          direction
        }}
      </a-select-option>
    </a-select>
    <a-button type="primary" @click="search">搜索</a-button>
    <a-button @click="clear">清空</a-button>
    <a-table
        :dataSource="data"
        :columns="columns"
        :pagination="pagination"
        :scroll="{ x: 'max-content' }"
    ></a-table>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Select, Button, Table} from "ant-design-vue";

const selectedCode = ref(null);
const selectedMode = ref(null);
const selectedDirection = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const modes = ref(["模式1", "模式2", "模式3"]);
const directions = ref(["买入", "卖出"]);
const data = ref([]);
const columns = [
  {title: "成交时间", dataIndex: "transactionTime"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "买卖方向", dataIndex: "direction"},
  {title: "挂牌方式", dataIndex: "listingMode"},
  {title: "成交价格（元/吨）", dataIndex: "transactionPrice"},
  {title: "成交数量（吨）", dataIndex: "transactionQuantity"},
  {title: "成交金额（元）", dataIndex: "transactionAmount"},
  {title: "对手方客户号", dataIndex: "counterpartyCustomerNumber"},
  {title: "对手方客户名", dataIndex: "counterpartyCustomerName"},
];
const pagination = {pageSize: 10};

const search = () => {
  // 执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  selectedMode.value = null;
  selectedDirection.value = null;
  data.value = [];
};
</script>
