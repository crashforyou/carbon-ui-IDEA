<!--定向报价-->
<template>
  <div class="selectButton">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">申请查询</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">成交查询</button>
  </div>
  <div v-if="activeButton === 'button1'">
    <a-table 
      :columns="columns" 
      :data-source="data" 
      :scroll="{y: 186}"  
      size="small" 
      bordered
      >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">修改</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">撤回</a>
        </template>
      </template>
    </a-table>
  </div>
  <div v-if="activeButton === 'button2'">
    <a-table 
      :columns="columns2"
      :data-source="data2"
      :scroll="{y: 186}"  
      size="small" 
      bordered
      >
      <template #bodyCell="{ column, record }">
      </template>
    </a-table>
  </div>
</template>

<script setup>
import {ref,nextTick} from "vue";

const activeButton = ref('button1')
const isOfferQuery = ref(true);
const isTransactionQuery = ref(false);

const columns = [
  {
    title: "操作",
    key: "operation",
    width: 160,
    fixed: "left",
    align:'center'
  },
  {title: "委托编号", dataIndex: "orderNumber", width: 100},
  {title: "委托时间", dataIndex: "orderTime", width: 100},
  {title: "标的物代码", dataIndex: "code", width: 120},
  {title: "标的物名称", dataIndex: "name", width: 120},
  {title: "委托数量", dataIndex: "Amount", width: 100},
  {title: "委托价格", dataIndex: "price", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 100},
  {title: "委托状态", dataIndex: "status", width: 100},
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    orderTime: "12:00:00",
    code: "标的物",
    name: "标的物名称",
    operatorCode:"操作员代码",
    Amount:"委托数量",
    price:"委托价格",
    status:"委托状态",
    inquiryStatus: "未询价",
    orderNumber:"委托编号",
  });
}

const columns2 = [
  {title: "委托编号", dataIndex: "orderNumber", width: 100},
  {title: "成交时间", dataIndex: "orderTime", width: 100},
  {title: "标的物代码", dataIndex: "code", width: 120},
  {title: "标的物名称", dataIndex: "name", width: 120},
  {title: "成交数量", dataIndex: "finallyAmount", width: 100},
  {title: "成交金额", dataIndex: "finallyBalance", width: 100},
  {title: "买方客户", dataIndex: "requestClient", width: 100},
  {title: "卖方客户", dataIndex: "purchaserClient", width: 100},
];

const data2 = [];
for (let i = 0; i < 100; i++) {
  data2.push({
    key: i,
    orderNumber:"委托编号",
    orderTime: "12:00:00",
    code: "标的物",
    name: "标的物名称",
    finallyAmount: "10000",
    finallyBalance: "100000",
    inquiryStatus: "未询价",
    requestClient:"买方客户",
    purchaserClient:"卖方客户"
  });
}
</script>
<style scoped>
button {
  margin: 5px;
  padding: 8px 13px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover,button.active{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}
.selectButton{
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-bottom: 2px solid #a8b7d3;
}
</style>
