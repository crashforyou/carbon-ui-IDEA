<template>
    <div>
      <a-form :layout="'inline'" @submit="handleSubmit">
        <a-form-item label="&nbsp;&nbsp;标的物代码">
          <a-input size="small"/>
        </a-form-item>
        <a-form-item>
          <button html-type="submit">搜索</button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <button @click="handleReset">清空</button>
        </a-form-item>
      </a-form>
      <a-table
          :dataSource="data"
          :columns="columns"
          :pagination="pagination"
          size="small" 
          :scroll="{y:202}"
          bordered
      ></a-table>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const selectedCode = ref(null);
  const codes = ref(["代码1", "代码2", "代码3"]);
  const data = ref([]);
  for (let i = 0; i < 100; i++) {
    data.value.push({
      key: i,
      marketName:"市场名称",
    });
  }
  const columns = [
    {title: "市场名称", dataIndex: "marketName",width: 120},
    {title: "标的物代码", dataIndex: "code",width: 120},
    {title: "标的物名称", dataIndex: "name",width: 120},
    {title: "持有数量(吨)", dataIndex: "holdAmount",width: 120},
    {title: "可用数量(吨)", dataIndex: "availableAmount",width: 120},
    {title: "冻结数量(吨)", dataIndex: "frozenAmount",width: 120},
    {title: "买入数量(吨)", dataIndex: "buyAmount",width: 120},
    {title: "卖出数量(吨)", dataIndex: "sellAmount",width: 120},
    {title: "转入申请数量(吨)", dataIndex: "transferInAmount" ,width: 150},
    {title: "转出申请数量(吨)", dataIndex: "transferOutAmount",width: 150},
    {title: "交易账号", dataIndex: "account",width: 120},
  ];
  const pagination = {pageSize: 10};
  
  const search = () => {
    // 在这里执行你的搜索逻辑，然后更新data
  };
  
  const clear = () => {
    selectedCode.value = null;
    data.value = [];
  };
  </script>
  
  