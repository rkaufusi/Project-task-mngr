import http from '../http-common';

class TaskDataServices {
  getAll(page = 0) {
      //return http.get(`?page=${page}`)
      return http.get(`/tasks`)
  }
  get(id) {
      return http.get(`/id/${id}`)
  }
  find(query, by = "name", page = 0){
      return http.get(`?${by}=${query}&page=${page}`)
  }
  createTask(data) {
      return http.post('/task', data)
  }
  updateTask(data) {
    return http.post('/task', data)
  }
  deleteTask(data) {
    return http.post('/task', data)
  }

}
export default new TaskDataServices();

//const url = 'http://localhost:5000/tasks'

//export const fetchTasks = () => axios.get(url);