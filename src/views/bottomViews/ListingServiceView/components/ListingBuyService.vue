<template>
  <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
    <span>买入挂牌</span>
  </div>
  <div class="left">
    <a-form :model="directionalOfferFormModel" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }" >
      <a-form-item label="标的物代码">
        <a-input v-model="directionalOfferFormModel.code"/>
      </a-form-item>
      <a-form-item label="标的物名称">
        <a-input v-model="directionalOfferFormModel.name" disabled/>
      </a-form-item>
      <a-form-item label="配额账户">
        <a-select v-model="directionalOfferFormModel.accountType">
          <!-- 添加选项 -->
        </a-select>
      </a-form-item>
      <a-form-item label="资金账户">
        <a-select v-model="directionalOfferFormModel.offerAccount">
          <!-- 添加选项 -->
        </a-select>
      </a-form-item>
      <a-form-item
          label="可用数量"
          v-show="directionalOfferFormModel.flow === '卖出'"
      >
        <a-input
            v-model="directionalOfferFormModel.available"
            suffix="吨"
        />
      </a-form-item>
      <a-form-item
          label="可用资金"
          v-show="directionalOfferFormModel.flow === '买入'"
      >
        <a-input
            v-model="directionalOfferFormModel.available"
            suffix="元"
        />
      </a-form-item>

      <a-form-item label="委托价格">
        <a-input v-model="directionalOfferFormModel.price" suffix="元"/>
      </a-form-item>
      <a-form-item label="委托数量">
        <a-input v-model="directionalOfferFormModel.Num" suffix="吨"/>
      </a-form-item>
      <div class="buttonGroup">
        <button @click="submitForm">提交</button>
        <button @click="clearForm">清空</button>
      </div>
    </a-form>
  </div>
  <div class="right">
    <BuyListing></BuyListing>
  </div>
</template>
<script setup>
import {ref, nextTick} from "vue";
import BuyListing from "./BuyListing.vue"

const directionalOfferFormModel = ref({
  code: "",
  name: "",
  accountType: "",
  offerAccount: "",
  flow: "卖出",
  available: "",
  price: "",
  Num: "",
  directionClient: "",
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
.main{
  border: 2px solid #a8b7d3;
}
.left {
  float: left;
  height: 40.8vh;
  box-sizing: border-box;
  width: 17vw;
  overflow: auto;
  background: #eceff6;
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
