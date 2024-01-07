<template>
    <div class="main">
      <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
        <span>日终报表查询</span>
      </div>
      <a-form :layout="'inline'" @submit="handleSubmit">
        <a-form-item label="&nbsp;&nbsp;客户号">
          <a-input size="small"/>
        </a-form-item>
        <a-form-item label="成交日期">
          <a-date-picker v-model="dateRange" size="small"/>
        </a-form-item>
        <a-form-item>
          <button html-type="submit">搜索</button>
          <button>打印</button>
        </a-form-item>
      </a-form>
      <div class="content">
        <a-descriptions title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全国碳排放权交易客户日终报表" bordered :column=2>
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资金日终" bordered :column=2>
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配额日终" bordered :column=2>
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from "vue";
  import {Select, Button, Table} from "ant-design-vue";
  
  const selectedCode = ref(null);
  const selectedMode = ref(null);
  const selectedDirection = ref(null);
  const data = ref([]);
  const columns = [
  {title: "交易日期", dataIndex: "tradeDate" , width: 120},
  {title: "打印时间", dataIndex: "printTime", width: 120},
  {title: "客户号", dataIndex: "customerNumber",width: 120},
  {title: "客户名称", dataIndex: "customerName",width: 120},
  {title: "集团代码", dataIndex: "code",width: 120},
  {title: "集团单位名称", dataIndex: "name",width: 120},
];
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
  <style scoped>
  .main{
    background: #eceff6;
    border: 2px solid #a8b7d3;
  }
  .content{
    border-top: 2px solid #a8b7d3;
    overflow: auto;
    max-height: 80%;
  }
  .descriptions{
    overflow: auto;
    max-height: 100px;
  }
  button {
    margin: 5px;
    padding: 3px 16px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background-color: #d4cfcc;
  }
  button:hover{
    color: white;
    background-color: #17294f;
    cursor: pointer;
  }
  </style>