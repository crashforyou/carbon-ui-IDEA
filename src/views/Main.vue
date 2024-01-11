<template>
  <div class="AppContainer">
    <a-layout>
    <!--侧边栏-->
    <a-layout-sider v-model:collapsed="collapsed"  class="AppMenu">
      <div class="logo">
        <Avatar></Avatar>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="sub0">
          <template #title>
            <span>
              <area-chart-outlined/>
              <span>挂牌交易</span>
            </span>
          </template>
          <router-link to="/listingService/buy">
            <a-menu-item key="sub0_1">挂牌交易</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <interaction-outlined/>
              <span>大宗协议</span>
            </span>
          </template>
          <router-link to="/bulkAgreement/Offer">
            <a-menu-item key="sub1_1">大宗协议报价</a-menu-item>
          </router-link>
          <router-link to="/bulkAgreement/Query">
            <a-menu-item key="sub1_2">定向询价</a-menu-item>
          </router-link>
          <router-link to="/bulkAgreement/QueryGroup">
            <a-menu-item ker="sub1-3">群组询价</a-menu-item>
          </router-link>
          <router-link to="/bulkAgreement/Group">
            <a-menu-item key="sub1_4">群组管理</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <credit-card-outlined/>
              <span>单向竞价</span>
            </span>
          </template>
          <router-link to="/Auction/trade">
            <a-menu-item key="sub2_1">单向竞价</a-menu-item>
          </router-link>
          <router-link to="/Auction/request">
            <a-menu-item key="sub2_2">单向竞价申请</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <transaction-outlined/>
              <span>资金管理</span>
            </span>
          </template>
          <router-link to="/capital/InOrOut">
            <a-menu-item key="sub3_1">入金/出金</a-menu-item>
          </router-link>
          <router-link to="/capital/Query">
            <a-menu-item key="sub3_2">资金查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <pound-outlined/>
              <span>配额管理</span>
            </span>
          </template>
          <router-link to="/quota/InOrOut">
            <a-menu-item key="sub4_1">转入/转出</a-menu-item>
          </router-link>
          <router-link to="/quota/Query">
            <a-menu-item key="sub4_2">配额查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub5">
          <template #title>
            <span>
              <profile-outlined/>
              <span>当日查询</span>
            </span>
          </template>
          <router-link to="/dayQuery/CommissionSelect">
            <a-menu-item key="sub5_1">当日委托查询</a-menu-item>
          </router-link>
          <router-link to="/dayQuery/BargainSelect">
            <a-menu-item key="sub5_2">当日成交查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub6">
          <template #title>
            <span>
              <switcher-outlined/>
              <span>历史查询</span>
            </span>
          </template>
          <router-link to="/historyQuery/ListingSelect">
            <a-menu-item key="sub6_1">挂牌交易查询</a-menu-item>
          </router-link>
          <router-link to="/historyQuery/BulkAgreementSelect">
            <a-menu-item key="sub6_2">大宗协议查询</a-menu-item>
          </router-link>
          <router-link to="/historyQuery/ActionSelect">
            <a-menu-item key="sub6_3">单向竞价查询</a-menu-item>
          </router-link>
          <router-link to="/capital/Query">
            <a-menu-item key="sub6_4">资金查询</a-menu-item>
          </router-link>
          <router-link to="/quota/Query">
            <a-menu-item key="sub6_5">配额查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub7">
          <template #title>
            <span>
              <schedule-outlined/>
              <span>日终报表查询</span>
            </span>
          </template>
          <router-link to="/report">
            <a-menu-item key="sub7_1">日终报表查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub8">
          <template #title>
            <span>
              <user-outlined/>
              <span>账户管理</span>
            </span>
          </template>
          <router-link to="/Account/CapitalAccountManage">
            <a-menu-item key="sub8_1">资金账户管理</a-menu-item>
          </router-link>
          <router-link to="/Account/QuotaAccountManage">
            <a-menu-item key="sub8_2">配额账户管理</a-menu-item>
          </router-link>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout-content style="margin: 0 2px">
      <div class="content">
        <!-- <a-tabs v-model:activeKey="activeKey" class="topView">
          <a-tab-pane key="1" tab="买入摘牌"
          >Content of Tab Pane 1
          </a-tab-pane
          >
          <a-tab-pane key="2" tab="卖出摘牌" force-render
          >Content of Tab Pane 2
          </a-tab-pane
          >
          <a-tab-pane key="3" tab="市场">Content of Tab Pane 3</a-tab-pane>
          <a-tab-pane key="4" tab="分时">Content of Tab Pane 3</a-tab-pane>

          <a-tab-pane key="5" tab="K线">Content of Tab Pane 3</a-tab-pane>

          <a-tab-pane key="6" tab="分笔">Content of Tab Pane 3</a-tab-pane>
        </a-tabs> -->
        <TopView></TopView>
        <router-view name="buttomView" class="bottomView"></router-view>
      </div>
    </a-layout-content>
    </a-layout>
  </div>
  <Announce></Announce>
</template>

<script setup>
import {
  UserOutlined,
  AreaChartOutlined,
  InteractionOutlined,
  TransactionOutlined,
  CreditCardOutlined,
  PoundOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  SwitcherOutlined,
} from "@ant-design/icons-vue";
import Avatar from "@/views/Avatar.vue";
import Announce from "@/views/Announce.vue";
import TopView from "@/views/topViews/TopView.vue";
import {Tabs, TabPane} from "ant-design-vue";
import {ref} from "vue";

const activeKey = ref("1");
const collapsed = ref(false);
const selectedKeys = ref(["1"]);
</script>

<style>
.AppContainer{
  width: 100%;
  height: 94vh;
}
.logo {
  height: 16vh;
  width: 84%;
  margin: 16px;
  background: #001c3a;
}
.AppMenu{
  overflow: auto;
  height: 94vh;
}
.content{}
.topView{
  background: #d69c9c;
  height: 47vh;
}
.bottomView{
  height: 47vh;
}

::-webkit-scrollbar-track {
   background: rgba(0, 0, 0, 0.1); 
   border-radius: 0; 
   } 
::-webkit-scrollbar {
   -webkit-appearance: none; 
   width: 6px; 
   height: 6px; 
  } 
::-webkit-scrollbar-thumb { 
  cursor: pointer; 
  border-radius: 5px; 
  background: rgba(0, 0, 0, 0.15); 
  transition: color 0.2s ease; 
  }
</style>
