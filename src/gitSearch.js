import axios from 'axios';

export default function getUserInfo(){
  return axios.get('https://api.github.com/users/zhangtong1994')
         .then((res) =>(
           {gitInfo:res.data}
         ))
}
