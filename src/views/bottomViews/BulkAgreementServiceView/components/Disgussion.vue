<!--大宗协议询价-->
<!--协议洽谈-->
<template>
  <div class="mainer">
    <a-layout>
      <a-layout-content>
        <!--        <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;font-weight: bold;">-->
        <!--          <span>交易信息</span>-->
        <!--        </div>-->
        <a-table
            :dataSource="transactionData"
            :columns="transactionColumns"
            :pagination="false"
        ></a-table>
        <!--        <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;font-weight: bold;">-->
        <!--          <span>报价记录</span>-->
        <!--        </div>-->
        <a-table :dataSource="quoteData" :columns="quoteColumns" :pagination="false">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'operation'">
              <a @click="makeBargain(record)">成交</a>
            </template>
          </template>
        </a-table>
        <a-form @submit="handleSubmit">
          <a-row gutter="16">
            <a-col :span="4">
              <a-form-item label="价格">
                <a-input v-model="price" placeholder="请输入价格"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="数量">
                <a-input v-model="quantity" placeholder="请输入数量"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="备注">
                <a-input v-model="note" placeholder="请输入备注"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item>
                <a-button type="primary" html-type="submit">出价</a-button>
                <a-button type="default" @click="terminate">终止</a-button>
              </a-form-item>
            </a-col>

          </a-row>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import AxiosInstance from "@/utils/axiosInstance";

const price = ref("");
const quantity = ref("");
const note = ref("");
const availableFunds = ref(""); // 这里可以填写本轮询价可用资金
const availableQuota = ref(""); // 这里可以填写可用配额

const record = useRoute().query.record;
const transactionColumns = ref([
  {title: "报价编号", dataIndex: "id", key: "id"},
  {title: "标的物编号", dataIndex: "itemId", key: "itemId"},
  {
    title: "对手方名称",
    dataIndex: "counterpartyName",
    key: "counterpartyName",
  },
  {title: "账户类型", dataIndex: "accountType", key: "accountType"},
  {title: "回应编号", dataIndex: "responseId", key: "responseId"},
  {title: "回应状态", dataIndex: "responseStatus", key: "responseStatus"},
  {
    title: "对手方报价方向",
    dataIndex: "counterpartyQuoteDirection",
    key: "counterpartyQuoteDirection",
  },
  {
    title: "回应方交易账号",
    dataIndex: "responseTransactionAccount",
    key: "responseTransactionAccount",
  },
]);
const transactionData = ref([]);
const directionPostData = ref({});
transactionData.value.push({
  id: localStorage.getItem("id"),
  itemId: localStorage.getItem("subjectMatterCode"),
  counterpartyName: localStorage.getItem("subjectMatterName"),
  accountType: localStorage.getItem("accountType"),
  responseId: localStorage.getItem("clientId"),
  responseStatus: localStorage.getItem("status"),
  counterpartyQuoteDirection: localStorage.getItem("flowType"),
  responseTransactionAccount: localStorage.getItem("directionClient"),
});

const quoteData = ref([
  // 在这里添加报价记录数据
]);
for (let i = 0; i < 2; i++) {
  quoteData.value.push({
    key: i,
    index: "序号"
  });
}
const quoteColumns = ref([
  {title: "序号", dataIndex: "id", key: "index"},
  {title: "操作", dataIndex: "operation", key: "operation"},
  {title: "议价方", dataIndex: "operatorCode", key: "negotiator"},
  {title: "协议价格", dataIndex: "price", key: "agreedPrice"},
  {title: "出价类型", dataIndex: "flowType", key: "bidType"},
  {title: "协议数量", dataIndex: "amount", key: "agreedQuantity"},
  {title: "协议金额", dataIndex: "price", key: "agreedAmount"},
  {title: "协议备注", dataIndex: "agreedNote", key: "agreedNote"},
]);
onMounted(() => {
  let clientId=localStorage.getItem("clientId")
  AxiosInstance
      .get(`/bulkAgreement/selectDirectionEnquiry/${clientId}`)
      .then((res) => {
        quoteData.value = res.data.data;
        console.log(res);
        // 在这里添加交易数据
        // 在这里添加报价记录数据
      })
      .catch((err) => {
        console.log(err);
      })

});

const makeBargain = (record) => {
  let directionEnquiryPostId = record.id;
  AxiosInstance
      .post(`/bulkAgreement/directionDone/${directionEnquiryPostId}`)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
};

const handleSubmit = () => {
  // 在这里添加出价的代码
};

const terminate = () => {
  // 在这里添加终止的代码
};
</script>

<style scoped>
.mainer {
  background: #eceff6;
  height: 86%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>