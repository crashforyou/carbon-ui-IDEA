<template>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>

<script setup>
import { ref } from 'vue';

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
    render: (text, record) => (
        <a-space size="middle">
          <a>摘牌</a>
        </a-space>
    ),
  },
]);
</script>
