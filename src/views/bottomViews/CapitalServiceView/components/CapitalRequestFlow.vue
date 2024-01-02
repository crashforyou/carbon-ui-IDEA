<template>
  <div>
    <a-table :columns="columns" :data-source="data"/>
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
  {
    title: "交易系统流水号",
    dataIndex: "transactionSystemSerialNumber",
    key: "transactionSystemSerialNumber",
  },
  {
    title: "注册登记系统流水号",
    dataIndex: "registrationSystemSerialNumber",
    key: "registrationSystemSerialNumber",
  },
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

