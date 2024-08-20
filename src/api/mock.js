 
import http from '@/utils/axios' 
let baseUrl = import.meta.env.BASE_URL

/**
 * 用户登录
 */
export function login(username, password, code, uuid) {
  return http.get(`${baseUrl}login.json`)
} 

/**
 * 退出方法
 * @returns 
 */
export function logout() {
  return http.get(`${baseUrl}mock/logout.json`)
}

/**
 * 获取登录用户信息  
 */
export function getUserProfile() {
  return http.get(`${baseUrl}profile.json`)
}

/**
 * 获取登录用户信息  
 */
export function getInfo() {
  return http.get(`${baseUrl}userinfo.json`)
}

/**
 * 获取菜单  
 */
export function getRouters() {
  return http.get(`${baseUrl}menu.json`)
}

/**
 * 查询岗位列表  
 */ 
export function listPost(query) {
  return http.get(`${baseUrl}post.json`)
}
