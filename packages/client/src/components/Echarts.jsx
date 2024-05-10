import * as echarts from 'echarts';

var myChart = echarts.init(document.getElementById('root'));

myChart.setOption({
    title: {
        text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
});
option = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['A', 'B', 'C', 'D', 'E']
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 335, name: 'A' },
                { value: 310, name: 'B' },
                { value: 234, name: 'C' },
                { value: 135, name: 'D' },
                { value: 1548, name: 'E' }
            ]
        }
    ]