<template>
  <a-layout class="main">
    <a-layout-sider width="200" theme="light" class="menu">
      <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined/>
              挂牌交易
            </span>
          </template>
            <a-menu-item @click="updateContent(1)" key="1">买入挂牌</a-menu-item>
            <a-menu-item @click="updateContent(2)" key="2">卖出挂牌</a-menu-item>
            <a-menu-item @click="updateContent(3)" key="3">撤销挂牌</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <laptop-outlined/>
              查询
            </span>
          </template>
          <a-menu-item @click="updateContent(4)" key="4">资金持仓</a-menu-item>
          <a-menu-item @click="updateContent(5)" key="5">当日委托</a-menu-item>
          <a-menu-item @click="updateContent(6)" key="6">当日成交</a-menu-item>
          <a-menu-item @click="updateContent(7)" key="7">历史委托</a-menu-item>
          <a-menu-item @click="updateContent(8)" key="8">历史成交</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout >
      <a-layout-content >
        <ListingBuyService v-if="selectedOption === 1"></ListingBuyService>
        <ListingSellService v-if="selectedOption === 2"></ListingSellService>
        <DeListingService v-if="selectedOption === 3"></DeListingService>
        <div v-if="selectedOption === 4">
          <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>资金持仓</span>
          </div>
          <CapitalAccount ></CapitalAccount>
        </div>
        <div v-if="selectedOption === 5">
          <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>当日委托</span>
          </div>
          <ListingDayCommission ></ListingDayCommission>
        </div>
        <div v-if="selectedOption === 6">
          <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>当日成交</span>
          </div>
          <ListingDayBargain ></ListingDayBargain>
        </div>
        <div v-if=" selectedOption === 7">
          <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>历史委托</span>
          </div>
          <ListingHistoryCommission ></ListingHistoryCommission>
        </div>
        <div v-if="selectedOption === 8">
          <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>历史成交</span>
          </div>
          <ListingHistoryBargain ></ListingHistoryBargain>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>

import ListingSellService from "@/views/bottomViews/ListingServiceView/components/ListingSellService"
import ListingBuyService from "@/views/bottomViews/ListingServiceView/components/ListingBuyService"
import DeListingService from "@/views/bottomViews/ListingServiceView/components/DeListingService"
import CapitalAccount from "@/views/bottomViews/CapitalServiceView/components/CapitalAccount.vue";
import ListingDayCommission from "@/views/bottomViews/DayQueryServiceView/components/ListingDayCommission";
import ListingDayBargain from "@/views/bottomViews/DayQueryServiceView/components/ListingDayBargain";
import ListingHistoryCommission from "@/views/bottomViews/HistoryQueryServiceView/components/ListingDayCommission"
import ListingHistoryBargain from "@/views/bottomViews/HistoryQueryServiceView/components/ListingDayBargain"

import {reactive, ref} from "vue";
  import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  } from "@ant-design/icons-vue";

// 使用 ref 创建响应式数据 selectedOption，并初始化为 1
const selectedOption = ref("1");

// 更新右侧内容的方法
const updateContent = (option) => {
  selectedOption.value = option;
  // 在这里可以进行其他更新或调用 API 来获取数据
};

  const selectedKeys1 = ref(["2"]);
  const selectedKeys2 = ref(["1"]);
  const openKeys = ref(["sub1"]);

const targetCode = ref(null);
const dateRange = ref([]);
const direction = ref(null);
const data = [];
const pagination = reactive({current: 1, pageSize: 10});



const columns = [
  {title: "委托日期", dataIndex: "orderDate", width: 100},
  {title: "委托时间", dataIndex: "orderTime", width: 100},
  {title: "操作员代码", dataIndex: "operatorCode", width: 100},
  {title: "标的物代码", dataIndex: "code", width: 120},
  {title: "标的物名称", dataIndex: "name", width: 120},
  {title: "委托数量", dataIndex: "Amount", width: 100},
  {title: "委托价格", dataIndex: "price", width: 100},
  {title: "委托状态", dataIndex: "status", width: 100},
  {title: "成交金额", dataIndex: "finallyBalance", width: 100},
  {title:"对方客户号",dataIndex: "directionOrGroupId",width: 100},
  {title: "委托编号", dataIndex: "orderNumber", width: 100},
];

for (let i = 0; i < 100; i++) {
  data.push({
    key:i,
    orderDate: `委托日期${i + 1}`,
    orderTime: `委托时间${i + 1}`,
    operatorCode: `操作员代码${i + 1}`,
    code: `标的物代码${i + 1}`,
    name: `标的物名称${i + 1}`,
    Amount:`委托数量${i+1}`,
    price:`委托价格${i+1}`,
    status: `委托状态${i + 1}`,
    finallyBalance: `成交金额${i + 1}`,
    directionOrGroupId:`对方客户号${i + 1}`,
    orderNumber: `委托编号${i + 1}`,
  });
}
</script>

<style scoped>
.main{
  border: 2px solid #a8b7d3;
}
.menu{
  overflow: auto;
  border-right: 2px solid #a8b7d3;
}
.content-out{
  padding: 0px 0px 0px 5px;
}
.content-in{
  background: #fff;
  padding: 24px;
}
</style>
