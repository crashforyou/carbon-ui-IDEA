<template>
  <div>
    <a-select v-model="selectedCode" placeholder="请选择标的物代码">
      <a-select-option v-for="code in codes" :key="code">{{
          code
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

const selectedCode = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const data = ref([]);
const columns = [
  {title: "交易日期", dataIndex: "tradeDate"},
  {title: "交易时间", dataIndex: "tradeTime"},
  {title: "客户号", dataIndex: "customerNumber"},
  {title: "客户名称", dataIndex: "customerName"},
  {title: "操作员代码", dataIndex: "operatorCode"},
  {title: "买卖方向", dataIndex: "tradeDirection"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "划转数量（吨）", dataIndex: "transferAmount"},
  {title: "持有数量（吨）", dataIndex: "holdAmount"},
  {title: "可用数量（吨）", dataIndex: "availableAmount"},
  {title: "划入划出状态", dataIndex: "transferStatus"},
  {title: "交易账号", dataIndex: "account"},
  {title: "备注", dataIndex: "remark"},
];
const pagination = {pageSize: 10};

const search = () => {
  // 在这里执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  data.value = [];
};
</script>
