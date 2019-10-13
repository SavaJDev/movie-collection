import axios from 'axios'

const instance = axios.create({
  baseURL: '/3/',
  timeout: 5000
}) 

export default instance