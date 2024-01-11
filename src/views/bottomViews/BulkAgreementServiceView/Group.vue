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
          <a @click="deleteGroup(record)">删除</a>
          <a @click="addCustomer(record)">新增成员</a>
          <a @click="deleteCustomer(record)">删除成员</a>
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
          <template #bodyCell="{ column,record }">
            <template v-if="column.key === 'operation'">
              <a @click="deleteCustomer(record)">删除</a>
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
        <a-input placeholder="请输入群组名称" v-model:value="groupForm.name"></a-input>
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
        <a-input placeholder="请输入新的群组名称" v-model:value="customerForm.name"></a-input>
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
        <a-input placeholder="请输入客户名称" v-model:value="addCustomerForm.name"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
   <a-modal
       v-model:visible="deleteCustomerModalVisible"
       title="删除成员"
       ok-text="确定"
       cancel-text="取消"
       @ok="handleDeleteCustomerOk"
       @cancel="handleDeleteCustomerCancel"
   >
     <a-form :model="deleteCustomerForm" :rules="deleteCustomerRules">
       <!-- 新增成员的表单数据和验证规则 -->
       <a-form-item label="客户名称" name="name">
         <a-input placeholder="请输入客户名称" v-model:value="deleteCustomerForm.name"></a-input>
       </a-form-item>
     </a-form>
   </a-modal>
</template>


<script  setup>
import {onMounted, ref} from "vue";
import {DownOutlined} from "@ant-design/icons-vue";
import AxiosInstance from "@/utils/axiosInstance";

const columns = [
  {title: "群组Id", dataIndex: "id", key: "groupId",align:"center"},
  {title: "群组名称", dataIndex: "name", key: "name",align:"center"},
  {title: "创建时间", dataIndex: "createTime", key: "createTime",align:"center"},
  {title: "修改时间", dataIndex: "updateTime", key: "updateTime",align:"center"},
  {title: "操作", key: "operation",align:"center"},
];

let data = ref([]);


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
const deleteCustomerModalVisible = ref(false);
const groupForm = ref({name: ""});
const customerForm = ref({name: ""});
const addCustomerForm = ref({name: ""});
const deleteCustomerForm = ref({name: ""});
const groupRules = ref({
  name: [{required: true, message: "请输入群组名称"}],
});
const customerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
});
const addCustomerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
});
const deleteCustomerRules = ref({
  name: [{required: true, message: "请输入客户名称"}],
});
const currentGroup = ref({
  id:"",
  name:"",
  createTime:"",
  updateTime:"",
});
const currentCustomer = ref(null);

const addGroup = () => {
  groupModalVisible.value = true;
};

const editGroup = (record) => {
  customerModalVisible.value = true;
  currentGroup.value = record;
  groupForm.value.name = record.name;
};

const deleteGroup =(record) =>{
  currentGroup.value=record;
  let groupId=currentGroup.value.id;
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .post(`/bulkAgreement/deleteGroup/${groupId}/${clientId}`)
      .then((res)=>{
        alert(res.data.message);
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
}

const addCustomer = (record) => {
  addCustomerModalVisible.value = true;
  currentGroup.value = record;
};

const deleteCustomer=(record)=>{
  deleteCustomerModalVisible.value = true;
  currentGroup.value = record;
}

const handleGroupOk = () => {//新建群组
  let groupName=groupForm.value.name;
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .post(`/bulkAgreement/createGroup/${groupName}/${clientId}`)
      .then((res)=>{
        alert(res.data.message)
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

  let groupId=currentGroup.value.id;
  let newGroupName=customerForm.value.name
  let clientId=localStorage.getItem("clientId")
  AxiosInstance
      .post(`/bulkAgreement/modifyGroup/${groupId}/${newGroupName}/${clientId}`)
      .then((res)=>{
        alert(res.data.message);
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
  let groupId=currentGroup.value.id;
  let memberName=addCustomerForm.value.name;
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .post(`/bulkAgreement/addMember/${groupId}/${memberName}/${clientId}`)
      .then((res)=>{
        let a =JSON.stringify(res.data.message);
        alert(a);
        console.log(res.data);
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

const handleDeleteCustomerOk = () => {//删除群组成员
  let groupId=currentGroup.value.id;
  let memberName=deleteCustomerForm.value.name;
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .post(`/bulkAgreement/deleteMember/${groupId}/${memberName}/${clientId}`)
      .then((res)=>{
        let a =JSON.stringify(res.data.message);
        alert(a);
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  refreshData();
  deleteCustomerModalVisible.value = false;
  deleteCustomerForm.value.name = "";
};
const handleDeleteCustomerCancel = () => {//取消删除群组成员
  deleteCustomerModalVisible.value = false;
  deleteCustomerForm.value.name = "";
  currentCustomer.value = null;
};

const refreshData = () => {//刷新
  //清除数据
  data.value=[];
  innerData.value=[];
  let clientId=localStorage.getItem("clientId");
  AxiosInstance
      .get(`/bulkAgreement/selectGroup/${clientId}`)
      .then((res)=>{
        data.value=res.data.data;
        // 遍历 data.value
        for(let i=0;i<data.value.length;i++){
          let groupId = data.value[i].id;
          // 根据 groupId 查询 innerData
          AxiosInstance
              .get(`/bulkAgreement/selectClient/${groupId}`)
              .then((res)=>{
                innerData.value=res.data.data;
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
  AxiosInstance
      .get(`/bulkAgreement/selectGroup/${clientId}`)
      .then((res)=>{
        data.value=res.data.data;
        // 遍历 data.value
        for(let i=0;i<data.value.length;i++){
          let groupId = data.value[i].id;
          // 根据 groupId 查询 innerData
          AxiosInstance
              .get(`/bulkAgreement/selectClient/${groupId}`)
              .then((res)=>{
                innerData.value=res.data.data;
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
