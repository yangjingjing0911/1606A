import request from '@/utils/request'

// 获取用户列表
export function getUserList(params) {
  console.log('param...', params);
  return request({
    url: '/users/list',
    method: 'get',
    params,
  })
}

// 更新用户信息
export function updateUserInfo(data){
  return request({
    url: '/users/update',
    method: 'post',
    data
  })
}

// 删除用户信息
export function deleteUser(data){
  return request({
    url: '/users/action',
    method: 'delete',
    data
  })
}

// 给用户分配权限
export function modifyRoler(data){
  return request({
    url: '/users/action',
    method: 'put',
    data
  })
}