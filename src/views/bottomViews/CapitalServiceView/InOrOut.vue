<template>
  <a-form :model="form" @submit="onSubmit" class="left-aligned-form" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
    <a-form-item label="资金账号">
      <a-select v-model="form.account" >
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

    <div class="buttonGroup" >
      <button @click="submitForm">提交</button>
    </div>
<!--    <a-form-item style="text-align: center; width:100%;">-->
<!--      <a-button type="primary" html-type="submit" class="centered-button"> 提交</a-button>-->
<!--    </a-form-item>-->
  </a-form>
</template>

<style>
.left-aligned-form {
  margin-top: 15px;
  float: left;
  width: 50%; /* 根据需要设置宽度 */
}
.centered-button {
  text-align: center;
}
button {
  margin: 5px;
  padding: 8px 13px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover,button.active{
  color: white;
  background-color: #17294f;
}

.buttonGroup{
  position: relative;
  left:5vw;
  width: 40vw;
  /*display: flex;*/
  gap: 1vh;
  text-align: center;
}
</style>

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

