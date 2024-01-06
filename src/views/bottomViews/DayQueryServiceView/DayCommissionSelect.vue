<template>
  <div class="main">
    <div>
      <a-form :layout="'inline'" @submit="handleSubmit">
        <a-form-item label="&nbsp;&nbsp;标的物代码">
          <a-input size="small"/>
        </a-form-item>
        <a-form-item label="交易日期">
          <a-range-picker v-model="dateRange" size="small"/>
        </a-form-item>
        <a-form-item label="买卖方向">
          <a-select v-model="direction" placeholder="请选择买卖方向" size="small" style="width: 150px">
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
    </div>
    <a-table
        :dataSource="data"
        :columns="columns"
        :pagination="false"
        :scroll="{}"
        
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Select, Button, Table} from "ant-design-vue";

const selectedCode = ref(null);
const selectedMode = ref(null);
const selectedDirection = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const modes = ref(["模式1", "模式2", "模式3"]);
const directions = ref(["买入", "卖出"]);
const data = ref([]);
const columns = [
  {title: "成交时间", dataIndex: "transactionTime"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "买卖方向", dataIndex: "direction"},
  {title: "挂牌方式", dataIndex: "listingMode"},
  {title: "成交价格（元/吨）", dataIndex: "transactionPrice"},
  {title: "成交数量（吨）", dataIndex: "transactionQuantity"},
  {title: "成交金额（元）", dataIndex: "transactionAmount"},
  {title: "对手方客户号", dataIndex: "counterpartyCustomerNumber"},
  {title: "对手方客户名", dataIndex: "counterpartyCustomerName"},
];
const pagination = {pageSize: 10};

const search = () => {
  // 执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  selectedMode.value = null;
  selectedDirection.value = null;
  data.value = [];
};
</script>
<style scoped>
.main{
  background: #eceff6;
  border: 2px solid #a8b7d3;
}
button {
  margin: 5px;
  padding: 6px 16px;
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