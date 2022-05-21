import axios from "axios";

const axiosClinet = axios.create({
    baseURL: 'https://js-post-api.herokuapp.com/api',
    headers: {'Content-type': 'application/json'}
  })

export default axiosClinet;