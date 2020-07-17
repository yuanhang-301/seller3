// 使用
// var Mock = require('mockjs');
// var data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1
//     }]
// });
// console.log(JSON.stringify(data, null, 4))
import Mock from 'mockjs'
import data from './data.json'
Mock.mock("/api/seller",{
    code:200,
    data:data.seller
})
Mock.mock("/api/goods",{
    code:200,
    data:data.goods
})
Mock.mock("/api/ratings",{
    code:200,
    data:data.ratings
})
