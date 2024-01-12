<template>
    <div class="main">
      <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
        <span>日终报表查询</span>
      </div>
      <a-form :layout="'inline'" @submit="handleSubmit">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
          <a-descriptions-item label="交易日期">2024.01.12</a-descriptions-item>
          <a-descriptions-item label="打印时间">2024.01.12</a-descriptions-item>
          <a-descriptions-item label="客户号">000006</a-descriptions-item>
          <a-descriptions-item label="客户名称">张三</a-descriptions-item>
          <a-descriptions-item label="集团代码">213413</a-descriptions-item>
          <a-descriptions-item label="集团单位名称">中信资产</a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资金日终" bordered :column=2>
          <a-descriptions-item label="交易账户">000011</a-descriptions-item>
          <a-descriptions-item label="配额登记账户">0001230</a-descriptions-item>
          <a-descriptions-item label="期初资金余额">32131.0</a-descriptions-item>
          <a-descriptions-item label="期末资金余额">321312.0</a-descriptions-item>
          <a-descriptions-item label="可用资金">31231.0</a-descriptions-item>
          <a-descriptions-item label="可出资金">12311.0</a-descriptions-item>
          <a-descriptions-item label="当日转入金额">0</a-descriptions-item>
          <a-descriptions-item label="当日转出金额">0</a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配额日终" bordered :column=2>
          <a-descriptions-item label="产品代码">CEA</a-descriptions-item>
          <a-descriptions-item label="产品名称">碳排放配额</a-descriptions-item>
          <a-descriptions-item label="标的物代码">INK</a-descriptions-item>
          <a-descriptions-item label="标的物名称">测试配额1</a-descriptions-item>
          <a-descriptions-item label="期初持有数量">132412.0</a-descriptions-item>
          <a-descriptions-item label="期末持有数量">14512.0</a-descriptions-item>
          <a-descriptions-item label="可用数量">54321.0</a-descriptions-item>
          <a-descriptions-item label="可出数量">3241.0</a-descriptions-item>
          <a-descriptions-item label="当日买入数量">645.0</a-descriptions-item>
          <a-descriptions-item label="当日卖出数量">324.0</a-descriptions-item>
          <a-descriptions-item label="当日转入数量">0</a-descriptions-item>
          <a-descriptions-item label="当日转出数量">0</a-descriptions-item>
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