<!--定向报价-->
<template>
  <div class="selectButton">
    <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">报价查询</button>
    <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">成交查询</button>
  </div>
  <div v-if="activeButton === 'button1'">
    <a-table
        :columns="columns1"
        :data-source="data1"
        :scroll="{y: 186}"
        size="small"
        bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a v-if="record.status === '未成交'">洽谈</a>
          <!--          <a v-if="record.status === '未成交'" style="margin-left: 5px">详情</a>-->
          <a v-if="record.status === '未成交'" style="margin-left: 5px" @click="handleEdit(record)">修改</a>
          <a v-if="record.status === '未成交'" style="margin-left: 5px" @click="handleRevoke(record)">撤回</a>
          <a v-if="record.status === '询价结束'">洽谈查询</a>
          <a v-if="record.status === '询价结束'" style="margin-left: 5px">详情</a>
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
      <!--      <template #bodyCell="{ column, record }">-->
      <!--        <template v-if="column.key === 'operation'">-->
      <!--          <a v-if="record.status === '未成交'">洽谈</a>-->
      <!--          <a v-if="record.status === '未成交'" style="margin-left: 5px">详情</a>-->
      <!--          <a v-if="record.status === '未成交'" style="margin-left: 5px">修改</a>-->
      <!--          <a v-if="record.status === '未成交'" style="margin-left: 5px">撤回</a>-->
      <!--          <a v-if="record.status === '询价结束'">洽谈查询</a>-->
      <!--          <a v-if="record.status === '询价结束'" style="margin-left: 5px">详情</a>-->
      <!--        </template>-->
      <!--      </template>-->
    </a-table>
  </div>
</template>

<script setup>
import {ref, nextTick, onMounted} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

const activeButton = ref('button1')
const isOfferQuery = ref(true);
const isTransactionQuery = ref(false);

const columns1 = [
  {
    title: "操作",
    key: "operation",
    width: 160,
    fixed: "left",
    align: 'center'
  },
  {title: "报价时间", dataIndex: "time", key: "1", width: 150, align: 'center'},
  {title: "标的物代码", dataIndex: "subjectMatterCode", key: "2", width: 150, align: 'center'},
  {title: "标的物名称", dataIndex: "subjectMatterName", key: "3", width: 150, align: 'center'},
  {title: "买卖方向", dataIndex: "flowType", key: "4", width: 150, align: 'center'},
  {title: "委托价格", dataIndex: "price", key: "5", width: 150, align: 'center'},
  {title: "委托数量", dataIndex: "amount", key: "6", width: 150, align: 'center'},
  // {title: "初始报价金额", dataIndex: "initialOfferAmount", key: "6", width: 150, align: 'center'},
  {title: "群组Id", dataIndex: "groupId", key: "7", width: 150, align: 'center'},
  {title: "报价状态", dataIndex: "status", key: "8", width: 150, align: 'center'},
  // {title: "询价状态", dataIndex: "status", key: "9", width: 150, align: 'center'},
  {title: "报价编号", dataIndex: "id", key: "9", width: 150, align: 'center'},
];
const columns2 = [
  {title: "成交时间", dataIndex: "time", key: "1", width: 150, align: 'center'},
  {title: "标的物代码", dataIndex: "subjectMatterCode", key: "2", width: 150, align: 'center'},
  {title: "标的物名称", dataIndex: "subjectMatterName", key: "3", width: 150, align: 'center'},
  {title: "买卖方向", dataIndex: "flowType", key: "4", width: 150, align: 'center'},
  {title: "初始报价价格", dataIndex: "firstPrice", key: "5", width: 150, align: 'center'},
  {title: "初始报价数量", dataIndex: "firstAmount", key: "6", width: 150, align: 'center'},
  {title: "初始报价金额", dataIndex: "firstBalance", key: "7", width: 150, align: 'center'},
  {title: "最终报价价格", dataIndex: "finallyPrice", key: "8", width: 150, align: 'center'},
  {title: "最终报价数量", dataIndex: "finallyAmount", key: "9", width: 150, align: 'center'},
  {title: "最终报价金额", dataIndex: "finallyBalance", key: "10", width: 150, align: 'center'},
  {title: "挂牌方", dataIndex: "listingClient", key: "11", width: 150, align: 'center'},
  {title: "摘牌方", dataIndex: "delistingClient", key: "12", width: 150, align: 'center'},
];


let data1 = ref([]);
let data2 = ref([]);

const fetchData=()=>{
  let operatorCode = localStorage.getItem("operatorCode");
  let clientId = localStorage.getItem("clientId");
  AxiosInstance
      .get(`/bulkAgreement/selectGroupOffer/${operatorCode}`)
      .then((res) => {
        data1.value = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  AxiosInstance
      .get(`/bulkAgreement/selectGroupDoneRecord/${clientId}`)
      .then((res) => {
        data2.value = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
}
const handleEdit = (record) => {
  let groupPostId = record.groupId;
  AxiosInstance.post(`/bulkAgreement/modifyGroupOffer/${groupPostId}`, record)
      .then((res) => {
        alert(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  fetchData();
};
const handleRevoke = (record) => {
  let groupPostId = record.groupId;
  AxiosInstance.post(`/bulkAgreement/deleteGroupOffer/${groupPostId}`, record)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  fetchData();
};

onMounted(() => {
  fetchData();
});

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

button:hover, button.active {
  color: white;
  background-color: #17294f;
  cursor: pointer;
}

.selectButton {
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-bottom: 2px solid #a8b7d3;
}
</style>
