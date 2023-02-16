import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers:{
    "API-KEY" : 'c8ef421d-6a35-495d-b151-8cb507455bab'
  }
});


export const userAPI = {
  getUsers (currentPage: number, pageSize: number) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
  },

  follow (id: number) {
    return instance.post(`follow/${id}`);
  },
  
  unfollow (id: number) {
    return instance.delete(`follow/${id}`);
  },

  getCurrentProfile(id: number) {
    return instance.get(`profile/${id}`)
  }
}

export const authAPI = {
  me () {
    return instance.get('auth/me').then(response => response.data);
  }
}