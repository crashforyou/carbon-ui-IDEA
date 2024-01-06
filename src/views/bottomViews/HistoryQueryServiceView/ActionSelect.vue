<template>
    <div class="main">
      <div class="buttonGroup">
        <button :class="{ active: activeButton === 'button1' }" @click="activeButton = 'button1'">999</button>
        <button :class="{ active: activeButton === 'button2' }" @click="activeButton = 'button2'">999</button>
      </div>
      <BulkAgreementOffer v-if="activeButton === 'button1'"></BulkAgreementOffer>
      2
    </div>
  </template>
  <script setup>
    import { ref } from "vue";
1
2
    const activeButton = ref("button1")
  </script>
  <style scoped>
  .main{
    border: 2px solid #a8b7d3;
  }
  .buttonGroup{
    border-bottom: 2px solid #a8b7d3;
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
  