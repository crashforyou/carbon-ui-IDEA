<template>
  <a-button type="primary" @click="addGroup">添加</a-button>
  <a-button type="default" @click="refreshData">刷新</a-button>
  <a-table
      :columns="columns"
      :data-source="data"
      class="components-table-demo-nested"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a @click="editGroup">修改</a>
        <a>删除</a>
        <a @click="addCustomer">新增成员</a>
        <!-- 添加新增成员的链接，绑定 addCustomer 函数 -->
      </template>
    </template>
    <template #expandedRowRender>
      <a-table
          :columns="innerColumns"
          :data-source="innerData"
          :pagination="false"
      >
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'operation'">
            <a @click="editCustomer">修改</a>
            <a>删除</a>
          </template>
        </template>
      </a-table>
    </template>
  </a-table>

  <a-modal
      v-model:visible="groupModalVisible"
      title="新建群组"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleGroupOk"
      @cancel="handleGroupCancel"
  >
    <a-form :model="groupForm" :rules="groupRules">
      <a-form-item label="群组名称" name="name">
        <a-input placeholder="请输入群组名称"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal
      v-model:visible="customerModalVisible"
      title="修改客户名称"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleCustomerOk"
      @cancel="handleCustomerCancel"
  >
    <a-form :model="customerForm" :rules="customerRules">
      <a-form-item label="客户名称" name="name">
        <a-input placeholder="请输入客户名称"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal
      v-model:visible="addCustomerModalVisible"
      title="新增成员"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleAddCustomerOk"
      @cancel="handleAddCustomerCancel"
  >
    <a-form :model="addCustomerForm" :rules="addCustomerRules">
      <!-- 新增成员的表单数据和验证规则 -->
      <a-form-item label="客户名称" name="name">
        <a-input placeholder="请输入客户名称"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {DownOutlined} from "@ant-design/icons-vue";

const columns = [
  {title: "群组名称", dataIndex: "name", key: "name"},
  {title: "创建时间", dataIndex: "createdAt", key: "createdAt"},
  {title: "修改时间", dataIndex: "updatedAt", key: "updatedAt"},
  {title: "操作", key: "operation"},
];

interface DataItem {
  key: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `Group ${i + 1}`,
    createdAt: "2021-10-01 10:00:00",
    updatedAt: "2021-10-02 11:00:00",
  });
}

const innerColumns = [
  {title: "序号", dataIndex: "index", key: "index"},
  {title: "客户名称", dataIndex: "name", key: "name"},
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];

interface innerDataItem {
  key: number;
  index: number;
  name: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    index: i + 1,
    name: `Customer ${i + 1}`,
  });
}

const groupModalVisible = ref(false); // 控制新建群组的弹窗是否显示
const customerModalVisible = ref(false); // 控制修改客户名称的弹窗是否显示
const addCustomerModalVisible = ref(false); // 控制新增成员的弹窗是否显示
const groupForm = ref({name: ""}); // 新建群组的表单数据
const customerForm = ref({name: ""}); // 修改客户名称的表单数据
const addCustomerForm = ref({name: ""}); // 新增成员的表单数据
const groupRules = ref({
  name: [{required: true, message: "请输入群组名称"}],
}); // 新建群组的表单验证规则
const customerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
}); // 修改客户名称的表单验证规则
const addCustomerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
}); // 新增成员的表单验证规则
const currentGroup = ref(null); // 当前选中的群组
const currentCustomer = ref(null); // 当前选中的客户

const addGroup = () => {
  // 点击添加按钮，显示新建群组的弹窗
  groupModalVisible.value = true;
};

const editGroup = (record) => {
  // 点击修改按钮，显示修改群组名称的弹窗，并将当前选中的群组赋值给 currentGroup
  customerModalVisible.value = true;
  currentGroup.value = record;
  groupForm.value.name = record.name;
};

const editCustomer = (record) => {
  // 点击修改按钮，显示修改客户名称的弹窗，并将当前选中的客户赋值给 currentCustomer
  customerModalVisible.value = true;
  currentCustomer.value = record;
  customerForm.value.name = record.name;
};

const addCustomer = (record) => {
  // 点击新增成员按钮，显示新增成员的弹窗，并将当前选中的群组赋值给 currentGroup
  addCustomerModalVisible.value = true;
  currentGroup.value = record;
};

const handleGroupOk = () => {
  // 点击确定按钮，根据 currentGroup 的值判断是新建还是修改群组，并更新 data 数组
  if (currentGroup.value) {
    // 修改群组
    const index = data.findIndex((item) => item.key === currentGroup.value.key);
    if (index > -1) {
      data[index].name = groupForm.value.name;
      data[index].updatedAt = new Date().toLocaleString();
    }
  } else {
    // 新建群组
    const key = data.length;
    data.push({
      key,
      name: groupForm.value.name,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
  }
  groupModalVisible.value = false; // 关闭弹窗
  groupForm.value.name = ""; // 清空表单数据
  currentGroup.value = null; // 清空当前选中的群组
};

const handleGroupCancel = () => {
  // 点击取消按钮，关闭弹窗，清空表单数据和当前选中的群组
  groupModalVisible.value = false;
  groupForm.value.name = "";
  currentGroup.value = null;
};

const handleCustomerOk = () => {
  // 点击确定按钮，修改客户名称，并更新 innerData 数组
  const index = innerData.findIndex(
      (item) => item.key === currentCustomer.value.key
  );
  if (index > -1) {
    innerData[index].name = customerForm.value.name;
  }
  customerModalVisible.value = false; // 关闭弹窗
  customerForm.value.name = ""; // 清空表单数据
  currentCustomer.value = null; // 清空当前选中的客户
};

const handleCustomerCancel = () => {
  // 点击取消按钮，关闭弹窗，清空表单数据和当前选中的客户
  customerModalVisible.value = false;
  customerForm.value.name = "";
  currentCustomer.value = null;
};

const handleAddCustomerOk = () => {
  // 点击确定按钮，新增成员，并更新 innerData 数组
  const key = innerData.length; // 获取 innerData 数组的长度，作为新成员的 key
  const index = key + 1; // 获取新成员的序号，比 key 大 1
  innerData.push({
    // 向 innerData 数组中添加一个新的对象，包含 key, index, name 三个属性
    key,
    index,
    name: addCustomerForm.value.name, // 新成员的名称从 addCustomerForm 表单中获取
  });
  addCustomerModalVisible.value = false; // 关闭弹窗
  addCustomerForm.value.name = ""; // 清空表单数据
};
const handleAddCustomerCancel = () => {
  // 点击取消按钮，关闭弹窗，清空表单数据和当前选中的客户
  addCustomerModalVisible.value = false;
  addCustomerForm.value.name = "";
  currentCustomer.value = null;
};
const refreshData = () => {
  // 定义一个 refreshData 函数，用于更新数据
  // 根据实际需求，修改这个函数的逻辑和内容
  // 可以从后端接口获取最新的数据，或者使用本地的模拟数据

  // 清空 data 和 innerData 数组
  data.splice(0, data.length);
  innerData.splice(0, innerData.length);

  // 重新生成 data 数组
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: `Group ${i + 1}`,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
  }

  // 重新生成 innerData 数组
  for (let i = 0; i < 3; ++i) {
    innerData.push({
      key: i,
      index: i + 1,
      name: `Customer ${i + 1}`,
    });
  }
};
</script>
<style scoped>
a {
  margin: 0 2px; /* 这表示左右各有 10 像素的间距 */
}
</style>
