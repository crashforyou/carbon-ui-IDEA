<template>
  <a-layout style="min-height: 100vh">
    <!--侧边栏-->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <router-link to="/">
          <a-menu-item key="1">
            <area-chart-outlined />
            <span>挂牌交易</span>
          </a-menu-item>
        </router-link>

        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <interaction-outlined />
              <span>大宗协议</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub1_1">大宗协议报价</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub1_2">大宗协议询价</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub1_3">群组管理</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <credit-card-outlined />
              <span>单向竞价</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub2_1">Team 1</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub2_2">Team 2</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <transaction-outlined />
              <span>资金管理</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub3_1">入金/出金</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub3_2">资金查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <pound-outlined />
              <span>配额管理</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub4_1">转入/转出</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub4_2">配额查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub5">
          <template #title>
            <span>
              <profile-outlined />
              <span>当日查询</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub5_1">当日委托查询</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub5_2">当日成交查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub6">
          <template #title>
            <span>
              <switcher-outlined />
              <span>历史查询</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub6_1">挂牌交易查询</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub6_2">大宗协议查询</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub6_3">单项竞价查询</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub6_4">资金查询</a-menu-item>
          </router-link>
          <router-link to="/">
            <a-menu-item key="sub6_5">配额查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub7">
          <template #title>
            <span>
              <schedule-outlined />
              <span>日终报表查询</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub7_1">日终报表查询</a-menu-item>
          </router-link>
        </a-sub-menu>

        <a-sub-menu key="sub8">
          <template #title>
            <span>
              <user-outlined />
              <span>用户信息管理</span>
            </span>
          </template>
          <router-link to="/">
            <a-menu-item key="sub8_1">用户信息管理</a-menu-item>
          </router-link>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0"> </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div class="content">
          <router-view name="topView" class="topView">
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
          </router-view>
          <router-view name="bottomView" class="bottomView">
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            ...............................000000000000000000000000000000000000000000000000000000000000000000............................................................................................
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  AreaChartOutlined,
  InteractionOutlined,
  TransactionOutlined,
  CreditCardOutlined,
  PoundOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  SwitcherOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.topView {
  flex-grow: 1;
  overflow: auto;
}

.bottomView {
  flex-grow: 1;
  overflow: auto;
}
</style>
