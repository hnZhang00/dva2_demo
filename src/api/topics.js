import request from 'utils/request';

export default {
  get(tab){
    let params = {
      method: 'GET'
    }
    return request(`topics?tab=${tab}`, params);
  }
}
