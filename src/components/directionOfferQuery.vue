<!--定向报价中报价查询-->
<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
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
</template>

<script lang="ts" setup>
import type {TableColumnsType} from "ant-design-vue";

const columns: TableColumnsType = [
  {
    title: "操作",
    key: "operation",
    width: 160,
    fixed: "left",
  },
  {title: "报价时间", dataIndex: "offerTime", key: "1", width: 150},
  {title: "标的物代码", dataIndex: "subjectCode", key: "2", width: 150},
  {title: "买卖方向", dataIndex: "direction", key: "3", width: 150},
  {title: "初始报价价格", dataIndex: "initialOfferPrice", key: "4", width: 150},
  {title: "初始报价数量", dataIndex: "initialOfferQuantity", key: "5", width: 150},
  {title: "初始报价金额", dataIndex: "initialOfferAmount", key: "6", width: 150},
  {title: "交易账号", dataIndex: "transactionAccount", key: "7", width: 150},
  {title: "报价状态", dataIndex: "offerStatus", key: "8", width: 150},
  {title: "询价状态", dataIndex: "inquiryStatus", key: "9", width: 150},
  {title: "报价编号", dataIndex: "offerNumber", key: "10", width: 150},
];

interface DataItem {
  key: number;
  offerTime: string;
  subjectCode: string;
  direction: string;
  initialOfferPrice: string;
  initialOfferQuantity: string;
  initialOfferAmount: string;
  transactionAccount: string;
  offerStatus: string;
  inquiryStatus: string;
  offerNumber: string;
}

const data: DataItem[] = [];
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
</script>
