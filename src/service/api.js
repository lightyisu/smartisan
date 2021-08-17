import axios from 'axios';
const request=axios.create({
    baseURL:'https://ddu-du.tk/api/',
    timeout:100

})
request.interceptors.response.use ((res)=>{
    return res
},(err)=>{
    return '服务正在测试'
})
const getTest=()=>{
   return request.get('/test')
}
export {getTest}