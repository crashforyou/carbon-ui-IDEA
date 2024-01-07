<template>
    <div class="main">
        <div class="annnounce">
            <span>这个例子中，使用overflow-x: scroll来允许文本水平滚动。同时，通过white-space: nowrap确保文本在一行显示，display: inline-block让span元素成为行内块级元素，以便进行动画效果。animation属性和@keyframes定义了一个名为marquee的动画，使文本水平滚动。</span>
        </div>
        <div class="info">
            <span>交易状态：交易</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>
                <a-badge :dot="true" color="red">
                    <MailOutlined style="font-size: 16px; color: white"/>
                </a-badge>
            </span>
            <span>&nbsp;&nbsp;</span>
            <span>{{currentTime}}</span>
            <span>&nbsp;&nbsp;</span>
        </div>
    </div>
</template>

<script setup>
import { MailOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString();
};

// 每秒钟更新一次当前时间
const timer = setInterval(updateTime, 1000);

onMounted(() => {
  updateTime(); // 页面加载时获取并显示时间
});

onUnmounted(() => {
  clearInterval(timer); // 清除定时器
});
</script>

<style scoped>
.main{
    display: flex;
    height: 3vh;
    background: #212121;
    font-size: 13px;
    color: white;
    margin-right:2px;
}
.annnounce {
  display: flex;
  align-items: center; 
  white-space: nowrap;
  overflow-x: hidden;
}

.annnounce span {
  display: inline-block;
  animation: marquee 25s linear infinite;
}
.info{
  display: flex;
  align-items: center; 
  white-space: nowrap;
  margin-left: 10px;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>