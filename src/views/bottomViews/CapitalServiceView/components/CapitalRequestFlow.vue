<template>
  <a-form :layout="'inline'" @submit="handleSubmit">
    <a-form-item label="&nbsp;&nbsp;资金账号">
      <a-input size="small"/>
    </a-form-item>
    <a-form-item label="申请日期">
      <a-range-picker v-model="dateRange" size="small"/>
    </a-form-item>
    <a-form-item label="出入方向">
      <a-select v-model="direction" placeholder="请选择出入方向" size="small" style="width: 150px">
        <a-select-option value="all" >全部</a-select-option>
        <a-select-option value="buy">出金</a-select-option>
        <a-select-option value="sell">入金</a-select-option>
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
      bordered/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

const columns = [
  {
    title: "交易日期",
    dataIndex: "tradeDate",
    key: "tradeDate",
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "发起方",
    dataIndex: "initiator",
    key: "initiator",
  },
  {
    title: "绑定银行",
    dataIndex: "boundBank",
    key: "boundBank",
  },
  {
    title: "银行账号",
    dataIndex: "bankAccount",
    key: "bankAccount",
  },
  // {
  //   title: "交易系统流水号",
  //   dataIndex: "transactionSystemSerialNumber",
  //   key: "transactionSystemSerialNumber",
  // },
  // {
  //   title: "注册登记系统流水号",
  //   dataIndex: "registrationSystemSerialNumber",
  //   key: "registrationSystemSerialNumber",
  // },
   {
    title: "划转类型",
    dataIndex: "transferType",
    key: "transferType",
  },
  {
    title: "申请状态",
    dataIndex: "applicationStatus",
    key: "applicationStatus",
  },
  {
    title: "发生金额",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "备注",
    dataIndex: "remark",
    key: "remark",
  },
];

const data = ref([]); // 从后端获取数据
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    tradeDate:"交易日期",
    Time:"交易时间",
    initiator:"发起方",
    boundBank:"绑定银行",
    bankAccount:"银行账号",
    transferType:"划转类型",
    applicationStatus:"申请状态",
    amount:"发生金额",
    remake:"备注",
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

