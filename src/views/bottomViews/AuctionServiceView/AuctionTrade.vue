<template>
    <div class="main">
        <div style="border-bottom: 2px solid #a8b7d3;padding: 1.5vh;">
            <span>单向竞价</span>
        </div>
        <a-table 
        :columns="columns" 
        :data-source="data" 
        :scroll="{y:232}"  
        size="small" 
        bordered
        >
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'operation'">
            <a v-if="record.inquiryStatus === '未询价'" @click="record.inquiryStatus = '已报单'">加入竞价</a>
            <a v-if="record.inquiryStatus === '已报单'" @click="goToNegotiationPage(record)">洽谈</a>
            </template>
        </template>
        </a-table>
    </div>
</template>
  
<script setup>
  import { ref } from "vue";
  
  const columns = ref([
    {title: "操作",key: "operation",width: 100,fixed: "left",align:'center'},
    {title: "标的物代码", dataIndex: "subjectCode", key: "1", width: 150,align:'center'},
    {title: "标的物名称", dataIndex: "subjectName", key: "2", width: 150,align:'center'},
    {title: "委托初始价格",dataIndex: "initialOfferPrice",key: "3",width: 150,align:'center'},
    {title: "委托数量(吨)",dataIndex: "initialOfferQuantity",key: "4",width: 150,align:'center'},
    {title: "委托初始金额",dataIndex: "initialOfferAmount",key: "5",width: 150,align:'center'},
    {title: "最新价格", dataIndex: "recentPrice", key: "6", width: 150,align:'center'},
    {title: "成交状态", dataIndex: "Status", key: "7", width: 150,align:'center'}
  ]);
  
  const goToNegotiationPage = (record) => {
    // 使用Vue Router进行页面跳转
    // this.$router.push({name: 'NegotiationPage', params: {id: record.key}});
    // console.log(`跳转到${record.key}的洽谈页面`);
  };
  
  const data = ref([]);
  for (let i = 0; i < 100; i++) {
    data.value.push({
      key: i,
      subjectCode: "100000",
      subjectName: "标的物名称",
      initialOfferPrice: "100",
      initialOfferQuantity: "100",
      initialOfferAmount: "100",
      recentPrice: "1000",
      inquiryStatus: "未询价",
      Status:"未成交",
    });
  }
</script>
<style scoped>
.main{
  border: 2px solid #a8b7d3;
}
</style>
  
  
  