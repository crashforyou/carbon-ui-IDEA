<!-- ok -->
<template>
  <a-layout>
    <a-layout-sider width="200" class="menu">
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
    <a-layout class="content-out">
      <a-layout-content class="content-in">
        <router-view name="ListingView">
        </router-view>
        Content
      </a-layout-content>
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
.menu{
  overflow: auto;
}
.content-out{
  padding: 0px 5px 0px;
}
.content-in{
  background: #fff;
  padding: 24px;
  margin: 0;
  min-Height: 280px;
}
</style>
