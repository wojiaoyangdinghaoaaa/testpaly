// 获取数据

import http from './fetch';


export const login = (params) => http.postParam('/user/login', params);       // 登录接口

export const register = (params) => http.post('/user/register', params);      // 注册接口

export const getUserLoginState = (params) => http.get('/user/currentUser', params);      // 注册接口