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
import {onMounted, ref} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

const columns = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "资金账号",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "绑定银行",
    dataIndex: "bindBank",
    key: "bindBank",
  },
  {
    title: "银行账号",
    dataIndex: "bankAccountId",
    key: "bankAccountId",
  },
   {
    title: "划转类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "申请状态",
    dataIndex: "requestState",
    key: "requestState",
  },
  {
    title: "发生金额",
    dataIndex: "actualAmount",
    key: "actualAmount",
  },
  {
    title: "备注",
    dataIndex: "description",
    key: "description",
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

onMounted(() => {
  let operatorCode= localStorage.getItem("operatorCode");
  AxiosInstance.get(`http://localhost:8800/capital/selectDepositAndWithdrawalRequestRecord/${operatorCode}`)
      .then((res) => {
        data.value = res.data.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
});
fetchData();
</script>

