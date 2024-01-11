<template>
  <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{y: 241}"
      size="small"
      class="table"
      :pagination="false"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'operation'">
        <a @click="delisting(record)">摘牌</a>
      </template>
    </template>
  </a-table>
  <a-modal
      v-model:open="groupModalVisible"
      title="我要买入"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleGroupOk"
      @cancel="handleGroupCancel"
  >
    <a-form :model="form">
      <!-- 表单字段 -->
      <a-form-item label="标的物代码">
        <a-input v-model:value="form.subjectMatterCode" disabled/>
      </a-form-item>
      <a-form-item label="标的物名称">
        <a-input v-model:value="form.subjectMatterName" disabled/>
      </a-form-item>
      <a-form-item label="挂牌数量">
        <a-input v-model:value="form.amount" disabled/>
      </a-form-item>
      <a-form-item label="挂牌价格">
        <a-input v-model:value="form.price" disabled/>
      </a-form-item>
      <a-form-item label="对手方客户号">
        <a-input v-model:value="form.clientId" disabled/>
      </a-form-item>
      <a-form-item label="账户类型">
        <a-input v-model:value="form.accountType" disabled/>
      </a-form-item>
      <a-form-item label="交易账号">
        <a-input v-model:value="form.account" disabled/>
      </a-form-item>
      <a-form-item label="摘牌数量">
        <a-input-number v-model:value="form.deAmount" min="1"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";

let groupModalVisible = ref(false);
const columns = [
  {
    title: '挂牌时间',
    dataIndex: 'time',
    key: 'time',
    align: "center"
  },
  {
    title: '委托编号',
    dataIndex: 'id',
    key: 'id',
    align: "center"
  },
  {
    title: '标的物代码',
    dataIndex: 'subjectMatterCode',
    key: 'subjectMatterCode',
    align: "center"
  },
  {
    title: '标的物名称',
    dataIndex: 'subjectMatterName',
    key: 'subjectMatterName',
    align: "center"
  },
  {title: '账户类型', dataIndex: 'accountType', key: 'accountType', align: "center"},
  {title: '库存账号', dataIndex: 'quotaAccount', key: 'quotaAccount', align: "center"},
  {title: '交易方向', dataIndex: 'flowType', key: 'flowType', align: "center"},
  {
    title: '客户号',
    dataIndex: 'operatorCode',
    key: 'operatorCode',
    align: "center"
  },
  {
    title: '挂牌数量',
    dataIndex: 'amount',
    key: 'amount',
    align: "center"
  },
  {
    title: '挂牌价格',
    dataIndex: 'price',
    key: 'price',
    align: "center"
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: "center"
  },
];
const data = ref([]);

const form = ref({
  listingId: '',
  subjectMatterCode: '',
  subjectMatterName: '',
  amount: '',
  price: '',
  clientId: '',
  accountType: '',
  quotaAccount: '',
  maxTradeVolume: '',
  minTradeVolume: '',
  deAmount: '',
});
const delisting = (record) => {
  form.value.listingId = record.id;
  form.value.subjectMatterCode = record.subjectMatterCode;
  form.value.subjectMatterName = record.subjectMatterName;
  form.value.amount = record.amount;
  form.value.price = record.price;
  form.value.clientId = record.operatorCode;
  form.value.accountType = record.accountType;
  form.value.quotaAccount = record.quotaAccount;

  groupModalVisible.value = true;
  console.log(record);
};

const handleGroupOk = () => {

  AxiosInstance.post(`/listing/depurchaser`, form.value)
      .then((res) => {
        alert(res.data.message)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  groupModalVisible.value = false;
};
onMounted(() => {
  AxiosInstance.get(`/listing/selectSeller`)
      .then((res) => {
        console.log(res);
        data.value = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
});
const handleGroupCancel = () => {
  groupModalVisible.value = false;
};
</script>
<style lang="less" scoped>
.table {
  background: #121212;
}

::v-deep {
  .ant-table-thead {
    tr > th {
      background: #121212;
      color: #a3a8a9;
    }
  }

  .ant-table-tbody {
    tr > td {
      background: #121212;
      color: white;
      transition: background-color 100s, color 100s; /* 添加过渡效果 */
    }

    tr:hover > td {
      background: #121212 !important; /* 悬停时保持背景色不变 */
      color: white !important; /* 悬停时保持文字颜色不变 */
    }
  }
}
</style>