<template>
    <div class="main">
        <a-avatar shape="square" :size="56" class="avatar">
            <UserOutlined class="user"/>
        </a-avatar>
        <div class="info">
            <label>客户号：<span>{{ clientId }}</span></label><!-- 7位 -->
            <label>操作员：<span>{{ operatorCode }}</span></label><!-- 5位 -->
        </div>
    </div>
    <button @click="quit">退出</button>
  </template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';
import AxiosInstance from '@/utils/axiosInstance';

export default {
  name: "Avatar",
  components:{UserOutlined},
  data(){
    return{
      clientId:"",
      operatorCode:"",
    };
  },
  methods:{
    quit(){
      AxiosInstance.get(`/user/loginOut?operatorCode=${this.operatorCode}`).then(
        response => {
          localStorage.removeItem("clientId");
          localStorage.removeItem("operatorCode");
          localStorage.removeItem("token");
          this.$router.push("/")
        }).catch(error => {console.error("Logout failed:", error);});
    }
  },
  mounted(){
    this.clientId = localStorage.getItem("clientId")
    this.operatorCode = localStorage.getItem("operatorCode")
  }
}
</script>

  <style scoped>
  .main {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    position: relative;
    top: 10px;
    background: #001c3a;
  }
  .user{
    font-size: 30px;
  }
  .info {
    position: relative;
    top: 15%;
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 12px;
    color: #a6adb4;
    margin-top:15px;
  }
  button {
    position: relative;
    top: 18%;
    left: 32%;
    padding: 4px 12px;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #17294f;
  }
    button:hover{
    background-color: #d4cfcc;
    cursor: pointer;
  }
  </style>
  