<template>
  <a-form :form="form" :rules="rules" class="demo-ruleForm">
    <a-form-item name="clientId" label="客户号">
      <a-input v-model:value="form.clientId" placeholder="请输入客户号">
        <template #prefix>
          <a-icon type="user" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="operatorId" label="操作员">
      <a-input v-model:value="form.operatorId" placeholder="请输入操作员号">
        <template #prefix>
          <a-icon type="user" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="password" label="密码">
      <a-input-password
          type="password"
          v-model:value="form.password"
          placeholder="密码"
      >
        <template #prefix>
          <a-icon type="lock" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="identifyCode" label="验证码">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-input
              v-model:value="form.identifyCode"
              placeholder="请输入验证码"
              @keyup.enter.native="submitForm"
          />
        </a-col>
        <a-col :span="12">
          <div class="login-code" @click="refreshCode">
            <!--验证码组件-->
            <s-identify :identifyCode="identifyCode"></s-identify>
          </div>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <div class="login-btn">
        <a-button type="primary" @click="submitForm">登录</a-button>
      </div>
    </a-form-item>
    <p style="font-size: 12px; line-height: 30px; color: #eaeaea">
      Tips : 请输入账号密码登陆
    </p>
  </a-form>
</template>

<script setup>
import { ref } from "vue";
import SIdentify from "@/components/SIdentify.vue";
import { Form, Input, Button, Row, Col, Icon } from "ant-design-vue";

const form = ref({
  clientId: "",
  operatorId: "",
  password: "",
  identifyCode: "",
});

const rules = ref({
  clientId: [{ required: true, message: "请输入客户号", trigger: "blur" }],
  operatorId: [{ required: true, message: "请输入操作员号", trigger: "blur" }],

  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  identifyCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

const identifyCodes = "0123456789";

let identifyCode = ref("");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function makeCode(o, l) {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[randomNum(0, o.length)];
  }
}

function refreshCode() {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
}

function submitForm() {
  // 这里添加表单提交逻辑
  console.log(form.value);
}
</script>

<style scoped>
.demo-ruleForm {
  justify-content: center;
  align-items: center;
  height: 100vh; /* 这将使表单垂直居中 */
}
</style>
