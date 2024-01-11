<template>
    <div>
      <a-form :layout="'inline'" @submit="handleSubmit" :model="groupForm" :rules="groupRules">
        <a-form-item label="&nbsp;&nbsp;标的物代码">
          <a-input size="small" name="name"/>
        </a-form-item>
        <a-form-item>
          <button html-type="submit" @click="refreshData">搜索</button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <button @click="handleReset">清空</button>
        </a-form-item>
      </a-form>
      <a-table
          :dataSource="data"
          :columns="columns"
          :pagination="pagination"
          size="small" 
          :scroll="{y:202}"
          bordered
      ></a-table>
    </div>
  </template>
  
  <script setup>
  import {onMounted, ref} from "vue";
  import axios from "axios";

  const groupForm = ref({name: ""});

  const codes = ref(["代码1", "代码2", "代码3"]);
  const data = ref([]);
  for (let i = 0; i < 100; i++) {
    data.value.push({
      key: i,
      ClientId:`客户Id`,
      code:`标的物代码`,
      name:`标的物名称`,
      Amount:`持有数量`,
    });
  }
  const columns = [
    {title: "客户Id", dataIndex: "ClientId",width: 120},
    {title: "标的物代码", dataIndex: "code",width: 120},
    {title: "标的物名称", dataIndex: "name",width: 120},
    {title: "持有数量(吨)", dataIndex: "Amount",width: 120},
  ];
  const pagination = {pageSize: 10};
  
  const search = () => {
    // 在这里执行你的搜索逻辑，然后更新data
  };
  
  const clear = () => {
    selectedCode.value = null;
    data.value = [];
  };

  const subjectMatterCode = ref(null);
  onMounted(() => {
    let clientId= localStorage.getItem("clientId");
    const subjectMatterCode = groupForm.value.name; // 获取输入框的值
    console.log(subjectMatterCode);
    axios.get(`http://localhost:8800/quota/selectRegisterQuota//${clientId}}/${subjectMatterCode}`)
        .then((res) => {
          data.value = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  });

  const refreshData = () => {//刷新
    //清除数据
    data.value.splice(0, data.value.length);
    let clientId= localStorage.getItem("clientId");
    const subjectMatterCode = groupForm.value.name; // 获取输入框的值
    console.log(subjectMatterCode);
    axios.get(`http://localhost:8800/quota/selectRegisterQuota//${clientId}}/${subjectMatterCode}`)
        .then((res) => {
          data.value = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  </script>
  
  