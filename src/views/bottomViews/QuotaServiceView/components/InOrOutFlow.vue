<template>
  <div>
    <a-form :layout="'inline'" @submit="handleSubmit">
      <a-form-item label="&nbsp;&nbsp;标的物代码">
        <a-input size="small"/>
      </a-form-item>
      <a-form-item label="交易日期">
        <a-range-picker v-model="dateRange" size="small"/>
      </a-form-item>
      <a-form-item label="划转类型">
        <a-select v-model="direction" placeholder="请选择划转类型" size="small" style="width: 150px">
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
        :scroll="{y:202 }"
    ></a-table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

const selectedCode = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const data = ref([]);

const columns = [
  {title: "交易时间", dataIndex: "time", width: 120},
  {title: "客户号", dataIndex: "clientId",width: 120},
  {title: "客户名称", dataIndex: "clientName",width: 120},
  {title: "操作员代码", dataIndex: "operatorCode",width: 120},
  {title: "买卖方向", dataIndex: "type",width: 120},
  {title: "标的物代码", dataIndex: "subjectMatterCode",width: 120},
  {title: "标的物名称", dataIndex: "subjectMatterName",width: 120},
  {title: "划转数量（吨）", dataIndex: "actualAmount",width: 120},
  {title: "持有数量（吨）", dataIndex: "possessAmount",width: 120},
  {title: "可用数量（吨）", dataIndex: "availableQuotaAmount",width: 120},
  {title: "交易账号", dataIndex: "quotaAccount",width: 120},
  {title: "划入划出状态", dataIndex: "status",width: 120},
  {title: "备注", dataIndex: "description",width: 120},
];
const pagination = {pageSize: 10};

const search = () => {
  // 在这里执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  data.value = [];
};

onMounted(() => {
  let clientId= localStorage.getItem("clientId");
  AxiosInstance.get(`http://localhost:8800/quota/selectInOrOutQuotaRecord/${clientId}`)
      .then((res) => {
        data.value = res.data.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
});
</script>
