<template>
    <div class="cantain">
        <!-- header部分 -->
        <div class="header">
            <i class="iconfont" @click="onClickLeft">&#xe650;</i>
            <div class="headerText">注册</div>
        </div>

        <!-- 用户信息 -->
        <div class="content">
            <div class="accountInfo">
                <div class="title">
                  <img :src="titleLeftImg">
                  <span>账户信息</span>
                  <img :src="titleRightImg">
                </div>
                <div class="accountInfoInputs">  
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe61a;</i>
                        <input type="text" placeholder="请输入用户名">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe641;</i>
                        <input type="text" placeholder="请输入手机号">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe654;</i>
                        <input :type="pass" placeholder="请输入密码">
                        <i class="iconfont eye" v-if="passShow" @click="clickShow">&#xe602;</i>
                        <i class="iconfont eye" v-else @click="clickShow">&#xe600;</i>

                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe654;</i>
                        <input :type="aginPass" placeholder="请再次输入密码">
                        <i class="iconfont eye" v-if="aginPassShow" @click="clickShowAgin">&#xe602;</i>
                        <i class="iconfont eye" v-else @click="clickShowAgin">&#xe600;</i>
                    </div>
                </div>
            </div>

            <div class="accountInfo">
                <div class="title">
                  <img :src="titleLeftImg">
                  <span>个人信息</span>
                  <img :src="titleRightImg">
                </div>
                <div class="accountInfoInputs">  
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe601;</i>
                        <input type="text" placeholder="请输入真实姓名">
                    </div>
                    <div class="accountInfoInput cardId">
                        <i class="iconfont">&#xe674;</i>
                        <input type="text" placeholder="请输入身份证号">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe65d;</i>
                        <input type="text" placeholder="请输入支付宝账号">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe611;</i>
                        <input type="text" placeholder="请输入支付宝真实姓名">
                    </div>
                </div>
            </div>

            <div class="registBottomBig">
                <van-button type="primary" v-if="buttonState">注册</van-button>
                <van-button type="primary" v-else loading></van-button>
                <div class="registBottom">
                    <span  @click="forgetPass">忘记密码？</span>
                    <b  @click="goLogin">登录账户</b>
                </div>
            </div>
            
                
        </div>

        
    </div>
</template>
<script>
import img from '../../static/json/index.json';

import { NavBar, Button, Dialog, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Button).use(Dialog).use(Toast);

export default {
    data () {
        return {
            pass:'password',
            aginPass:'password',
            passShow:true,
            aginPassShow:true,
            registNumber:'',
            titleLeftImg:img.ruleLeft,
            titleRightImg:img.ruleRight,
            buttonState:true,
            content: '为保证用户安全，不支持该操作。如需修改，请联系代理商或运营中心！'
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({path:'/RegistNum',query:{number:this.registNumber}});
        },
        clickShow(){
            if (this.pass=='password') {
                this.pass='text';
                this.passShow=!this.passShow;
            }else{
                this.pass='password';
                this.passShow=!this.passShow;
            }
        },
        clickShowAgin(){
            if (this.aginPass=='password') {
                this.aginPass='text';
                this.aginPassShow=!this.aginPassShow;
            }else{
                this.aginPass='password';
                this.aginPassShow=!this.aginPassShow;
            }
        },
        forgetPass(){
          Dialog.alert({
            title: '温馨提示',
            message: this.content
          }).then(() => {
            // on close
          });
        },
        goLogin(){
            this.$router.push({path:'/'});
        },
    },
    created () {
        this.registNumber=this.$route.query.number;
    }
}
</script>

<style scoped>
.cantain{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.header{
    height: 46px;
    width: 100%;
    position: relative;
}
.header i{
    position: absolute;
    top: 9px;
    left: 15px;
    font-size: 26px;
    color: #000;
}
.headerText{
    height: 100%;
    width: 100%;
    font-size: 17px;
    text-align: center;
    line-height: 46px;
}
.content{
  flex: 1;
  text-align: center;
  padding:0 15px;
  background:#F0F0F0;
}
.accountInfo{
    width: 100%;
}
.title{
    padding: 22px 0;
}
.title img{
    width:57px;
    height:14px;
}
.title span{
    font-size: 18px;
}
.accountInfoInputs{
    border-radius:10px;
    background-color:#fff;
    text-align:left;
    border-top:1px solid #ddd;
}
.accountInfoInput{
    border-bottom:1px solid #ddd;
    height: 50px;
    line-height: 30px;
    overflow: hidden;
}
.accountInfoInput input{
  display: block;
  float: left;
  border: 0;
  outline: 0;
  width: 70%;
  height: 100%;
  font-size: 17px;
  line-height: 20px;
}
.accountInfoInput i{
  display: inline-block;
  float: left;
  font-size: 28px;
  margin: 10px;
  margin-right: 3px;
}
.cardId i{
    margin-right: -3px;
    margin-left: 6px;
}
.registBottomBig{
    padding: 20px 0 50px 0;
}
.van-button--primary{
    width: 100% !important;
    margin: 20px auto !important;
    margin-bottom: 16px !important;
}
.registBottom{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.registBottom span{
    float: left;
    color:#888;
}
.registBottom b{
    float: right;
    color:#f90;
}
.eye{
    margin-left: 20px !important;
    font-size: 24px !important;
}
</style>

