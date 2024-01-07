<template>
  <div class="left">
        <a-form :model="groupOfferFormModel" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
          <a-form-item label="标的物代码">
            <a-input v-model="groupOfferFormModel.code"/>
          </a-form-item>
          <a-form-item label="标的物名称">
            <a-input v-model="groupOfferFormModel.name" disabled/>
          </a-form-item>
          <a-form-item label="账户类型">
            <a-select v-model="groupOfferFormModel.accountType">
              <!-- 添加选项 -->
            </a-select>
          </a-form-item>
          <a-form-item label="报价账号">
            <a-select v-model="groupOfferFormModel.offerAccount">
              <!-- 添加选项 -->
            </a-select>
          </a-form-item>
          <a-form-item label="买卖方向">
            <a-radio-group
                v-model:value="groupOfferFormModel.flow"
                @change="updateFlow"
            >
              <a-radio value="卖出">卖出</a-radio>
              <a-radio value="买入">买入</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item
              label="可用数量"
              v-show="groupOfferFormModel.flow === '卖出'"
          >
            <a-input
                v-model="groupOfferFormModel.available"
                suffix="吨"
            />
          </a-form-item>
          <a-form-item
              label="可用资金"
              v-show="groupOfferFormModel.flow === '买入'"
          >
            <a-input
                v-model="groupOfferFormModel.available"
                suffix="元"
            />
          </a-form-item>

          <a-form-item label="价格">
            <a-input v-model="groupOfferFormModel.price" suffix="元"/>
          </a-form-item>
          <a-form-item label="数量">
            <a-input v-model="groupOfferFormModel.Num" suffix="吨"/>
          </a-form-item>
          <a-form-item label="选择群组">
            <a-input v-model="groupOfferFormModel.directionGroup"/>
          </a-form-item>
          <div class="buttonGroup">
            <button @click="submitForm">提交</button>
            <button @click="clearForm">清空</button>
          </div>
        </a-form>
    </div>
    <div class="right">

    </div>
</template>
<script setup>
import {ref, nextTick} from "vue";
const groupOfferFormModel = ref({
  code: "",
  name: "",
  accountType: "",
  offerAccount: "",
  flow: "卖出",
  available: "",
  price: "",
  Num: "",
  directionGroup: "",
  // 其他表单项
});
const updateFlow = () => {
  nextTick(() => {
    console.log("用户点击了" + directionalOfferFormModel.value.flow);
  });
};
const submitForm = () => {
  // 提交表单
};

const clearForm = () => {
  // 清空表单
};
</script>

<style scoped>
.left {
  float: left;
  padding: 10px;
  height: 40.8vh;
  box-sizing: border-box;
  overflow: auto;
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-right: 2px solid #a8b7d3;
}
.right {
  float: right;
  width: 76%;
}
.buttonGroup{
  position: relative;
  left: 8vh;
  width: 25vh;
  display: flex;
  gap: 1vh;
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
  cursor: pointer;
}

</style>
