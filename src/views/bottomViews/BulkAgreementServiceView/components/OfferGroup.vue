<template>
  <div class="left">
        <a-form :model="groupOfferFormModel" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
          <a-form-item label="标的物代码">
            <a-input v-model:value="groupOfferFormModel.subjectMatterCode"/>
          </a-form-item>
          <a-form-item label="标的物名称">
            <a-input v-model:value="groupOfferFormModel.subjectMatterName" />
          </a-form-item>
          <a-form-item label="账户类型">
            <a-input v-model:value="groupOfferFormModel.accountType"/>
          </a-form-item>
          <a-form-item label="报价账号">
           <a-input v-model:value="groupOfferFormModel.account"/>
          </a-form-item>
          <a-form-item label="买卖方向">
            <a-radio-group
                v-model:value="groupOfferFormModel.flowType"
                @change="updateFlow"
            >
              <a-radio value="卖出">卖出</a-radio>
              <a-radio value="买入">买入</a-radio>
            </a-radio-group>
          </a-form-item>
<!--          <a-form-item-->
<!--              label="可用数量"-->
<!--              v-show="groupOfferFormModel.flowType === '卖出'"-->
<!--          >-->
<!--            <a-input-->
<!--                v-model="groupOfferFormModel.available"-->
<!--                suffix="吨"-->
<!--            />-->
<!--          </a-form-item>-->
<!--          <a-form-item-->
<!--              label="可用资金"-->
<!--              v-show="groupOfferFormModel.flowType === '买入'"-->
<!--          >-->
<!--            <a-input-->
<!--                v-model="groupOfferFormModel.available"-->
<!--                suffix="元"-->
<!--            />-->
<!--          </a-form-item>-->

          <a-form-item label="价格">
            <a-input v-model:value="groupOfferFormModel.price" suffix="元"/>
          </a-form-item>
          <a-form-item label="数量">
            <a-input v-model:value="groupOfferFormModel.amount" suffix="吨"/>
          </a-form-item>
          <a-form-item label="选择群组">
            <a-input v-model:value="groupOfferFormModel.groupId"/>
          </a-form-item>
          <div class="buttonGroup">
            <button @click="submitForm">提交</button>
            <button @click="clearForm">清空</button>
          </div>
        </a-form>
    </div>
    <div class="right">
      <GroupOfferQuery></GroupOfferQuery>
    </div>
</template>
<script setup>
import {ref, nextTick} from "vue";
import GroupOfferQuery from "@/views/bottomViews/BulkAgreementServiceView/components/GroupOfferQuery.vue";
import axios from "axios";
import AxiosInstance from "@/utils/axiosInstance";
const groupOfferFormModel = ref({
  time: "",
  subjectMatterCode: "",
  subjectMatterName: "",
  accountType: "",
  flowType: "卖出",
  account: "",
  price: "",
  amount: "",
  available: "",
  groupId: "",
  operatorCode: "",
  status: "",
  // 其他表单项
});
const updateFlow = () => {
  nextTick(() => {
    console.log("用户点击了" + groupOfferFormModel.value.flowType);
  });
};
const submitForm = () => {
  groupOfferFormModel.value.status = "未成交";
  groupOfferFormModel.value.operatorCode= localStorage.getItem("operatorCode");
  // 提交表单
  AxiosInstance.post(`/bulkAgreement/groupOffer`, groupOfferFormModel.value)
      .then((res) => {
        alert(res.data.message)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
};

const clearForm = () => {
  // 清空表单
  for (let key in groupOfferFormModel.value) {
    groupOfferFormModel.value[key] = "";
  }
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
