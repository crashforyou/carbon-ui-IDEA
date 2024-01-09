<template>
  <a-form :layout="'inline'" @submit="handleSubmit">
    <a-form-item label="&nbsp;&nbsp;资金账号">
      <a-input size="small"/>
    </a-form-item>
    <a-form-item label="交易日期">
      <a-range-picker v-model="dateRange" size="small"/>
    </a-form-item>
    <a-form-item label="划转类型">
      <a-select v-model="direction" placeholder="请选择划转类型" size="small" style="width: 150px">
        <a-select-option value="all">1</a-select-option>
        <a-select-option value="buy">2</a-select-option>
        <a-select-option value="sell">3</a-select-option>
        <!-- 更多选项 -->
      </a-select>
    </a-form-item>
    <a-form-item>
      <button html-type="submit">搜索</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button @click="handleReset">清空</button>
    </a-form-item>
  </a-form>
  <div>
    <a-table 
      :columns="columns" 
      :data-source="data"
      :scroll="{y: 198 }"
      size="small" 
      bordered
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

const columns = [
  {
    title: "交易时间",
    dataIndex: "tradeTime",
    key: "tradeTime",
  },
  {
    title: "操作员代码",
    dataIndex: "operatorCode",
    key: "operatorCode",
  },
  {
    title: "资金账号",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "划转类型",
    dataIndex: "transferType",
    key: "transferType",
  },
  {
    title: "发生金额",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "期后余额",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "期后可用余额",
    dataIndex: "availableBalance",
    key: "availableBalance",
  },
  {
    title: "流水号",
    dataIndex: "serialNumber",
    key: "serialNumber",
  },
];

const data = ref([]); // 从后端获取数据
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    tradeTime:"交易时间",
    operatorCode:"操作员代码",
    account:"资金账号",
    transferType:"划转类型",
    amount:"发生金额",
    balance:"期后余额",
    availableBalance:"期后可用余额",
    serialNumber:"流水号",
  });
}
// 在组件创建后立即执行
const fetchData = async () => {
  try {
    const response = await axios.get("/api/data");
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
</script>

