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

const fetchData = async () => {
  let clientId = localStorage.getItem('clientId');
  const response = await axios.get(`http://localhost:8080/bulkAgreement/selectGroupDoneRecord/${clientId}`, {
    params: {
      page: pagination.value.current,
      pageSize: pagination.value.pageSize,
    },
  });

  data.value = response.data;
  pagination.value.total = response.data.total;
};
onMounted(() => {
  fetchData();
});

</script>
