<template>
  <div class="mainer">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">分时走</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">技术分</button>
      <button :class="{ active: activeButton === 'button3' }" >基本资</button>
      <button :class="{ active: activeButton === 'button4' }" >分笔成</button>
      <button :class="{ active: activeButton === 'button5' }" >分价表</button>
    </div>
    <div class="right">
      <KlineView v-show="activeButton === 'button1'"></KlineView>
      <!-- <KlineView v-show="activeButton === 'button2'"></KlineView> -->
    </div>
  </div>
</template>
<script setup>
  import {ref} from "vue";
  import KlineView from "@/views/topViews/KLine/components/KlineView.vue"

  const activeButton = ref("button1");

  const customTabBarStyle = {
    
  };
</script>
<style scoped>
.mainer {
  display: flex;
  background: #121212;
  height: 47vh;
}

.buttonGroup {
  display: flex;
  flex-direction: column;
}

.buttonGroup button {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 13px;
  height: 15.3%;
  padding: 5px 4px;
  border: none; 
  color: #a3a8a9;
  background-color: #201f1e;
  clip-path: polygon(        
    0% 10%, /* 左上角 */
    100% 0, /* 右上角 */
    100% 100%, /* 右下角 */
    0% 90% /* 左下角 */
  );
}

.buttonGroup button:hover,button.active{
  background-color: #ebbf54;
  cursor: pointer;
  color: black;
}

.right {
  margin-left: 5px;
  height: 36.1vh;
  width: 252vh;
}
</style>