<template>
    <ve-line :data="chartData"></ve-line>
</template>

<script>
import axios from 'axios';
export default {
    data: function () {
      return {
        chartData: {
          columns: ['日期', '访问用户' ,'下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
    created(){
        fetch('http://123.206.55.50:15000/users/commit')
        .then(res => res.json())
        .then(body =>{
            // 整理数据，把十二个月份的数据合到一个对象里面
            let data = body[0].commit;
            // console.log(data)
            data.forEach((item,index) => {
                // 每一项
                //console.log(item)
                let date = item.date;
                for (let i = 1; i <= 12; i++){
                    item[`${i}月`] = body[i-1].commit[date-1] && body[i-1].commit[date-1].commit;
                }
                // 删除commit
                delete item.commit;
            })
            console.log(data)
            this.chartData = {
                columns:['date', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                rows:data
            }
        })
    }
  }
</script>

<style>

</style>
