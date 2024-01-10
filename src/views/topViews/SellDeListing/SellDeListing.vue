<template>
  <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{y: 232}"
      size="small"
      bordered
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'operation'">
        <a @click="delisting">摘牌</a>
      </template>
    </template>
  </a-table>
  <a-modal
      v-model:visible="groupModalVisible"
      title="我要卖出"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleGroupOk"
      @cancel="handleGroupCancel"
  >
    <a-form :model="form">
      <!-- 表单字段 -->
      <a-form-item label="标的物代码">
        <a-input v-model:value="form.subjectMatterCode" disabled/>
      </a-form-item>
      <a-form-item label="标的物名称">
        <a-input v-model:value="form.subjectMatterName" disabled/>
      </a-form-item>
      <a-form-item label="挂牌数量">
        <a-input v-model:value="form.amount" disabled/>
      </a-form-item>
      <a-form-item label="挂牌价格">
        <a-input v-model:value="form.price" disabled/>
      </a-form-item>
      <a-form-item label="对手方客户号">
        <a-input v-model:value="form.clientId" disabled/>
      </a-form-item>
      <a-form-item label="账户类型">
        <a-select v-model:value="form.accountType" disabled>
          <a-select-option value="1">账户1</a-select-option>
          <a-select-option value="2">账户2</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="交易账号">
        <a-select v-model:value="form.account" disabled>
          <a-select-option value="1">交易账号1</a-select-option>
          <a-select-option value="2">交易账号2</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="最大可交易量">
        <a-input v-model:value="form.maxTradeVolume" disabled/>
      </a-form-item>
      <a-form-item label="最小交易量">
        <a-input v-model:value="form.minTradeVolume" disabled/>
      </a-form-item>
      <a-form-item label="摘牌数量">
        <a-input-number v-model:value="form.deAmount" min="1"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

let groupModalVisible = ref(false);
// const record = ref(null);
const columns = [
  {
    title: '挂牌时间',
    dataIndex: 'listingTime',
    key: 'listingTime',
  },
  {
    title: '委托编号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '标的物代码',
    dataIndex: 'itemCode',
    key: 'itemCode',
  },
  {
    title: '标的物名称',
    dataIndex: 'itemName',
    key: 'itemName',
  },
  {
    title: '客户号',
    dataIndex: 'customerNumber',
    key: 'customerNumber',
  },
  {
    title: '挂牌数量',
    dataIndex: 'listingQuantity',
    key: 'listingQuantity',
  },
  {
    title: '挂牌价格',
    dataIndex: 'listingPrice',
    key: 'listingPrice',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  },
];
const data = ref([]);
for (let i = 0; i < 2; i++) {
  data.value.push({
    key: i,
    listingTime: '2022-01-01',
    orderNumber: '123456',
    itemCode: 'ABC',
    itemName: 'Item 1',
    customerNumber: 'C001',
    listingQuantity: '100',
    listingPrice: '10.00',
  });
}
const form = ref({
  id: '',
  subjectMatterCode: '',
  subjectMatterName: '',
  amount: '',
  price: '',
  clientId: '',
  accountType: '',
  account: '',
  maxTradeVolume: '',
  minTradeVolume: '',
  deAmount: '',
});
const delisting = (record) => {
  form.value.id=record.orderNumber;
  form.value.subjectMatterCode=record.itemCode;
  form.value.subjectMatterName=record.itemName;
  form.value.amount=record.listingQuantity;
  form.value.price=record.listingPrice;
  groupModalVisible.value = true;
};

const handleGroupOk = () => {
  axios.post(`http://localhost:8800/listing/depurchaser`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  groupModalVisible.value = false;
};
const handleGroupCancel = () => {
  groupModalVisible.value = false;
};
</script>
