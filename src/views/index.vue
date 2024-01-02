<template>
  <a-layout style="min-height: 100vh">
    <!--侧边栏-->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined/>
          <span>挂牌交易</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined/>
              <span>大宗协议</span>
            </span>
          </template>
          <a-menu-item key="3">大宗协议报价</a-menu-item>
          <a-menu-item key="4">大宗协议询价</a-menu-item>
          <a-menu-item key="5">群组管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined/>
              <span>单向竞价</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <team-outlined/>
              <span>资金管理</span>
            </span>
          </template>
          <a-menu-item key="6">入金/出金</a-menu-item>
          <a-menu-item key="8">资金查询</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <team-outlined/>
              <span>配额管理</span>
            </span>
          </template>
          <a-menu-item key="6">转入/转出</a-menu-item>
          <a-menu-item key="8">配额查询</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <template #title>
            <span>
              <team-outlined/>
              <span>当日查询</span>
            </span>
          </template>
          <a-menu-item key="6">当日委托查询</a-menu-item>
          <a-menu-item key="8">当日成交查询</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub6">
          <template #title>
            <span>
              <team-outlined/>
              <span>历史查询</span>
            </span>
          </template>
          <a-menu-item key="6">挂牌交易查询</a-menu-item>
          <a-menu-item key="8">大宗协议查询</a-menu-item>
          <a-menu-item key="6">单项竞价查询</a-menu-item>
          <a-menu-item key="8">资金查询</a-menu-item>
          <a-menu-item key="6">配额查询</a-menu-item>
          <a-menu-item key="8">收费信息查询</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub7">
          <template #title>
            <span>
              <team-outlined/>
              <span>日终报表查询</span>
            </span>
          </template>
          <a-menu-item key="6">日终报表查询</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub8">
          <template #title>
            <span>
              <team-outlined/>
              <span>用户信息管理</span>
            </span>
          </template>
          <a-menu-item key="6">日终报表查询</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0"/>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>操作员号</a-breadcrumb-item>
          <a-breadcrumb-item>客户号</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '5px', background: '#fff', minHeight: '95%' }">
          图表区
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
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import {ref} from "vue";
import {Layout, Menu} from "ant-design-vue";

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
export default {
  components: {
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content,
    "a-layout-sider": Layout.Sider,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-sub-menu": Menu.SubMenu,
    "pie-chart-outlined": PieChartOutlined,
    "desktop-outlined": DesktopOutlined,
    "user-outlined": UserOutlined,
    "team-outlined": TeamOutlined,
    "file-outlined": FileOutlined,
  },
  setup() {
    return {
      collapsed,
      selectedKeys,
    };
  },
};
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
</style>
