<template>
  <div>
      <!-- header部分 -->
      <van-nav-bar
        title="登录"
      />
      <!-- 头像 -->
      <div class="loginTitle">
         <img class="loginTitleImg" :src="Img" />
      </div>

      <!-- input输入框 -->
      <div class="inputBig">
        <div class="inputUser">
          <i class="iconfont">&#xe61a;</i>
          <input type="text" placeholder="用户名/手机号" v-model="userName">
        </div>
        <div class="inputPass">
          <i class="iconfont">&#xe654;</i>
          <input type="password" placeholder="密码" v-model="userPass">
        </div>
      </div>

      <!-- 按钮 -->
      <van-button type="primary" v-if="buttonState"  @click="loginHome">登录</van-button>
      <van-button type="primary" v-else loading></van-button>

      <div class="loginBottom">
        <span class="loginBottomLeft" @click="forgetPass">忘记密码？</span>
        <b class="loginBottomRight" @click="goRegistNum">注册账号</b>
      </div>



  </div>
</template>

<script>
import img from '../../static/json/index.json';
import { NavBar, Button, Dialog, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Button).use(Dialog).use(Toast);


export default{
  inject: ['reload'],
    data () {
        return {
          Img:img.images,
          loginBtnTxt:"登录",
          userName:"",
          userPass:"",
          buttonState:true,
          content: '为保证用户安全，不支持该操作。如需修改，请联系代理商或运营中心！'
        }
    },
    methods: {
      loginHome(){
        this.buttonState=false;
        if(this.userName=="" || this.userPass==""){
            Toast('用户名或密码不能为空！');
            this.reload();
            this.buttonState=true;
        }else{
          setTimeout(()=>{
            if (this.userName==15058665861 && this.userPass=="admin") {
              this.$router.push({path:'/Tab'});
              this.buttonState=true;
            }else if(this.userName!=15058665861 || this.userPass!="admin"){
                Toast('用户名或密码错误！');
                this.reload();
                this.buttonState=true;
            }
          },3000)
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
      goRegistNum(){
        this.$router.push({path:'/RegistNum'});
      }
    },
    mounted () {
      
    }
}
</script>

<style scoped>
.loginTitle {
  margin:50px 0;
  text-align: center;
}

.loginTitleImg {
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 50%;
  border:1px solid #000;
}
.inputBig input{
  border: 0;
  outline: 0;
  width: 80%;
  line-height: 25px;
}
.inputBig i{
  width: 30px;
  height: 30px;
  font-size: 26px;
  margin: 10px;
}
.inputUser,.inputPass{
  line-height: 55px;
  border: 1px solid #ddd; 
  border-left: 0;
  border-right: 0;
}
.inputPass{
  border-top: 0;
}
.inputPass i{
  font-size: 28px;
}
.inputUser i{
  margin: 11px;
}
.loginBottom{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.loginBottomLeft{
  float: left;
  color:#888;
}
.loginBottomRight{
  float: right;
  color:#f90;
}



</style>



