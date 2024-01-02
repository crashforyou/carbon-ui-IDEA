<template>
  <a-form :model="form" @submit="onSubmit">
    <a-form-item label="资金账号">
      <a-select v-model="form.account">
        <!-- 这里添加你的选项 -->
        <a-select-option value="account1">Account 1</a-select-option>
        <a-select-option value="account2">Account 2</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="划转类型">
      <a-radio-group v-model:value="form.transferType">
        <a-radio value="入金">入金</a-radio>
        <a-radio value="出金">出金</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="划转金额">
      <a-input v-model="form.transferAmount" prefix="￥"/>
    </a-form-item>

    <a-form-item label="支付密码">
      <a-input v-model="form.paymentPassword" type="password"/>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit"> 提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {reactive,ref} from "vue";
import {Form, Select, Radio, Input, Button, FormItem} from "ant-design-vue";

const form = reactive({
  account: "",
  transferType: "入金",
  transferAmount: "",
  paymentPassword: "",
});

function onSubmit() {
  console.log(form);
  // 在这里添加你的提交逻辑
}
</script>

