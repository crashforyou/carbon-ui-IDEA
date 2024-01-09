<template>
  <div>
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
  {title: "账户类型", dataIndex: "accountType", width: 100},
  {title: "库存账号", dataIndex: "account", width: 100},
  {title: "买卖方向", dataIndex: "direction", width: 100},
  {title: "挂牌方式", dataIndex: "listingMode", width: 100},
  {title: "委托价格", dataIndex: "orderPrice", width: 100},
  {title: "委托数量", dataIndex: "orderQuantity", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 120},
  {title: "状态", dataIndex: "status", width: 100},
  {title: "撤牌时间", dataIndex: "cancelTime", width: 100},
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    orderNumber: `委托编号${i + 1}`,
    orderTime: `委托时间${i + 1}`,
    code: `标的物代码${i + 1}`,
    name: `标的物名称${i + 1}`,
    accountType: "账户类型",
    account:"库存账号",
    operatorCode: `操作员代码${i + 1}`,
    direction: `买卖方向${i + 1}`,
    listingMode: `挂牌方式${i + 1}`,
    orderQuantity: `委托数量${i + 1}`,
    orderPrice: `委托价格${i + 1}`,
    cancelTime: `撤单时间${i + 1}`,
    status: `状态${i + 1}`,
    inquiryStatus: "未询价",
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