<template>
  <div>
    <a-select v-model="selectedCode" placeholder="请选择标的物代码">
      <a-select-option v-for="code in codes" :key="code">{{
          code
        }}
      </a-select-option>
    </a-select>
    <a-button type="primary" @click="search">搜索</a-button>
    <a-button @click="clear">清空</a-button>
    <a-table
        :dataSource="data"
        :columns="columns"
        :pagination="pagination"
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
    const codes = ref(["代码1", "代码2", "代码3"]);
    const data = ref([]);
    const columns = [
      {title: "市场名称", dataIndex: "marketName"},
      {title: "标的物代码", dataIndex: "code"},
      {title: "标的物名称", dataIndex: "name"},
      {title: "持有数量(吨)", dataIndex: "holdAmount"},
      {title: "可用数量(吨)", dataIndex: "availableAmount"},
      {title: "冻结数量(吨)", dataIndex: "frozenAmount"},
      {title: "买入数量(吨)", dataIndex: "buyAmount"},
      {title: "卖出数量(吨)", dataIndex: "sellAmount"},
      {title: "转入申请数量(吨)", dataIndex: "transferInAmount"},
      {title: "转出申请数量(吨)", dataIndex: "transferOutAmount"},
      {title: "交易账号", dataIndex: "account"},
    ];
    const pagination = {pageSize: 10};

    const search = () => {
      // 在这里执行你的搜索逻辑，然后更新data

    };

    const clear = () => {
      selectedCode.value = null;
      data.value = [];
    };

    return {
      selectedCode,
      codes,
      data,
      columns,
      pagination,
      search,
      clear,
    };
  },
};
</script>
