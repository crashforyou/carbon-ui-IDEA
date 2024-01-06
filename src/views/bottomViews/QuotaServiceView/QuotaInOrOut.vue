<template>
  <div class="main">
    <div class="spanTip">
      <span>转入/转出</span>
    </div>
    <div>
      <a-form @submit="handleSubmit" :label-col="{ span: 7 }" :wrapper-col="{ span: 10 }" class="form">
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