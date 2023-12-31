<template>
  <div>
    <a-select v-model="selectedCode" placeholder="请选择标的物代码">
      <a-select-option v-for="code in codes" :key="code">{{
          code
        }}
      </a-select-option>
    </a-select>
    <a-select v-model="selectedOperation" placeholder="请选择操作类型">
      <a-select-option v-for="operation in operations" :key="operation">{{
          operation
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

<script>
import {ref} from "vue";
import {Select, Button, Table} from "ant-design-vue";

export default {
  components: {
    "a-select": Select,
    "a-select-option": Select.Option,
    "a-button": Button,
    "a-table": Table,
  },
  setup() {
    const selectedCode = ref(null);
    const selectedOperation = ref(null);
    const codes = ref(["代码1", "代码2", "代码3"]);
    const operations = ref(["操作1", "操作2", "操作3"]);
    const data = ref([]);
    const columns = [
      {title: "交易日期", dataIndex: "tradeDate"},
      {title: "交易时间", dataIndex: "tradeTime"},
      {title: "客户号", dataIndex: "customerNumber"},
      {title: "客户名称", dataIndex: "customerName"},
      {title: "标的物代码", dataIndex: "code"},
      {title: "标的物名称", dataIndex: "name"},
      {title: "交易模式", dataIndex: "tradeMode"},
      {title: "操作类型", dataIndex: "operationType"},
      {title: "划转数量（吨）", dataIndex: "transferAmount"},
      {title: "持有数量（吨）", dataIndex: "holdAmount"},
      {title: "交易账号", dataIndex: "account"},
    ];
    const pagination = {pageSize: 10};

    const search = () => {
      // 在这里执行搜索逻辑，然后更新data
    };

    const clear = () => {
      selectedCode.value = null;
      selectedOperation.value = null;
      data.value = [];
    };

    return {
      selectedCode,
      selectedOperation,
      codes,
      operations,
      data,
      columns,
      pagination,
      search,
      clear,
    };
  },
};
</script>
