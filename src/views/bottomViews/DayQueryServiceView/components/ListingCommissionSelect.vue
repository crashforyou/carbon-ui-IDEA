<template>
  <div>
    <a-select v-model="selectedCode" placeholder="请选择标的物代码">
      <a-select-option v-for="code in codes" :key="code">{{
          code
        }}
      </a-select-option>
    </a-select>
    <a-select v-model="selectedDirection" placeholder="请选择买卖方向">
      <a-select-option v-for="direction in directions" :key="direction">{{
          direction
        }}
      </a-select-option>
    </a-select>
    <a-select v-model="selectedStatus" placeholder="请选择委托状态">
      <a-select-option v-for="status in statuses" :key="status">{{
          status
        }}
      </a-select-option>
    </a-select>
    <a-button type="primary" @click="search">搜索</a-button>
    <a-button @click="clear">清空</a-button>
    <a-table
        :dataSource="data"
        :columns="columns"
        :pagination="pagination"
        :scroll="{ x: 'max-content' }"
    ></a-table>
  </div>
</template>

<script setup>
import {ref} from "vue";

const selectedCode = ref(null);
const selectedDirection = ref(null);
const selectedStatus = ref(null);
const codes = ref(["代码1", "代码2", "代码3"]);
const directions = ref(["买入", "卖出"]);
const statuses = ref(["未成交", "部分成交", "全部成交", "已撤销"]);
const data = ref([]);
const columns = [
  {title: "委托编号", dataIndex: "orderNumber"},
  {title: "委托日期", dataIndex: "orderDate"},
  {title: "委托时间", dataIndex: "orderTime"},
  {title: "操作员代码", dataIndex: "operatorCode"},
  {title: "交易账号", dataIndex: "account"},
  {title: "标的物代码", dataIndex: "code"},
  {title: "标的物名称", dataIndex: "name"},
  {title: "买卖方向", dataIndex: "direction"},
  {title: "挂牌方式", dataIndex: "listingMode"},
  {title: "委托数量", dataIndex: "orderQuantity"},
  {title: "委托价格", dataIndex: "orderPrice"},
  {title: "成交金额", dataIndex: "transactionAmount"},
  {title: "成交数量", dataIndex: "transactionQuantity"},
];
const pagination = {pageSize: 10};

const search = () => {
  // 在这里执行搜索逻辑，然后更新data
};

const clear = () => {
  selectedCode.value = null;
  selectedDirection.value = null;
  selectedStatus.value = null;
  data.value = [];
};
</script>

