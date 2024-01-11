<!--大宗协议询价-->
<!--询价查询-->
<template>
  <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{y:232}"
      size="small"
      bordered
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'operation'">
        <a v-if="record.status === '未成交'" @click="record.status = '已报单'">加入询价</a>
<!--        <a v-if="record.status === '已报单'" @click="goToNegotiationPage(record)">洽谈</a>-->
        <a v-if="record.status === '已报单'" @click="setdata(record)"><router-link :to="{path: '/bulkAgreement/Components/NegotiationPage', query: {record: record}}">洽谈</router-link></a>

      </template>
    </template>
  </a-table>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";
import {useRouter} from "vue-router";

const columns = ref([
  {title: "操作", key: "operation", width: 100, fixed: "left", align: 'center'},
  {title: "报价时间", dataIndex: "time", key: "1", width: 150, align: 'center'},
  {title: "标的物代码", dataIndex: "subjectMatterCode", key: "2", width: 150, align: 'center'},
  {title: "标的物名称", dataIndex: "subjectMatterName", key: "3", width: 150, align: 'center'},
  {title: "买卖方向", dataIndex: "flowType", key: "4", width: 150, align: 'center'},
  {title: "初始报价价格", dataIndex: "price", key: "5", width: 150, align: 'center'},
  {title: "初始报价数量", dataIndex: "amount", key: "6", width: 150, align: 'center'},
  {title: "交易账号", dataIndex: "account", key: "7", width: 150, align: 'center'},
  {title:"账户类型",dataIndex: "accountType", key: "8", width: 150, align: 'center'},
  {title:"对手方",dataIndex: "directionClient", key: "9", width: 150, align: 'center'},
  {title: "报价状态", dataIndex: "status", key: "10", width: 150, align: 'center'},
  {title: "报价编号", dataIndex: "id", key: "11", width: 150, align: 'center'},
]);

const goToNegotiationPage = (record) => {
  //使用Vue Router进行页面跳转
  // useRouter({name: 'NegotiationPage', params: record});
  const router = useRouter();
  router.push({name: 'NegotiationPage', params: record});
};
const setdata = (record) => {
  localStorage.setItem("id", record.id);
  localStorage.setItem("subjectMatterCode", record.subjectMatterCode);
  localStorage.setItem("subjectMatterName", record.subjectMatterName);
  localStorage.setItem("flowType", record.flowType);
  localStorage.setItem("price", record.price);
  localStorage.setItem("amount", record.amount);
  localStorage.setItem("account", record.account);
  localStorage.setItem("status", record.status);
  localStorage.setItem("accountType", record.accountType);
  localStorage.setItem("directionClient", record.directionClient);
  localStorage.setItem("time", record.time);
  localStorage.setItem("operatorCode", record.operatorCode);
};

const data = ref([]);
onMounted(() => {
  let operatorCode= localStorage.getItem("operatorCode");
  AxiosInstance.get(`/bulkAgreement/selectDirectionOffer/${operatorCode}`)
      .then((res) => {
        console.log(res);
        data.value = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
});
</script>


