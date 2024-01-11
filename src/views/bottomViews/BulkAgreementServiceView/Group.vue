 <template>
  <div class="main">
    <div class="butttonGroup">
      <button type="primary" @click="addGroup">添加</button>
      <button type="default" @click="refreshData">刷新</button>
    </div>
    <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{y: 232}"  
        size="small" 
        bordered
    >
      <template #bodyCell="{ column ,record}">
        <template v-if="column.key === 'operation'">
          <a @click="editGroup(record)">修改</a>
          <a>删除</a>
          <a @click="addCustomer(record)">新增成员</a>
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
import {onMounted, ref} from "vue";
import {DownOutlined} from "@ant-design/icons-vue";
import axios from "axios";

const columns = [
  {title: "群组Id", dataIndex: "groupId", key: "groupId",align:"center"},
  {title: "群组名称", dataIndex: "name", key: "name",align:"center"},
  {title: "创建时间", dataIndex: "createdAt", key: "createdAt",align:"center"},
  {title: "修改时间", dataIndex: "updatedAt", key: "updatedAt",align:"center"},
  {title: "操作", key: "operation",align:"center"},
];

const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({
    key: i,
    groupId: i + 1,
    name: `group+${i + 1}`,
    createdAt: "2021-06-01 12:00:00",
    updatedAt: "2021-09-03 12:00:00",
  });
}


const innerColumns = [
  {title: "序号", dataIndex: "index", key: "index",align:"center"},
  {title: "客户ID", dataIndex: "id", key: "id",align:"center"},
  {title: "客户名称", dataIndex: "name", key: "name",align:"center"},
  {title: "操作", dataIndex: "operation",key: "operation",align:"center"},
];

const innerData = ref([]);

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
const currentGroup = ref({
  groupId:"",
  name:"",
  createdAt:"",
  updatedAt:"",
});
const currentCustomer = ref(null);

const addGroup = () => {
  groupModalVisible.value = true;
};

const editGroup = (record) => {
  customerModalVisible.value = true;
  currentGroup.value = record;
  alert(currentGroup.value.groupId+"aaaa");

  groupForm.value.name = record.name;
};


const addCustomer = (record) => {
  addCustomerModalVisible.value = true;
  currentGroup.value = record;
};

const handleGroupOk = () => {//新建群组
  let groupName=groupForm.value.name;
  let clientId=localStorage.getItem("clientId");
  axios
      .post(`http://localhost:8080/bulkAgreement/createGroup/${groupName}/${clientId}`)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  refreshData();
  groupModalVisible.value = false;
  groupForm.value.name = "";
  currentGroup.value = null;
};

const handleGroupCancel = () => {//取消新建群组
  groupModalVisible.value = false;
  groupForm.value.name = "";
  currentGroup.value = null;
};

const handleCustomerOk = () => {//修改群组名称

  let groupId=currentGroup.value.groupId;
  let newGroupName=customerForm.value.name
  let clientId=localStorage.getItem("clientId")
  axios
      .post(`http://localhost:8800/bulkAgreement/modifyGroup/${groupId}/${newGroupName}/${clientId}`)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  refreshData();
  customerModalVisible.value = false;
  customerForm.value.name = "";
  currentCustomer.value = null;
};

const handleCustomerCancel = () => {//取消修改群组名称
  customerModalVisible.value = false;
  customerForm.value.name = "";
  currentCustomer.value = null;
};

const handleAddCustomerOk = () => {//添加群组成员
  // const key = innerData.length;
  // const index = key + 1;
  let groupId=currentGroup.value.groupId;
  let memberName=addCustomerForm.value.name;
  let clientId=localStorage.getItem("clientId");
  axios
      .post(`http://localhost:8080/bulkAgreement/addMember/${groupId}/${memberName}/${clientId}`)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  refreshData();
  addCustomerModalVisible.value = false;
  addCustomerForm.value.name = "";
};
const handleAddCustomerCancel = () => {//取消添加群组成员
  addCustomerModalVisible.value = false;
  addCustomerForm.value.name = "";
  currentCustomer.value = null;
};
const refreshData = () => {//刷新
  //清除数据
  data.value.splice(0, data.value.length);
  innerData.value.splice(0, innerData.value.length);

  let clientId=localStorage.getItem("clientId");
  axios
      .get(`http://localhost:8800/bulkAgreement/selectGroup/${clientId}`)
      .then((res)=>{
        data.value=res.data;
        // 遍历 data.value
        for(let i=0;i<data.value.length;i++){
          let groupId = data.value[i].groupId;
          // 根据 groupId 查询 innerData
          axios
              .get(`http://localhost:8800/bulkAgreement/selectClient/${groupId}`)
              .then((res)=>{
                // 遍历 res.data
                // 遍历 res.data
                // 遍历 res.data
                for (let i = 0; i < res.data.length; ++i) {
                  let item = res.data[i];

                  // 创建一个新的对象，只包含 key, index 和 name 属性
                  let newItem = {
                    key: i,
                    index: i + 1,
                    id:item.id,
                    name: item.name,
                  };

                  // 将新的对象添加到 innerData.value 中
                  innerData.value.push(newItem);
                }
                })
              .catch((err)=>{
                console.log(err);
              })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
};

onMounted(()=>{
  let clientId=localStorage.getItem("clientId");
  axios
      .get(`http://localhost:8800/bulkAgreement/selectGroup/${clientId}`)
      .then((res)=>{
        data.value=res.data;
        // 遍历 data.value
        for(let i=0;i<data.value.length;i++){
          let groupId = data.value[i].groupId;
          // 根据 groupId 查询 innerData
          axios
              .get(`http://localhost:8800/bulkAgreement/selectClient/${groupId}`)
              .then((res)=>{
                // 遍历 res.data
                // 遍历 res.data
                // 遍历 res.data
                for (let i = 0; i < res.data.length; ++i) {
                  let item = res.data[i];
                  // 创建一个新的对象，只包含 key, index 和 name 属性
                  let newItem = {
                    key: i,
                    index: i + 1,
                    id:item.id,
                    name: item.name,
                  };

                  // 将新的对象添加到 innerData.value 中
                  innerData.value.push(newItem);
                }
              })
              .catch((err)=>{
                console.log(err);
              })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
});

</script>
<style scoped>
a {
  margin: 0 2px; /* 这表示左右各有 10 像素的间距 */
}
.main{
  border: 2px solid #a8b7d3;
  height: 47vh;
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
</style>
