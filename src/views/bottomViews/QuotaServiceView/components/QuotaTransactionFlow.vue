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
import {ref} from "vue";

const selectedCode = ref(null);
const selectedOperation = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const operations = ref(["操作1", "操作2", "操作3"]);
const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    tradeDate:"交易日期",
  });
}
const columns = [
  {title: "交易日期", dataIndex: "tradeDate"},
  {title: "交易时间", dataIndex: "tradeTime"},
  {title: "客户号", dataIndex: "customerNumber"},
  {title: "客户名称", dataIndex: "customerName"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "交易模式", dataIndex: "tradeMode"},
  {title: "操作类型", dataIndex: "operationType"},
  {title: "划转数量（吨）", dataIndex: "transferAmount",width:120},
  {title: "持有数量（吨）", dataIndex: "holdAmount",width:120},
  {title: "交易账号", dataIndex: "account"},
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
</script>

