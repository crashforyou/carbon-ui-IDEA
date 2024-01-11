<!--资金查询-->
<!--资金账号-->
<template>
  <a-form :layout="'inline'" >
    <a-form-item label="&nbsp;&nbsp;账号类型">
      <a-select v-model="selectedAccount" placeholder="选择账号类型" size="small">
        <a-select-option
            v-for="account in accounts"
            :key="account.value"
            :value="account.value"
        >
          {{ account.label }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item class="capitalAccount">
      <button type="primary" @click="search">搜索</button>
    </a-form-item>
  </a-form>
    <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{y: 240}"
        size="small"
        bordered
        :pagination="false"
    >
    </a-table>
</template>

<script setup>
import {ref, nextTick, onMounted} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

const activeButton = ref('button1')
const isOfferQuery = ref(true);
const isTransactionQuery = ref(false);

const columns = [
  {
    title: "资金账号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "账号类型",
    dataIndex: "accountType",
    key: "accountType",
  },
  {
    title: "资金余额",
    dataIndex: "capital",
    key: "capital",
  },
  {
    title: "可用资金",
    dataIndex: "availableCapital",
    key: "availableCapital",
  },
  {
    title: "冻结资金",
    dataIndex: "unavailableCapital",
    key: "unavailableCapital",
  },
];


let data = ref([]);

onMounted(() => {
  let clientId = localStorage.getItem("clientId");
  AxiosInstance.get(`/capital/selectCapitalAccount/${clientId}`)
      .then((res) => {
        data.value = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
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