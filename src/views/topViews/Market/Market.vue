<template>
  <div class="mainer">
    <div class="buttonGroup">
      <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">买方挂牌</button>
      <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">卖方挂牌</button>
    </div>
    <div class="right">
      <Buyer v-show="activeButton === 'button1'"></Buyer>
      <Seller v-show="activeButton === 'button2'"></Seller>
    </div>
  </div>
</template>
<script setup>
  import {ref} from "vue";
  import {Tabs, TabPane} from "ant-design-vue";
  import Buyer from "@/views/topViews/Market/components/Buyer.vue";
  import Seller from "@/views/topViews/Market/components/Seller.vue";

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
  font-size: 15px;
  height: 38.7%;
  padding: 10px 4px;
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
}
</style>