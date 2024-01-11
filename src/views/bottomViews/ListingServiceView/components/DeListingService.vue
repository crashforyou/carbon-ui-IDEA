<template>
  <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
    <span>撤销挂牌</span>
  </div>
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
          <a @click="revokePost(record)" v-if="record.status === '未询价'" style="margin-left: 5px">修改</a>
          <a @click="editPost(record)" v-if="record.status === '未询价'" style="margin-left: 5px">撤回</a>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import {ref, nextTick, onMounted} from "vue";
import axios from "axios";

const activeButton = ref('button1')
const isOfferQuery = ref(true);
const isTransactionQuery = ref(false);

const listingPost = ref({
  id:"",
  time:"",
  subjectMatterCode: "",
  subjectMatterName: "",
  accountType: "",
  QuotaAccount: "",
  flowType: "买入",
  listingType: "",
  price: "",
  amount: "",
  directionClient: "",
  operatorCode:"",
  status:"",
  // 其他表单项
});

const columns = [
  {
    title: "操作",
    key: "operation",
    width: 160,
    fixed: "left",
    align:'center'
  },
  {title: "委托编号", dataIndex: "id", width: 100},
  {title: "委托时间", dataIndex: "time", width: 100},
  {title: "标的物代码", dataIndex: "subjectMatterCode", width: 120},
  {title: "标的物名称", dataIndex: "subjectMatterName", width: 120},
  {title: "账户类型", dataIndex: "accountType", width: 100},
  {title: "库存账号", dataIndex: "QuotaAccount", width: 100},
  {title: "买卖方向", dataIndex: "flowType", width: 100},
  {title: "挂牌方式", dataIndex: "listingType", width: 100},
  {title: "委托价格", dataIndex: "price", width: 100},
  {title: "委托数量", dataIndex: "amount", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 120},
  {title: "状态", dataIndex: "status", width: 100},
  {title: "撤牌时间", dataIndex: "delistingTime", width: 100},
];

const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    id: `委托编号${i + 1}`,
    time: `委托时间${i + 1}`,
    subjectMatterCode: `标的物代码${i + 1}`,
    subjectMatterName: `标的物名称${i + 1}`,
    accountType: "账户类型",
    QuotaAccount:"库存账号",
    operatorCode: `操作员代码${i + 1}`,
    flowType: `买卖方向${i + 1}`,
    listingType: `挂牌方式${i + 1}`,
    amount: `委托数量${i + 1}`,
    price: `委托价格${i + 1}`,
    delistingTime: `撤单时间${i + 1}`,
    status: `未询价`,
  });
}
const revokePost = (record) =>{
  let listingId=record.id
  axios
      .post(`http://localhost:8800/listing/cancel`,listingId)
      .then((res)=>{
        data.value=res.data;
      })
      .catch((err)=>{
        console.log(err);
      })
}
const editPost = (record) =>{
  let listingId=record.id
  axios
      .post(`http://localhost:8800/listing/cancel`,listingId)
      .then((res)=>{
        data.value=res.data;
      })
      .catch((err)=>{
        console.log(err);
      })
}
onMounted(()=>{
  let clientId=localStorage.getItem("clientId");
  axios
      .get(`http://localhost:8800/listing/entrustInfo/${clientId}`)
      .then((res)=>{
        data.value=res.data
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
})


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
