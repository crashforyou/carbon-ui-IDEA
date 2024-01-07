<template>
  <div class="main">
    <a-table
        :dataSource="data"
        :pagination="pagination"
        size="small" 
        bordered
        :scroll="{ x:1800,y:185}"
    >
      <a-table-column title="序号" dataIndex="index" key="index" align="center"/>
      <a-table-column title="标的物代码" dataIndex="code" key="code"  align="center"/>
      <a-table-column title="标的物名称" dataIndex="name" key="name" align="center"/>
      <a-table-column title="最新" dataIndex="latest" key="latest" align="center"/>
      <a-table-column title="涨跌" dataIndex="change" key="change" align="center"/>
      <a-table-column title="涨幅" dataIndex="changeRate" key="changeRate" align="center"/>
      <a-table-column title="成交量" dataIndex="volume" key="volume" align="center"/>
      <a-table-column title="成交额" dataIndex="turnover" key="turnover"  align="center"/>
      <a-table-column title="开盘" dataIndex="open" key="open" align="center"/>
      <a-table-column
          title="前收"
          dataIndex="previousClose"
          key="previousClose"
          align="center"
      />
      <a-table-column title="最高" dataIndex="highest" key="highest" align="center"/>
      <a-table-column title="最低" dataIndex="lowest" key="lowest" align="center"/>
      <a-table-column title="买价" dataIndex="bidPrice" key="bidPrice" align="center"/>
      <a-table-column title="买量" dataIndex="bidVolume" key="bidVolume" align="center"/>
      <a-table-column title="均价" dataIndex="averagePrice" key="averagePrice" align="center"/>
      <a-table-column
          title="摘牌"
          dataIndex="fixedColumn"
          key="fixedColumn"
          fixed="right"
          align="center"
      />
    </a-table>
  </div>
</template>

<script setup>
import {ref} from "vue";

const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    "index":i
  });
}

</script>
<style lang="less" scoped>
.main{
  position: relative;
  left: -2%;
  width: 102%;
  // background: black;
}
// ::v-deep {
//   .ant-tabs-nav {
//     writing-mode: vertical-rl;
//     text-orientation: upright;
//   }
// }
// ::v-deep {
//   .ant-table-thead {
//     tr > th {
//       background: black;
//       color: white;
//     }
//   }

//   .ant-table-tbody {
//     tr > td {
//       background: rgb(34, 57, 150);
//       color: white;
//     }
//   }
// }
</style>