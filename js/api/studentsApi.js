import axiosClinet from "./axiosClient.js";

const studentsApi = {
    getAll(params){
        const url = '/students';
        return axiosClinet.get(url, {params})
    },
    
    getById(id){
        const url = `/students/${id}`;
        return axiosClinet.get(url)
    },

    add(data){
        const url = `/students`;
        return axiosClinet.post(url, data)
    },

    update(data){
        const url = `/students/${data.id}`;
        return axiosClinet.patch(url, data)
    },

    remove(id){
        const url = `/students/${id}`;
        return axiosClinet.delete(url)
    }
}
export default studentsApi;