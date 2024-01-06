<template>
  <div class="main">
    <div class="butttonGroup">
      <button type="primary" @click="addGroup">添加</button>
      <button type="default" @click="refreshData">刷新</button>
    </div>
    <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{y: 230}"  
        size="small" 
        bordered
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
            size="small" 
            bordered
        >
          <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
              <a>删除</a>
            </template>
          </template>
        </a-table>
      </template>
    </a-table>
  </div>

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
      title="修改群组名称"
      ok-text="确定"
      cancel-text="取消"
      @ok="handleCustomerOk"
      @cancel="handleCustomerCancel"
  >
    <a-form :model="customerForm" :rules="customerRules">
      <a-form-item label="群组名称" name="name">
        <a-input placeholder="请输入新的群组名称"></a-input>
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
<script  setup>
import {ref} from "vue";
import {DownOutlined} from "@ant-design/icons-vue";

const columns = [
  {title: "群组名称", dataIndex: "name", key: "name",align:"center"},
  {title: "创建时间", dataIndex: "createdAt", key: "createdAt",align:"center"},
  {title: "修改时间", dataIndex: "updatedAt", key: "updatedAt",align:"center"},
  {title: "操作", key: "operation",align:"center"},
];

const data = [];
for (let i = 0; i < 100; ++i) {
  data.push({
    key: i,
    name: `Group ${i + 1}`,
    createdAt: "2021-10-01 10:00:00",
    updatedAt: "2021-10-02 11:00:00",
  });
}

const innerColumns = [
  {title: "序号", dataIndex: "index", key: "index",align:"center"},
  {title: "客户名称", dataIndex: "name", key: "name",align:"center"},
  {title: "操作", dataIndex: "operation",key: "operation",align:"center"},
];

const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    index: i + 1,
    name: `Customer ${i + 1}`,
  });
}

const groupModalVisible = ref(false);
const customerModalVisible = ref(false);
const addCustomerModalVisible = ref(false);
const groupForm = ref({name: ""});
const customerForm = ref({name: ""});
const addCustomerForm = ref({name: ""});
const groupRules = ref({
  name: [{required: true, message: "请输入群组名称"}],
});
const customerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
});
const addCustomerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
});
const currentGroup = ref(null);
const currentCustomer = ref(null);

const addGroup = () => {
  groupModalVisible.value = true;
};

const editGroup = (record) => {
  customerModalVisible.value = true;
  currentGroup.value = record;
  groupForm.value.name = record.name;
};


const addCustomer = (record) => {
  addCustomerModalVisible.value = true;
  currentGroup.value = record;
};

const handleGroupOk = () => {
  if (currentGroup.value) {
    const index = data.findIndex((item) => item.key === currentGroup.value.key);
    if (index > -1) {
      data[index].name = groupForm.value.name;
      data[index].updatedAt = new Date().toLocaleString();
    }
  } else {
    const key = data.length;
    data.push({
      key,
      name: groupForm.value.name,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
  }
  groupModalVisible.value = false;
  groupForm.value.name = "";
  currentGroup.value = null;
};

const handleGroupCancel = () => {
  groupModalVisible.value = false;
  groupForm.value.name = "";
  currentGroup.value = null;
};

const handleCustomerOk = () => {
  const index = innerData.findIndex(
      (item) => item.key === currentCustomer.value.key
  );
  if (index > -1) {
    innerData[index].name = customerForm.value.name;
  }
  customerModalVisible.value = false;
  customerForm.value.name = "";
  currentCustomer.value = null;
};

const handleCustomerCancel = () => {
  customerModalVisible.value = false;
  customerForm.value.name = "";
  currentCustomer.value = null;
};

const handleAddCustomerOk = () => {
  const key = innerData.length;
  const index = key + 1;
  innerData.push({
    key,
    index,
    name: addCustomerForm.value.name,
  });
  addCustomerModalVisible.value = false;
  addCustomerForm.value.name = "";
};
const handleAddCustomerCancel = () => {
  addCustomerModalVisible.value = false;
  addCustomerForm.value.name = "";
  currentCustomer.value = null;
};
const refreshData = () => {
  data.splice(0, data.length);
  innerData.splice(0, innerData.length);

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: `Group ${i + 1}`,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    });
  }

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
.main{
  border: 2px solid #a8b7d3;
}
.butttonGroup{
  border-bottom: 2px solid #a8b7d3;
}
button {
  margin: 5px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}
.selectButton{
  background: #eceff6;
  border-top: 2px solid #a8b7d3;
  border-bottom: 2px solid #a8b7d3;
}
</style>
