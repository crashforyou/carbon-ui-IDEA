<template>
  <a-layout>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined/>
                挂牌交易
              </span>
            </template>
            <router-link to="/listingServiceView">
              <a-menu-item key="1">买入挂牌</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="2">卖出挂牌</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="3">撤销挂牌</a-menu-item>
            </router-link>
          </a-sub-menu>

          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined/>
                查询
              </span>
            </template>
            <router-link to="/listingServiceView">
              <a-menu-item key="4">资金持仓</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="5">当日委托</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="6">当日成交</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="7">历史成交</a-menu-item>
            </router-link>
            <router-link to="/listingServiceView">
              <a-menu-item key="8">历史委托</a-menu-item>
            </router-link>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 5px 5px 5px">
        <a-layout-content
            :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view name="ListingView">

          </router-view>
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import {ref} from "vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";

const selectedKeys1 = ref(["2"]);
const selectedKeys2 = ref(["1"]);
const openKeys = ref(["sub1"]);
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
