<template>
    <div class="main">
        <a-avatar shape="square" :size="56" class="avatar">
            <UserOutlined class="user"/>
        </a-avatar>
        <div class="info">
            <label>客户号：<span>1213333</span></label><!-- 7位 -->
            <label>操作员代码：<span>12311</span></label><!-- 5位 -->
        </div>
    </div>
    <button>退出</button>
  </template>

<script setup>
    import { UserOutlined } from '@ant-design/icons-vue';
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
  