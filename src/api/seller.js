import request from './request';

export function getSeller() {
  return request.get('/seller')
}