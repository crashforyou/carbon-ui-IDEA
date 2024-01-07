<template>
  <a-form @submit="handleSubmit">
    <h2>我要买入</h2>
    <!-- 表单字段 -->
    <a-form-item label="标的物代码">
      <a-input v-model="record.itemCode" disabled/>
    </a-form-item>
    <a-form-item label="标的物名称">
      <a-input v-model="record.itemName" disabled/>
    </a-form-item>
    <a-form-item label="挂牌数量">
      <a-input v-model="record.listingQuantity" disabled/>
    </a-form-item>
    <a-form-item label="挂牌价格">
      <a-input v-model="record.listingPrice" disabled/>
    </a-form-item>
    <a-form-item label="对手方客户号">
      <a-input v-model="record.clientId" disabled/>
    </a-form-item>
    <a-form-item label="账户类型">
      <a-select v-model="accountType" disabled>
        <a-select-option value="1">账户1</a-select-option>
        <a-select-option value="2">账户2</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="交易账号">
      <a-select v-model="tradingAccount" disabled>
        <a-select-option value="1">交易账号1</a-select-option>
        <a-select-option value="2">交易账号2</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="最大可交易量">
      <a-input v-model="maxTradeVolume" disabled/>
    </a-form-item>
    <a-form-item label="最小交易量">
      <a-input v-model="minTradeVolume" disabled/>
    </a-form-item>
    <a-form-item label="摘牌数量">
      <a-input-number v-model="delistingQuantity" min="1"/>
      <a-form-item>
        <a-button type="primary" html-type="submit">确定</a-button>
        <a-button @click="cancel">取消</a-button>
      </a-form-item>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {ref, toRefs} from 'vue';

// const props = withDefaults(defineProps({
//   record: Object,
// }), {
//   record: {},
// });

const {record} = toRefs(props);
const accountType = ref('');
const tradingAccount = ref('');
const maxTradeVolume = ref('');
const minTradeVolume = ref('');
const delistingQuantity = ref(1);

const handleSubmit = () => {
  // 提交表单
};

const cancel = () => {
  emit('close');
};
</script>
