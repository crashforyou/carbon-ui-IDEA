<template>
  <div>
    <a-form :layout="'inline'" @submit="handleSubmit">
      <a-form-item label="标的物代码">
        <a-select v-model="targetCode" placeholder="请选择标的物代码">
          <!-- options -->
        </a-select>
      </a-form-item>
      <a-form-item label="买卖方向">
        <a-select v-model="direction" placeholder="请选择买卖方向">
          <!-- options -->
        </a-select>
      </a-form-item>
      <a-form-item label="报价状态">
        <a-select v-model="quoteStatus" placeholder="请选择报价状态">
          <!-- options -->
        </a-select>
      </a-form-item>
      <a-form-item label="起止日期">
        <a-range-picker v-model="dateRange"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">搜索</a-button>
        <a-button style="margin-left: 8px" @click="handleReset">清空</a-button>
      </a-form-item>
    </a-form>
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
    />
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";

const targetCode = ref(null);
const direction = ref(null);
const quoteStatus = ref(null);
const dateRange = ref([]);
const data = ref([]);
const columns = ref([
  {title: "报价日期", dataIndex: "quoteDate", key: "quoteDate", width: 100},
  {title: "报价时间", dataIndex: "quoteTime", key: "quoteTime", width: 100},
  {
    title: "操作员代码",
    dataIndex: "operatorCode",
    key: "operatorCode",
    width: 110,
  },
  {
    title: "标的物代码",
    dataIndex: "targetCode",
    key: "targetCode",
    width: 110,
  },
  {
    title: "标的物名称",
    dataIndex: "targetName",
    key: "targetName",
    width: 110,
  },
  {title: "买卖方向", dataIndex: "direction", key: "direction", width: 110},
  {title: "报价价格", dataIndex: "quotePrice", key: "quotePrice", width: 110},
  {
    title: "报价数量",
    dataIndex: "quoteQuantity",
    key: "quoteQuantity",
    width: 110,
  },
  {
    title: "成交量",
    dataIndex: "transactionVolume",
    key: "transactionVolume",
    width: 110,
  },
  {
    title: "成交金额",
    dataIndex: "transactionAmount",
    key: "transactionAmount",
    width: 110,
  },
  {
    title: "交易账号",
    dataIndex: "transactionAccount",
    key: "transactionAccount",
  },
  {title: "报价状态", dataIndex: "quoteStatus", key: "quoteStatus"},
  {title: "报价编号", dataIndex: "quoteNumber", key: "quoteNumber"},
]);
const pagination = reactive({current: 1, pageSize: 10});

const handleSubmit = () => {
  // Handle the submit event
};

const handleReset = () => {
  targetCode.value = null;
  direction.value = null;
  quoteStatus.value = null;
  dateRange.value = [];
};
</script>
