<!--大宗协议询价-->
<!--协议洽谈-->
<template>
  <a-layout>
    <a-layout-header
        style="display: flex; justify-content: flex-end; align-items: center"
    >
      <a-button type="primary" @click="goBack">返回</a-button>
    </a-layout-header>
    <a-layout-content>
      <a-table
          :dataSource="transactionData"
          :columns="transactionColumns"
      ></a-table>
      <a-table :dataSource="quoteData" :columns="quoteColumns"></a-table>
      <a-form @submit="handleSubmit">
        <a-row gutter="16">
          <a-col :span="4">
            <a-form-item label="价格">
              <a-input v-model="price" placeholder="请输入价格"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="数量">
              <a-input v-model="quantity" placeholder="请输入数量"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="备注">
              <a-input v-model="note" placeholder="请输入备注"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item>
              <a-button type="primary" html-type="submit">出价</a-button>
              <a-button type="danger" @click="terminate">终止</a-button>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="本轮询价可用资金">
              <a-input v-model="availableFunds" disabled></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="可用配额">
              <a-input v-model="availableQuota" disabled></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const price = ref("");
    const quantity = ref("");
    const note = ref("");
    const availableFunds = ref(""); // 这里可以填写本轮询价可用资金
    const availableQuota = ref(""); // 这里可以填写可用配额
    const transactionData = ref([
      // 在这里添加交易数据
    ]);

    const transactionColumns = ref([
      {title: "报价编号", dataIndex: "quoteId", key: "quoteId"},
      {title: "标的物编号", dataIndex: "itemId", key: "itemId"},
      {
        title: "对手方名称",
        dataIndex: "counterpartyName",
        key: "counterpartyName",
      },
      {title: "账户类型", dataIndex: "accountType", key: "accountType"},
      {title: "回应编号", dataIndex: "responseId", key: "responseId"},
      {title: "回应状态", dataIndex: "responseStatus", key: "responseStatus"},
      {
        title: "对手方报价方向",
        dataIndex: "counterpartyQuoteDirection",
        key: "counterpartyQuoteDirection",
      },
      {
        title: "回应方交易账号",
        dataIndex: "responseTransactionAccount",
        key: "responseTransactionAccount",
      },
    ]);

    const quoteData = ref([
      // 在这里添加报价记录数据
    ]);

    const quoteColumns = ref([
      {title: "序号", dataIndex: "index", key: "index"},
      {title: "操作", dataIndex: "operation", key: "operation"},
      {title: "议价方", dataIndex: "negotiator", key: "negotiator"},
      {title: "协议价格", dataIndex: "agreedPrice", key: "agreedPrice"},
      {title: "出价类型", dataIndex: "bidType", key: "bidType"},
      {title: "协议数量", dataIndex: "agreedQuantity", key: "agreedQuantity"},
      {title: "协议金额", dataIndex: "agreedAmount", key: "agreedAmount"},
      {title: "协议备注", dataIndex: "agreedNote", key: "agreedNote"},
    ]);

    const goBack = () => {
      // 在这里添加返回上级页面的代码
    };
    const handleSubmit = () => {
      // 在这里添加出价的代码
    };

    const terminate = () => {
      // 在这里添加终止的代码
    };

    return {
      transactionData,
      transactionColumns,
      quoteData,
      quoteColumns,
      goBack,
      price,
      quantity,
      note,
      availableFunds,
      availableQuota,
      handleSubmit,
      terminate,
    };
  },
};
</script>
