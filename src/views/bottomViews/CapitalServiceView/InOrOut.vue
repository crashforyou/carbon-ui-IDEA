<template>
  <div class="main">
    <div class="spanTip">
      <span>入金/出金</span>
    </div>
    <div>
      <a-form @submit="handleSubmit" :label-col="{ span: 7 }" :wrapper-col="{ span: 10 }" class="form">
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
      </a-form>
    </div>
    <div class="buttonGroup">
      <button  html-type="submit">提交</button>
      <button @click="handleReset" class="second">清空</button>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {Form, Select, Radio, Input, Button, FormItem, InputNumber} from "ant-design-vue";
import axios from "axios";

const form = reactive({
  account: "",
  transferType: "入金",
  transferAmount: "",
  paymentPassword: "",
});

// const handleSubmit = async () => {
//   try {
//     // 处理提交操作
//     const response = await axios.post("/api/submit", QuotaForm);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

const handleReset = () => {
  // 在这里处理清空操作
};
</script>

<style scoped>
.main{
  background: #eceff6;
  border: 2px solid #a8b7d3;
}
.spanTip{
  border-bottom: 2px solid #a8b7d3;
  padding: 1.5vh;
}
.formdiv{
  background: #6f3030;
}
.form{
  position: relative;
  top: 1.5vh;
  width: 50%;
}
.second{
  position: relative;
  left: 4vh;
}
.buttonGroup{
  position: relative; 
  left: 25vh; 
}
button {
  margin: 5px;
  padding: 6px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}
</style>
