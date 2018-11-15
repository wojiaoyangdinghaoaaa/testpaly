<template>
    <div class="cantain">
        <!-- header部分 -->
        <van-nav-bar
            title="账户信息"
            left-arrow
            @click-left="onClickLeft"
        />

        <!-- 信息 -->
        <div class='content'>
            <div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>用户名</span>
                    <span class='userInfoRight'>{{userInfo.username}}</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>真实姓名</span>
                    <span class='userInfoRight'>{{userInfo.realName}}</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>手机号</span>
                    <span class='userInfoRight'>{{userInfo.tel}}</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>提现支付宝姓名</span>
                    <span class='userInfoRight'>{{userInfo.alipayRealName}}</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>提现支付宝账户</span>
                    <span class='userInfoRight'>{{userInfo.alipayAccount}}</span>
                </div>
            </div>
            <div class='userInfoBtn' @click='goLogin'>
                    注销
            </div>
            </div>

    </div>
</template>
<script>
import {getUserLoginState, logoutUserLogin} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);


export default {
    data () {
        return {
            id:'',
            userInfo:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        goLogin(){
            // this.$router.push({path:'/'});
            var limit={
                id:this.id
            }
            logoutUserLogin(limit).then(res=>{
                if(res.data.success==true){
                    this.$router.push({path:'/'});
                    Toast('退出成功！');
                }
            })
        }
    },
    created () {
        this.id=Number(localStorage.getItem('userId'));
        var limit={
            id:Number(localStorage.getItem('userId'))
        }
        getUserLoginState(limit).then(res=>{
            if (res.data.success==false) {
                this.$router.push({path:'/'});
                Toast('登录过期，请重新登录！');
            }else if(res.data.success==true){
                this.userInfo=res.data.data;
            }

        })
    }
}
</script>
<style scoped>
.cantain{
    width: 100%;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.content{
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.userInfo{
  overflow: hidden;
  border-bottom: 1px solid #F0F0F0;
  font-size:15px;
  padding:16px 10px;
}
.userInfoLeft{
  float: left;
}
.userInfoRight{
  float: right;
}
.userInfoBtn{
  text-align: center;
  background: #0099FF;
  color: #ffffff;
  font-size: 20px;
  border-radius: 10px;
  padding:7px 0;
  position:absolute;
  bottom:4%;
  width:94%;
  left:3%;
}
</style>


