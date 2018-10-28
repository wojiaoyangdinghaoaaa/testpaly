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
                    <span class='userInfoRight'>小怪兽123</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>真实姓名</span>
                    <span class='userInfoRight'>杨哈哈</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>手机号</span>
                    <span class='userInfoRight'>15058665861</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>提现支付宝姓名</span>
                    <span class='userInfoRight'>杨哈哈</span>
                </div>
                <div class='userInfo'>
                    <span class='userInfoLeft'>提现支付宝账户</span>
                    <span class='userInfoRight'>15058665861</span>
                </div>
            </div>
            <div class='userInfoBtn' @click='goLogin'>
                    注销
            </div>
            </div>

    </div>
</template>
<script>
import { NavBar} from 'vant';
import Vue from 'vue';

Vue.use(NavBar);


export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        goLogin(){
            this.$router.push({path:'/'});
        }
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


