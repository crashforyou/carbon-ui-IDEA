<template>
  <a-table :dataSource="dataSource" :columns="columns"/>
  <DelistingForm v-if="showForm" :record="currentRecord" @close="showForm = false"/>
</template>

<script setup>
import {ref} from 'vue';
import DelistingForm from "@/views/topViews/BuyDeListing/components/DelistingForm.vue";

const showForm = ref(false);
const currentRecord = ref(null);

const dataSource = ref([
  {
    key: '1',
    listingTime: '2022-01-01',
    orderNumber: '123456',
    itemCode: 'ABC',
    itemName: 'Item 1',
    customerNumber: 'C001',
    listingQuantity: '100',
    listingPrice: '10.00',
  },
]);
const openForm = (record) => {
  currentRecord.value = record;
  showForm.value = true;
};

const columns = ref([
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
    key: 'action',
    fixed: 'right',
    // render: (text, record) => (
        // <a-space size="middle">
        //   <a onClick={() => openForm(record)}>摘牌</a>
        // </a-space>
    // ),
  },
]);


</script>
