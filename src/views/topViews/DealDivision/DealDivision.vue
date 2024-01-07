<template>
  <a-table :dataSource="dataSource" :rowClassName="getRowClass" :columns="columns"/>
</template>

<script setup>
import {ref} from "vue";

const dataSource = ref([
  // 成交记录数据
  {time: '2022-01-01 10:00:00', price: 100, quantity: 500},
  {time: '2022-01-01 10:01:00', price: 101, quantity: 600},
  {time: '2022-01-01 10:02:00', price: 99, quantity: 700},
  {time: '2022-01-01 10:03:00', price: 100, quantity: 800},
  {time: '2022-01-01 10:04:00', price: 101, quantity: 900},
  {time: '2022-01-01 10:05:00', price: 102, quantity: 1000},
  {time: '2022-01-01 10:06:00', price: 103, quantity: 1100},
  {time: '2022-01-01 10:07:00', price: 104, quantity: 1200},
  {time: '2022-01-01 10:08:00', price: 105, quantity: 1300},
]);

const columns = [
  {
    title: "成交时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "成交价格",
    dataIndex: "price",
    key: "price",
    customRender: (_, record, index) => renderPrice(record, index),
  },
  {
    title: "成交数量",
    dataIndex: "quantity",
    key: "quantity",
  },
];
const getRowClass = (record, index) => {
  if (
      index > 0 &&
      dataSource.value[index].price > dataSource.value[index - 1].price
  ) {
    return "up";
  } else if (
      index > 0 &&
      dataSource.value[index].price < dataSource.value[index - 1].price
  ) {
    return "down";
  }
  return "";
};

const renderPrice = (record, index) => {
  let prevPrice = index > 0 ? dataSource[index - 1].price : record.price;
  if (record.price > prevPrice) {
    return `<div class="up"> ${record.price}<span>↑</span></div>`;
  } else if (record.price < prevPrice) {
    return `<div class="down"> ${record.price}<span>↓</span></div>`;
  }
  return record.price;
};

</script>

<style scoped>
.up {
  color: red;
}

.down {
  color: green;
}
</style>
