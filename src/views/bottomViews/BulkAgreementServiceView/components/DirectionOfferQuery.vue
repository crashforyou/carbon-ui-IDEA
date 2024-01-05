<!--定向报价中报价查询-->
<template>
  <div class="selectButton">
      <button :class="{ active: activeButton === 'button1' }" @click="showOfferQuery('button1')">报价查询</button>
      <button :class="{ active: activeButton === 'button2' }" @click="showTransactionQuery('button2')">成交查询</button>
  </div>
  <div v-if="isOfferQuery">
    <a-table 
      :columns="columns" 
      :data-source="data" 
      :scroll="{y: 240 }"  
      size="small" 
      :pagination="false"
      bordered
      >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a v-if="record.inquiryStatus === '未询价'">洽谈</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">详情</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">修改</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">撤回</a>
          <a v-if="record.inquiryStatus === '询价结束'">洽谈查询</a>
          <a v-if="record.inquiryStatus === '询价结束'" style="margin-left: 5px">详情</a>
        </template>
      </template>
    </a-table>
  </div>
  <div v-if="isTransactionQuery">
    <!-- <a-table 
      :columns="columns" 
      :data-source="data" 
      :scroll="{y: 240 }"  
      size="small" 
      :pagination="false"
      bordered
      >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a v-if="record.inquiryStatus === '未询价'">洽谈</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">详情</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">修改</a>
          <a v-if="record.inquiryStatus === '未询价'" style="margin-left: 5px">撤回</a>
          <a v-if="record.inquiryStatus === '询价结束'">洽谈查询</a>
          <a v-if="record.inquiryStatus === '询价结束'" style="margin-left: 5px">详情</a>
        </template>
      </template>
    </a-table> -->
  </div>
</template>

<script setup>
import {ref,nextTick} from "vue";

let activeButton = 'button1'
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
  {title: "报价时间", dataIndex: "offerTime", key: "1", width: 150,align:'center'},
  {title: "标的物代码", dataIndex: "subjectCode", key: "2", width: 150,align:'center'},
  {title: "买卖方向", dataIndex: "direction", key: "3", width: 150,align:'center'},
  {title: "初始报价价格", dataIndex: "initialOfferPrice", key: "4", width: 150,align:'center'},
  {title: "初始报价数量", dataIndex: "initialOfferQuantity", key: "5", width: 150,align:'center'},
  {title: "初始报价金额", dataIndex: "initialOfferAmount", key: "6", width: 150,align:'center'},
  {title: "交易账号", dataIndex: "transactionAccount", key: "7", width: 150,align:'center'},
  {title: "报价状态", dataIndex: "offerStatus", key: "8", width: 150,align:'center'},
  {title: "询价状态", dataIndex: "inquiryStatus", key: "9", width: 150,align:'center'},
  {title: "报价编号", dataIndex: "offerNumber", key: "10", width: 150,align:'center'},
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    offerTime: "2021-06-01 12:00:00",
    subjectCode: "100000",
    direction: "买入",
    initialOfferPrice: "100",
    initialOfferQuantity: "100",
    initialOfferAmount: "10000",
    transactionAccount: "100000",
    offerStatus: "已报价",
    inquiryStatus: "未询价",
    offerNumber: "100000",
  });
}
const showOfferQuery = (button) => {
  isOfferQuery.value = true;
  isTransactionQuery.value = false;
  activeButton = button
    // 查询报价并更新queryResult

};

const showTransactionQuery = (button) => {
  isTransactionQuery.value = true;
  isOfferQuery.value = false;
  activeButton = button
    // 查询成交并更新queryResult
};
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
}
.selectButton{
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-bottom: 2px solid #a8b7d3;
}
</style>
