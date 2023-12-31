<template>
  <div>
    <a-table :columns="columns" :data-source="data"/>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {Table} from "ant-design-vue";

export default {
  components: {
    "a-table": Table,
    "a-table-column": Table.Column,
  },
  setup() {
    const columns = [
      {
        title: "交易日期",
        dataIndex: "tradeDate",
        key: "tradeDate",
      },
      {
        title: "交易时间",
        dataIndex: "tradeTime",
        key: "tradeTime",
      },
      {
        title: "资金账号",
        dataIndex: "account",
        key: "account",
      },
      {
        title: "操作员代码",
        dataIndex: "operatorCode",
        key: "operatorCode",
      },
      {
        title: "划转类型",
        dataIndex: "transferType",
        key: "transferType",
      },
      {
        title: "发生金额",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "期后余额",
        dataIndex: "balance",
        key: "balance",
      },
      {
        title: "期后可用余额",
        dataIndex: "availableBalance",
        key: "availableBalance",
      },
      {
        title: "流水号",
        dataIndex: "serialNumber",
        key: "serialNumber",
      },
    ];

    const data = ref([]); // 从后端获取数据

    // 在组件创建后立即执行
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        data.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return {
      columns,
      data,
    };
  },
};
</script>
