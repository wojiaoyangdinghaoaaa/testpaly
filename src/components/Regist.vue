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
                        <input type="text" placeholder="请输入用户名" v-model="userName">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe641;</i>
                        <input type="text" placeholder="请输入手机号" v-model="phone">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe654;</i>
                        <input :type="pass" placeholder="请输入密码" v-model="password">
                        <i class="iconfont eye" v-if="passShow" @click="clickShow">&#xe602;</i>
                        <i class="iconfont eye" v-else @click="clickShow">&#xe600;</i>

                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe654;</i>
                        <input :type="aginPass" placeholder="请再次输入密码" v-model="aginPassword">
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
                        <input type="text" placeholder="请输入真实姓名" v-model="realName">
                    </div>
                    <div class="accountInfoInput cardId">
                        <i class="iconfont">&#xe674;</i>
                        <input type="text" placeholder="请输入身份证号" v-model="cardNum">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe65d;</i>
                        <input type="text" placeholder="请输入支付宝账号" v-model="alipay">
                    </div>
                    <div class="accountInfoInput">
                        <i class="iconfont">&#xe611;</i>
                        <input type="text" placeholder="请输入支付宝真实姓名" v-model="alipayName">
                    </div>
                </div>
            </div>

            <div class="registBottomBig">
                <van-button type="primary" v-if="buttonState" @click="saveInfo">注册</van-button>
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
import {register} from '../api/getData';
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
            content: '为保证用户安全，不支持该操作。如需修改，请联系代理商或运营中心！',
            userName:'',
            phone:'',
            password:'',
            aginPassword:'',
            realName:'',
            cardNum:'',
            alipay:'',
            alipayName:'',
            limit:{}
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
        saveInfo(){

            this.limit={
                          username:this.userName,
                          password:this.password,
                          tel:this.phone,
                          realName:this.realName,
                          idNumber:this.cardNum,
                          alipayAccount:this.alipay,
                          alipayRealName:this.alipayName,
                          num:this.registNumber
                        };

            var username= /[\u4e00-\u9fa5_a-zA-Z_]+/;
            var phone=/^1(3|4|5|6|7|8|9)\d{9}$/;
            var password=/^\w{6,18}$/;
            var cardId=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;
            
            if(this.userName!='' && this.password!=''&&  this.phone!='' && this.realName!='' && this.cardNum!='' && this.alipay!='' && this.alipayName!=''){
                    if(!(this.userName.length>=3 && this.userName.length<=12)){
                        Toast('用户名长度为3到12个字符!');
                    }else if(!username.test(this.userName)){
                        Toast('用户名中必须包含字母、中文或下划线!');
                    }else if(!phone.test(this.phone)){
                        Toast('手机号输入格式不正确!');
                    }else if(!password.test(this.password)){
                        Toast('密码由6到18个数字、字母、下划线组成!');
                    }else if(!cardId.test(this.cardNum)){
                        Toast('身份证号输入格式不正确!');
                    }else if(this.password!=this.aginPassword){
                        Toast('两次密码输入不一致!');
                    }else{
                        this.buttonState=false;
                            register (this.limit).then(res=>{
                                setTimeout(()=>{
                                    if (res.data.success==true) {
                                        Toast('注册成功!');
                                        this.buttonState=true;
                                        this.$router.push({path:'/'});
                                    }else{
                                        Toast('用户名已存在，请重新注册!');
                                        this.buttonState=true;
                                    }
                                },2000);
                            })
                    }
            }else{
                Toast('资料不能为空！');
            }
        }
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
  overflow: auto;
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

