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
        :scroll="{y:202}"
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
    quotaAccountId:`配额账户Id`,
    code:`标的物代码`,
    name:`标的物名称`,
    holdAmount:`持有数量`,
    availableAmount:`可用数量`,
    frozenAmount:`冻结数量`,

  });
}
const columns = [
  {title: "配额账户Id", dataIndex: "quotaAccountId"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "持有数量(吨)", dataIndex: "holdAmount"},
  {title: "可用数量(吨)", dataIndex: "availableAmount"},
  {title: "冻结数量(吨)", dataIndex: "frozenAmount"},
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

