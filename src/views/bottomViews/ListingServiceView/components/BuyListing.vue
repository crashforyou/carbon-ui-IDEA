<template>
  <a-row>
    <a-col :span="8">
      <!-- 左分区：表单 -->
      <a-form @submit="handleSubmit">
        <a-form-item label="标的物代码">
          <a-input v-model="targetCode" @change="handleCodeChange"/>
        </a-form-item>
        <a-form-item label="标的物名称">
          <a-input v-model="targetName" disabled/>
        </a-form-item>
        <a-form-item label="账户类型">
          <a-select v-model="accountType">
            <a-select-option value="type1">类型1</a-select-option>
            <a-select-option value="type2">类型2</a-select-option>
            <!-- 更多选项 -->
          </a-select>
        </a-form-item>
        <a-form-item label="交易账号">
          <a-select v-model="tradeAccount">
            <a-select-option value="account1">账号1</a-select-option>
            <a-select-option value="account2">账号2</a-select-option>
            <!-- 更多选项 -->
          </a-select>
        </a-form-item>
        <a-form-item label="委托价格">
          <a-input-number v-model="price"/>
        </a-form-item>
        <a-form-item label="可用资金">
          <a-input v-model="availableFunds" disabled/>
        </a-form-item>
        <a-form-item label="可买数量">
          <a-input v-model="buyableQuantity" disabled/>
        </a-form-item>
        <a-form-item label="委托数量">
          <a-input-number v-model="quantity"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="8">
      <!-- 中分区：价格信息 -->
      <div>
        <!-- 卖出价格前五的排序 -->
        <a-list
            :dataSource="sellPrices"
            renderItem="item => <a-list-item>{{ item }}</a-list-item>"
        />
        <!-- 分割线 -->
        <hr/>
        <!-- 最新价格和涨幅 -->
        <p>最新价格：{{ latestPrice }}</p>
        <p>涨幅：{{ increase }}</p>
        <!-- 分割线 -->
        <hr/>
        <!-- 买入价格前五排序 -->
        <a-list
            :dataSource="buyPrices"
            renderItem="item => <a-list-item>{{ item }}</a-list-item>"
        />
        <!-- 分割线 -->
        <hr/>
        <!-- 涨停价格和跌停价格 -->
        <p>涨停价格：{{ upperPrice }}</p>
        <p>跌停价格：{{ lowerPrice }}</p>
      </div>
    </a-col>
    <a-col :span="8">
      <!-- 右分区：表格 -->
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="持仓">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane key="2" tab="委托" force-render
        >Content of Tab Pane 2
        </a-tab-pane
        >
        <a-tab-pane key="3" tab="资金">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="4" tab="成交">Content of Tab Pane 1</a-tab-pane>
      </a-tabs>
      <a-table :columns="columns" :data-source="data"/>
    </a-col>
  </a-row>
</template>

<script setup>
import {ref} from "vue";

const activeKey = ref("1");
const targetCode = ref("");
const targetName = ref("");
const accountType = ref(null);
const tradeAccount = ref(null);
const price = ref(0);
const availableFunds = ref(0);
const buyableQuantity = ref(0);
const quantity = ref(0);
const sellPrices = ref([]);
const latestPrice = ref(0);
const increase = ref(0);
const buyPrices = ref([]);
const upperPrice = ref(0);
const lowerPrice = ref(0);
const data = ref([]);
const columns = [
  // Define your columns here
];

const handleSubmit = () => {
  // Handle the submit event
};

const handleCodeChange = () => {
  // Handle the change event of the target code input
  // You may need to fetch the target name, available funds, buyable quantity, etc.
};
</script>

