import request from './request';

export function getGoods() {
  return request.get('/goods')
}