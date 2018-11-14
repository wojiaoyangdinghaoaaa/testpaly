// 获取数据

import http from './fetch';


export const login = (params) => http.post('/user/login', params);       // 登录接口

export const register = (params) => http.post('/user/register', params);      // 注册接口

export const getUserLoginState = (params) => http.get('/user/currentUser', params);      // 获取用户登录状态接口

export const logoutUserLogin = (params) => http.get('/user/logout', params);      // 注销用户登录接口

export const getUserInforn = (params) => http.get('/user/findById', params);      // 获取用户信息接口

export const getIndexImg = (params) => http.get('/slide/list', params);       // 获取首页轮播图接口

export const getIndexNum = (params) => http.get('/record/getRecord', params);       // 获取首页数据接口

export const getNewInform = (params) => http.get('/notice/getLatestOne', params);       // 获取首页滚动通知接口

export const getTaskList = (params) => http.get('/task/listLatestTask', params);      // 获取上架的任务接口 

export const getOneList = (params) => http.get('/task/findById', params);      // 获取单个任务详情接口

export const receiveTask = (params) => http.postParam('/user/task/take', params);       // 用户领取任务接口

export const ifReceiveTask = (params) => http.get('/user/task/checkStatus', params);      // 查看用户是否领取了任务接口

export const putReceiveTask = (params) => http.post('/user/task/submit', params);      // 用户提交任务接口

export const userPutMomey = (params) => http.postParam('/withdraw/apply', params);       // 用户提现接口

export const getUserTaskList = (params) => http.get('/user/task/listByUserId', params);      // 获取用户任务列表接口

export const getMomeyDetail = (params) => http.get('/user/task/money', params);      // 获取资金明细接口

export const getUserActivity = (params) => http.get('/user/task/getTodayActivitySize', params);      // 查看用户活跃度接口

export const getInform= (params) => http.get('/notice/all', params);     //获取通知接口

export const getInformDetail= (params) => http.get('/notice/findById', params);     //获取通知详情接口

export const setFeedback = (params) => http.post('/feedback/insert', params);      // 创建反馈接口