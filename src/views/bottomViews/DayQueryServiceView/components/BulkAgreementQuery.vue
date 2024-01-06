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
      :pagination="false"
      size="small"
      bordered
      :scroll="{ y: 252 }"
  />
</template>

<script setup>
import {reactive, ref} from "vue";
import {Form, Select, Button, Table, DatePicker, message} from "ant-design-vue";

const targetCode = ref(null);
const dateRange = ref([]);
const direction = ref(null);
const data = [];
const pagination = reactive({current: 1, pageSize: 10});

const columns = [
  {title: "委托日期", dataIndex: "orderDate", width: 100},
  {title: "委托时间", dataIndex: "orderTime", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 120},
  {title: "标的物代码", dataIndex: "code", width: 120},
  {title: "标的物名称", dataIndex: "name", width: 120},
  {title: "买卖方向", dataIndex: "direction", width: 100},
  {title: "委托数量", dataIndex: "orderQuantity", width: 100},
  {title: "委托价格", dataIndex: "orderPrice", width: 100},
  {title: "对方", dataIndex: "DirectionOrGroupId", width: 100},
  {title: "委托编号", dataIndex: "orderNumber", width: 100},
];

for (let i = 0; i < 100; i++) {
  data.push({
    key:i,
    orderDate: `委托日期${i + 1}`,
    orderTime: `委托时间${i + 1}`,
    operatorCode: `操作员代码${i + 1}`,
    code: `标的物代码${i + 1}`,
    name: `标的物名称${i + 1}`,
    direction: `买卖方向${i + 1}`,
    orderQuantity: `委托数量${i + 1}`,
    orderPrice: `委托价格${i + 1}`,
    directionOrGroupId: `对方${i + 1}`,
    orderNumber: `委托编号${i + 1}`,
  });
}

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