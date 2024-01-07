<template>
  <div class="mainer">
    <div>
      <a-form @submit="handleSubmit" :label-col="{ span: 7 }" :wrapper-col="{ span: 10 }" class="form">
        <a-form-item label="资金账号">
          <div class="custom-input">
            <label>资金账户（0000004632）</label>
          </div>
        </a-form-item>


        <a-form-item label="绑定银行">
          <a-input v-model="form.bank" />
        </a-form-item>

        <a-form-item label="银行卡号">
          <a-input v-model="form.accountId" />
        </a-form-item>

        <a-form-item label="银行预留手机号">
          <a-input v-model="form.phoneNumber" />
        </a-form-item>

        <a-form-item label="支付密码">
          <a-input v-model="form.paymentPassword" type="password"/>
        </a-form-item>

        <a-form-item label="确认密码">
          <a-input v-model="form.confirmPassword" type="password"/>
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
  bank: "",
  accountId: "",
  phoneNumber:"",
  paymentPassword: "",
  confirmPassword:""
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
.mainer{
  background: #eceff6;
  height: 86%;
  overflow-y: auto;
  overflow-x: hidden;
}
.spanTip{
  border-bottom: 2px solid #a8b7d3;
  padding: 1.5vh;
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
.custom-input {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 6px 11px;
  font-size: 14px;
  line-height: 1.5715;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  transition: all 0.3s;
}

.custom-input label {
  display: inline-block;
  margin-bottom: 6px;
}

.custom-input:focus-within {
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-color: #1890ff;
}
</style>
