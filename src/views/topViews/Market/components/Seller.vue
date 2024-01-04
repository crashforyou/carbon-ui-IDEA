<template>
  <a-table
      :dataSource="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
  >
    <a-table-column title="序号" dataIndex="index" key="index" fixed="left"/>
    <a-table-column title="标的物代码" dataIndex="code" key="code"/>
    <a-table-column title="标的物名称" dataIndex="name" key="name"/>
    <a-table-column title="最新" dataIndex="latest" key="latest"/>
    <a-table-column title="涨跌" dataIndex="change" key="change"/>
    <a-table-column title="涨幅" dataIndex="changeRate" key="changeRate"/>
    <a-table-column title="成交量" dataIndex="volume" key="volume"/>
    <a-table-column title="成交额" dataIndex="turnover" key="turnover"/>
    <a-table-column title="开盘" dataIndex="open" key="open"/>
    <a-table-column
        title="前收"
        dataIndex="previousClose"
        key="previousClose"
    />
    <a-table-column title="最高" dataIndex="highest" key="highest"/>
    <a-table-column title="最低" dataIndex="lowest" key="lowest"/>
    <a-table-column title="买价" dataIndex="bidPrice" key="bidPrice"/>
    <a-table-column title="买量" dataIndex="bidVolume" key="bidVolume"/>
    <a-table-column title="均价" dataIndex="averagePrice" key="averagePrice"/>
    <a-table-column
        title="摘牌"
        dataIndex="fixedColumn"
        key="fixedColumn"
        fixed="right"
    />
  </a-table>
</template>

<script setup>
import {ref} from "vue";

const data = ref([]);
</script>
