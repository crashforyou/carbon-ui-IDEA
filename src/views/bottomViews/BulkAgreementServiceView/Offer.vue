<!--大宗协议报价-->
<template>
  <div class="main">
    <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">定向报价</button>
    <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">群组报价</button>

    <div v-if="activeButton === 'button1'">
      <OfferDirect ></OfferDirect>
    </div>

    <div v-if="activeButton === 'button2'">
      <OfferGroup></OfferGroup>
    </div>
  </div>
</template>

<script setup>
import {ref, nextTick} from "vue";
import OfferDirect from "./components/OfferDirect.vue";
import OfferGroup from "./components/OfferGroup.vue";

const activeButton = ref("button1")

</script>

<style scoped>
.main{
  border: 2px solid #a8b7d3;
}

button {
  margin: 5px;
  padding: 8px 13px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #d4cfcc;
}
button:hover,button.active{
  color: white;
  background-color: #17294f;
  cursor: pointer;
}

</style>
