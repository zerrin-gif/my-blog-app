import http from '../http-common';

class PostService{
  getAll(){
    return http.get('/blogposts');
  }
  create(data) {
    return http.post('/blogposts', data)
  }
}

export default new PostService();