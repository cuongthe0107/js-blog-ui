import axiosClinet from "./axiosClient.js";

const postApi = {
    getAll(params){
        const url = '/posts';
        return axiosClinet.get(url, {params})
    },
    
    getById(id){
        const url = `/post/${id}`;
        return axiosClinet.get(url)
    },

    add(data){
        const url = `/post`;
        return axiosClinet.post(url, data)
    },

    update(data){
        const url = `/post/${data.id}`;
        return axiosClinet.patch(url, data)
    },

    remove(id){
        const url = `/post/${id}`;
        return axiosClinet.delete(url)
    }
}
export default postApi;