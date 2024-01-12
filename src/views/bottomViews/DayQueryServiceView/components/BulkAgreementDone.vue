<template>
  <a-form :layout="'inline'" @submit="handleSubmit">
    <a-form-item label="&nbsp;&nbsp;标的物代码">
      <a-select v-model="targetCode" placeholder="请选择标的物代码" size="small">
        <a-select-option value="code1">代码1</a-select-option>
        <a-select-option value="code2">代码2</a-select-option>
        <!-- 更多选项 -->
      </a-select>
    </a-form-item>
    <a-form-item label="买卖方向">
      <a-select v-model="direction" placeholder="请选择买卖方向" size="small" style="width: 150px">
        <a-select-option value="all" checked>全部</a-select-option>
        <a-select-option value="buy">买入</a-select-option>
        <a-select-option value="sell">卖出</a-select-option>
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
      :columns="columns"
      :data-source="data"
      size="small"
      bordered
      :scroll="{ y: 198 }"
  />
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {Form, Select, Button, Table, DatePicker, message} from "ant-design-vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";


const targetCode = ref(null);
const dateRange = ref([]);
const direction = ref(null);
const data = ref([]);
const pagination = reactive({current: 1, pageSize: 10});

const columns = [
  {title: "委托编号", dataIndex: "id", width: 100},
  {title: "成交时间", dataIndex: "time", width: 100},
  {title: "标的物代码", dataIndex: "subjectMatterCode", width: 120},
  {title: "标的物名称", dataIndex: "subjectMatterName", width: 120},
  {title: "买卖方向", dataIndex: "flowType", width: 100},
  {title: "初始单价", dataIndex: "firstPrice", width: 100},
  {title: "初始数量", dataIndex: "firstAmount", width: 100},
  {title: "初始报价金额", dataIndex: "firstBalance", width: 120},
  {title: "成交单价", dataIndex: "finallyPrice", width: 100},
  {title: "成交数量", dataIndex: "finallyAmount", width: 100},
  {title: "成交金额", dataIndex: "finallyBalance", width: 100},
  {title: "群组ID", dataIndex: "groupId", width: 100},
  {title: "发起方", dataIndex: "listingClient", width: 100},
  {title: "接受方",dataIndex: "delistingClient",width: 100},
];


const handleSubmit = async () => {
  try {
    // Handle the submit event
    // You may need to call your backend API here
    // For example:
    // const response = await fetch('/api/search', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     targetCode: targetCode.value,
    //     dateRange: dateRange.value,
    //     direction: direction.value,
    //     pagination,
    //   }),
    // });
    // const result = await response.json();
    // data.value = result.data;
    // pagination.total = result.total;
  } catch (error) {
    message.error("搜索失败，请稍后再试");
  }
};

const handleReset = () => {
  targetCode.value = null;
  dateRange.value = [];
  direction.value = null;
};

onMounted(() => {
  let clientId= localStorage.getItem("clientId");
  AxiosInstance.get(`http://localhost:8800/bulkAgreement/selectDayDirectionDoneRecord/${clientId}`)
      .then((res) => {
        data.value = data.value.concat(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  AxiosInstance.get(`http://localhost:8800/bulkAgreement/selectDayGroupDoneRecord/${clientId}`)
      .then((res) => {
        data.value = data.value.concat(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
});
</script>
<style scoped>
button {
  margin:2px;
  padding: 6px 18px;
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
