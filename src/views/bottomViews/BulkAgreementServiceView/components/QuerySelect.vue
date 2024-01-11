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
        <a v-if="record.status === '未询价'" @click="record.status = '已报单'">加入询价</a>
        <a v-if="record.status === '已报单'" @click="goToNegotiationPage(record)">洽谈</a>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const columns = ref([
  {title: "操作", key: "operation", width: 100, fixed: "left", align: 'center'},
  {title: "报价时间", dataIndex: "time", key: "1", width: 150, align: 'center'},
  {title: "标的物代码", dataIndex: "subjectMatterCode", key: "2", width: 150, align: 'center'},
  {title: "标的物名称", dataIndex: "subjectMatterName", key: "3", width: 150, align: 'center'},
  {title: "买卖方向", dataIndex: "flowType", key: "4", width: 150, align: 'center'},
  {title: "初始报价价格", dataIndex: "price", key: "5", width: 150, align: 'center'},
  {title: "初始报价数量", dataIndex: "amount", key: "6", width: 150, align: 'center'},
  {title: "交易账号", dataIndex: "account", key: "7", width: 150, align: 'center'},
  {title: "报价状态", dataIndex: "status", key: "8", width: 150, align: 'center'},
  {title: "报价编号", dataIndex: "id", key: "9", width: 150, align: 'center'},
]);

const goToNegotiationPage = (record) => {
  localStorage.setItem('record', JSON.stringify(record));
  //使用Vue Router进行页面跳转
  this.$router.push({name: 'NegotiationPage', params: record});
};

const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    time: "2021-06-01 12:00:00",
    subjectMatterCode: "000001",
    subjectMatterName: "上证指数",
    flowType: "买入",
    price: "100",
    amount: "100",
    account: "123456789",
    status: "未询价",
    id: "123456789",
  });
}
onMounted(() => {
  let operatorCode= localStorage.getItem("operatorCode");
  axios.get(`http://localhost:8080/bulkAgreement/selectDirectionOffer/${operatorCode}`)
      .then((res) => {
        console.log(res);
        data.value = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
});
</script>


