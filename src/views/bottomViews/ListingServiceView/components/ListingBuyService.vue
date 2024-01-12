<template>
  <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
    <span>买入挂牌</span>
  </div>
  <div class="left">
    <a-form :model="listingPost" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }" >
      <a-form-item label="标的物代码">
        <a-input v-model:value="listingPost.subjectMatterCode"/>
      </a-form-item>
      <a-form-item label="标的物名称">
        <a-input v-model:value="listingPost.subjectMatterName"/>
      </a-form-item>
      <a-form-item label="账户类型">
        <a-input v-model:value="listingPost.accountType">
          <!-- 添加选项 -->
        </a-input>
      </a-form-item>
      <a-form-item label="库存账号">
        <a-input v-model:value="listingPost.quotaAccount">
          <!-- 添加选项 -->
        </a-input>
      </a-form-item>
<!--      <a-form-item-->
<!--          label="可用资金"-->
<!--          v-show="listingPost.flowType === '买入'"-->
<!--      >-->
<!--        <a-input-->
<!--            v-model:value="listingPost.available"-->
<!--            suffix="元"-->
<!--        />-->
<!--      </a-form-item>-->

      <a-form-item label="委托价格">
        <a-input v-model:value="listingPost.price" suffix="元"/>
      </a-form-item>
      <a-form-item label="委托数量">
        <a-input v-model:value="listingPost.amount" suffix="吨"/>
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
import AxiosInstance from "@/utils/axiosInstance";

const listingPost = ref({
  subjectMatterCode: "",
  subjectMatterName: "",
  accountType: "",
  QuotaAccount: "",
  flowType: "买入",
  listingType: "",
  price: "",
  amount: "",
  directionClient: "",
  operatorCode:"",
  status:"",
  // 其他表单项
});

const updateFlow = () => {
  nextTick(() => {
    console.log("用户点击了" + listingPost.value.flowType);
  });
};
const submitForm = () => {
  listingPost.value.status="未完成";
  listingPost.value.operatorCode=localStorage.getItem("operatorCode");
  // 提交表单
  AxiosInstance
      .post(`/listing/purchaser`,
          //表单数据
          listingPost.value
      )
      .then((res)=>{
        console.log(res);
        alert(res.data.message)
      })
      .catch((err)=>{
        console.log(err);
      })
};

const clearForm = () => {
  // 清空表单
  for (let key in listingPost.value) {
    listingPost.value[key] = "";
  }
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
