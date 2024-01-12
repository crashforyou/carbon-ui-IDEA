<template>
  <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
    <span>撤销挂牌</span>
  </div>
  <div>
    <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{y: 235}"
        size="small"
        bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a @click="revokePost(record)" v-if="record.status === '未成交'" style="margin-left: 5px">修改</a>
          <a @click="editPost(record)" v-if="record.status === '未成交'" style="margin-left: 5px">撤回</a>
        </template>
      </template>
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
  {title: "库存账号", dataIndex: "quotaAccount", width: 100},
  {title: "买卖方向", dataIndex: "flowType", width: 100},
  {title: "挂牌方式", dataIndex: "listingType", width: 100},
  {title: "委托价格", dataIndex: "price", width: 100},
  {title: "委托数量", dataIndex: "amount", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 120},
  {title: "状态", dataIndex: "status", width: 100},
  {title: "撤牌时间", dataIndex: "delistingTime", width: 100},
];

const data = ref([]);

const revokePost = (record) =>{
  let listingId=record.id
  AxiosInstance
      .get(`/listing/cancel/${listingId}`)
      .then((res)=>{
        alert(res.data.message);
      })
      .catch((err)=>{
        console.log(err);
      })
}
const editPost = (record) =>{
  let listingId=record.id
  AxiosInstance
      .get(`/listing/cancel/${listingId}`)
      .then((res)=>{
        alert(res.data.message);
      })
      .catch((err)=>{
        console.log(err);
      })
}
onMounted(()=>{
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .get(`/listing/entrustInfo/${clientId}`)
      .then((res)=>{
        data.value=res.data.data;
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
