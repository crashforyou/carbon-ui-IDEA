<template>
  <div id="chart" style="width: 600px;height:400px;"></div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import * as echarts from 'echarts';
import axios from "axios";

onMounted(() => {
  const chart = echarts.init(document.getElementById('chart'));
  axios.get('http://localhost:8800/topview/timeDivision').then((res) => {
    const data = res.data;
    const timeData = data.map((item) => item.time);
    const priceData = data.map((item) => item.price);
    const avgPriceData = data.map((item) => item.averagePrice);
    const option = {
      xAxis: {
        type: 'category',
        data: timeData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: priceData,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: 'white',
          },
        },
        {
          data: avgPriceData,
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
});
</script>
