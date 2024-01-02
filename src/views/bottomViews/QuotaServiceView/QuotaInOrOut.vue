<template>
  <div>
    <a-form @submit="handleSubmit">
      <a-form-item label="配额登记账户">
        <a-select v-model="QuotaForm.account">
          <!-- 添加账户选项 -->
        </a-select>
      </a-form-item>
      <a-form-item label="标的物代码">
        <a-input v-model="QuotaForm.code"/>
      </a-form-item>
      <a-form-item label="标的物名称">
        <a-input v-model="QuotaForm.name"/>
      </a-form-item>
      <a-form-item label="划拨方向">
        <a-radio-group v-model:value="QuotaForm.direction">
          <a-radio value="in">转入</a-radio>
          <a-radio value="out">转出</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="划拨数量">
        <a-input-number v-model="QuotaForm.quantity"/>
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button @click="handleReset">清空</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {Form, Select, Radio, Input, Button, FormItem, InputNumber} from "ant-design-vue";
import axios from "axios";

const QuotaForm = reactive({
  account: "",
  code: "",
  name: "",
  direction: "转入",
  quantity: "",
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
  QuotaForm.account = "";
  QuotaForm.code = "";
  QuotaForm.name = "";
  QuotaForm.direction = "转入";
  QuotaForm.quantity = "";
};
</script>

