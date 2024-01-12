<template>
  <a-table
      :dataSource="data"
      :columns="columns"
      :rowKey="record => record.id"
      :pagination="pagination"
      :scroll="{ y: 240 }"
  />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import AxiosInstance from "@/utils/axiosInstance";

const data = ref([]);
const columns = ref([
  {title: '交易编号', dataIndex: 'id', key: 'id'},
  {title: '成交时间', dataIndex: 'time', key: 'time'},
  {title: '标的物代码', dataIndex: 'subjectMatterCode', key: 'subjectMatterCode'},
  {title: '标的物名称', dataIndex: 'subjectMatterName', key: 'subjectMatterName'},
  {title: '买卖方向', dataIndex: 'flowType', key: 'flowType'},
  {title: '初始报价单价', dataIndex: 'firstPrice', key: 'firstPrice'},
  {title: '初始报价数量', dataIndex: 'firstAmount', key: 'firstAmount'},
  {title: '初始报价金额', dataIndex: 'firstBalance', key: 'firstBalance'},
  {title: '最终报价单价', dataIndex: 'finallyPrice', key: 'finallyPrice'},
  {title: '最终报价数量', dataIndex: 'finallyAmount', key: 'finallyAmount'},
  {title: '最终报价金额', dataIndex: 'finallyBalance', key: 'finallyBalance'},
  {title: '挂牌方', dataIndex: 'listingClient', key: 'listingClient'},
  {title: '摘牌方', dataIndex: 'delistingClient', key: 'delistingClient'},
]);
const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0,
});


onMounted(() => {
  const clientId = localStorage.getItem('clientId');
  AxiosInstance({
    method: 'get',
    url: `/bulkAgreement/selectDirectionDoneRecord/${clientId}`,
    params: {
      page: pagination.value.current,
      size: pagination.value.pageSize,
    },
  }).then((res) => {
    data.value = res.data.data;
    pagination.value.total = res.data.data.total;
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
});

</script>
