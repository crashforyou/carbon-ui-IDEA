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
    marketName:"时长名称",
  });
}
const columns = [
  {title: "市场名称", dataIndex: "marketName"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "持有数量(吨)", dataIndex: "holdAmount"},
  {title: "可用数量(吨)", dataIndex: "availableAmount"},
  {title: "冻结数量(吨)", dataIndex: "frozenAmount"},
  {title: "买入数量(吨)", dataIndex: "buyAmount"},
  {title: "卖出数量(吨)", dataIndex: "sellAmount"},
  {title: "转入申请数量(吨)", dataIndex: "transferInAmount"},
  {title: "转出申请数量(吨)", dataIndex: "transferOutAmount"},
  {title: "交易账号", dataIndex: "account"},
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

