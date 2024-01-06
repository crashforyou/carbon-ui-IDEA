<!--资金查询-->
<!--资金账号-->
<template>
  <div>
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
      :scroll="{y: 250 }"
      size="small" 
      bordered
      :pagination="false"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "core-js/internals/queue";

const accounts = ref([
  {label: "账号1", value: "1"},
  {label: "账号2", value: "2"}
  // 添加更多账号
]);

const selectedAccount = ref(accounts.value[0].value);

const columns = [
  {
    title: "资金账号",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "账号类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "资金余额",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "可用资金",
    dataIndex: "available",
    key: "available",
  },
  {
    title: "可出资金",
    dataIndex: "withdrawable",
    key: "withdrawable",
  },
];

const data = ref([]); // 从后端获取数据
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    account:"11111",
    type:"vip",
    balance:"1000000",
    available:"100000",
    withdrawable:"100000",

  });
}

const search = () => {
  // 使用selectedAccount从后端服务获取数据
  axios.get('/api/search', {
    params: {
      account: selectedAccount.value
    }
  })
      .then(response => {
        // 更新表格数据
        data.value = response.data;
      })
      .catch(error => {
        // 处理错误
        console.error(error);
      });
};
</script>

<style>
button {
  margin:2px;
  padding: 6px 18px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}
</style>