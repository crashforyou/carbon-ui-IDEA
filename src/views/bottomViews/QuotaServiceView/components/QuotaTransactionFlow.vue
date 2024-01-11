<template>
  <div>
    <a-form :layout="'inline'" @submit="handleSubmit">
      <a-form-item label="&nbsp;&nbsp;标的物代码">
        <a-input size="small"/>
      </a-form-item>
      <a-form-item label="交易日期">
        <a-range-picker v-model="dateRange" size="small"/>
      </a-form-item>
      <a-form-item label="交易模式">
        <a-select v-model="direction" placeholder="请选择交易模式" size="small" style="width: 150px">
          <a-select-option value="all" >1</a-select-option>
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
    <a-table
        :dataSource="data"
        :columns="columns"
        :pagination="pagination"
        size="small" 
        bordered
        :scroll="{ y:202}"
    ></a-table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

const selectedCode = ref(null);
const selectedOperation = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const operations = ref(["操作1", "操作2", "操作3"]);
const data = ref([]);

const columns = [
  {title: "交易时间", dataIndex: "time"},
  {title: "客户号", dataIndex: "clientId"},
  {title: "客户名称", dataIndex: "clientName"},
  {title: "标的物代码", dataIndex: "subjectMatterCode"},
  {title: "标的物名称", dataIndex: "subjectMatterName"},
  {title: "交易模式", dataIndex: "tradeType"},
  {title: "操作类型", dataIndex: "operate"},
  {title: "划转数量（吨）", dataIndex: "actualAmount",width:120},
  {title: "持有数量（吨）", dataIndex: "possessAmount",width:120},
  {title: "交易账号", dataIndex: "quotaAccount"},
];
const pagination = {pageSize: 10};

const search = () => {
  // 在这里执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  selectedOperation.value = null;
  data.value = [];
};

onMounted(() => {
  let clientId= localStorage.getItem("clientId");
  AxiosInstance.get(`http://localhost:8800/quota/selectQuotaTradeRecord/${clientId}`)
      .then((res) => {
        data.value = res.data.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
});
</script>

