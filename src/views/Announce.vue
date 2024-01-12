<template>
  <div class="mainer">
    <div class="announcePane" @click="showModal">
      <span>
        {{ currentAnnouncement.title }} - {{ currentAnnouncement.context }}
      </span>
    </div>
    <div class="info">
      <span>交易状态：交易</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span>
        <a-badge :dot="true" color="red">
          <MailOutlined style="font-size: 16px; color: white" />
        </a-badge>
      </span>
      <span>&nbsp;&nbsp;</span>
      <span>{{ currentTime }}</span>
      <span>&nbsp;&nbsp;</span>
    </div>
  </div>
  <a-modal 
    v-model:open="open" 
    title="最新公告" 
    :ok-button-props="{style: {display:'none'}}"
    :cancel-button-props="{style: {display:'none'}}"
    :afterClose = "close"
    :centered = "true"
    :maskClosable = "false"
    :width = "800"
    class="window"
  >
    <div>
      <h2>{{ announce[page].title }}</h2>
    </div>
    <div class="content">
      <p>{{ announce[page].context }}</p>
    </div>
    <template #footer>
      <button @click="page = (page - 1)" v-bind:disabled="! (page > 0)">上一条</button>
      <button @click="page = (page + 1)" v-bind:disabled="! (page < announce.length - 1)">下一条</button>
    </template>
  </a-modal>
</template>

<script>
import { MailOutlined } from '@ant-design/icons-vue';

// 创建一个简单的 Vue 实例
export default {
  name: "Announce",
  components:{MailOutlined},
  data() {
    return {
      open: false,
      currentTime: '',
      timer: null,
      rotateInterval:null,
      currentAnnouncementIndex: 0,
      page:0,
      currentAnnouncement:{
          title: "2021-05-25 13:31~2021-05-25 13:40政府机构01政府竞价052501竞拍公告",
          context: "客户[政府机构01]发布了一场竞拍,场次编号:M202105250001,场次名称政府竞价052501竞拍开始时间:2021-05-25 13:31"
      },
      announce: [
        {
          title: "2021-05-25 13:31~2021-05-25 13:40政府机构01政府竞价052501竞拍公告",
          context: "客户[政府机构01]发布了一场竞拍,场次编号:M202105250001,场次名称政府竞价052501竞拍开始时间:2021-05-25 13:31"
        },
        {
          title: "2021-08-15 10:45~2021-08-15 11:00环保局C环境保护081501竞拍公告",
          context: "客户[环保局C]发布了一场竞拍,场次编号:M202108150001,场次名称环境保护081501竞拍开始时间:2021-08-15 10:45"
        },
        {
          title: "2021-06-10 09:15~2021-06-10 09:30医疗机构A医疗招标061001招标公告",
          context: "客户[医疗机构A]发布了一场招标,招标编号:M202106100001,招标名称医疗招标061001招标开始时间:2021-06-10 09:15"
        },
        {
          title: "2021-07-02 14:00~2021-07-02 14:15教育局B学校建设072002招标公告",
          context: "客户[教育局B]发布了一场招标,招标编号:M202107020002,招标名称学校建设072002招标开始时间:2021-07-02 14:00"
        }
      ]
    };
  },
  methods: {
    showModal() {
      this.open = true;
    },
    hideModal() {
      this.open = false;
    },
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
    },
    close(){
      this.open = false;
      this.page = 0;
    }
  },
  mounted() {
    this.showModal();
    this.updateTime(); // 页面加载时获取并显示时间

    // 每秒钟更新一次当前时间
    this.timer = setInterval(this.updateTime, 1000);
    // 更新内容
    this.rotateInterval = setInterval(()=>{
      this.currentAnnouncementIndex = (this.currentAnnouncementIndex + 1) % this.announce.length;
      this.currentAnnouncement = this.announce[this.currentAnnouncementIndex];
    }, 25000);
  },
  beforeDestroy() {
    clearInterval(this.timer); // 清除定时器
    clearInterval(this.rotateInterval);
  },
}
</script>

<style scoped>
.mainer {
  display: flex;
  height: 3vh;
  background: #212121;
  font-size: 13px;
  color: white;
}

.announcePane {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: hidden;
  width: 85%;
}

.announcePane:hover {
  cursor: pointer;
}

.announcePane span {
  display: inline-block;
  animation: marquee 25s linear infinite;
}

.info {
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 10px;
  margin-left: auto;  
  margin-right: 10px; 
}
.content{
  height: 20vh;
  width: 800px;
}
button {
  margin: 5px;
  padding: 7px 12px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}</style>