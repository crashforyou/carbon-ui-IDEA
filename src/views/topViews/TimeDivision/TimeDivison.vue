<template>
  <div id="chart" style="width: 600px;height:400px;"></div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
  const chart = echarts.init(document.getElementById('chart'));

  const option = {
    xAxis: {
      type: 'category',
      data: [], //时间数据
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [], // 实时成交价格数据
        type: 'line',
        smooth: true,
        itemStyle: {
          color: 'white',
        },
      },
      {
        data: [], // 平均价格数据
        type: 'line',
        smooth: true,
        itemStyle: {
          color: 'yellow',
        },
      },
    ],
  };

  chart.setOption(option);
});
</script>
