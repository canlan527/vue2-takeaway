import request from './request';

export function getRating() {
  return request.get('/ratings')
}