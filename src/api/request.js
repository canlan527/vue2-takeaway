import axios from 'axios';
axios.defaults.baseURL="http://ceshi.dishait.cn"; 
const ins = axios.create();

ins.interceptors.response.use(function(response) {
  if(response.status !== 200) {
    return null;
  }
  return response.data;
})

export default ins;