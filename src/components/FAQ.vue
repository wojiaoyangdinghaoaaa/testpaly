<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="常见问题"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            
            <div class='lists'>

                <div class='list' @click="goCheckTime">
                    <span class='listLeft'>任务审核需要多久？</span>
                    <div class='listRight'>
                        <span></span>
                        <i></i>
                    </div>
                </div>

                <div class='list' @click="goCheckNoPass">
                    <span class='listLeft'>任务审核为什么会不通过？</span>
                    <div class='listRight'>
                        <span></span>
                        <i></i>
                    </div>
                </div>

                <div class='list'  @click="goCheckMoney">
                    <span class='listLeft'>提现会多久到账？</span>
                    <div class='listRight'>
                        <span></span>
                        <i></i>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        goCheckTime(){
            this.$router.push({path:'/CheckTime'});
        },
        goCheckNoPass(){
            this.$router.push({path:'/CheckNoPass'});
        },
        goCheckMoney(){
            this.$router.push({path:'/CheckMoney'});
        }
    },
    created () {
        var limit={
            id:Number(localStorage.getItem('userId'))
        }
        getUserLoginState(limit).then(res=>{
            if (res.data.success==false) {
                this.$router.push({path:'/'});
                Toast('登录过期，请重新登录！');
            }

        })
    }
}
</script>
<style scoped>
.cantain{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.headerNav{
    height: 46px;
    width: 100%;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.van-icon-arrow:before{
    color: #fff !important;
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
}

.lists{
  width: 100%;
}
.list{
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height:46px;
  border-bottom:1px solid #F0F0F0;
}
.listLeft{
  float: left;
  font-size: 16px;
}
.listRight{
  float: right;
  font-size: 16px;
  color:#A8A8A8;
}
.listRight>i:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: #b9b9b9;
  content: '\e603'
}

</style>


