<template>
    <div  class='contain'>
            <!-- header部分 -->
            <van-nav-bar
            title="账户余额"
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="content">
            <div class='momeyBig'>
                <div class='momeyNum'>
                    您的余额
                    <span>{{data.balance}}.00</span>
                    元，最低提现额度为
                    <span>20</span>
                    元，
                </div>
                <div class='momeyInput'>
                    <div class='momeyInputLeft'>提现金额</div>
                    <div class='momeyInputRight'>
                        <input type='text' placeholder-class="psection" placeholder="请输入数值" v-model="momeyNum"/>
                        <span>元</span>
                    </div>
                </div>
                <div class='momeyRule'>提现小于等于100元手续费2元，大于100元按2%手续费计算</div>
            </div>
            <div class='momeyBtn' @click="getMomey">提现</div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,getUserInforn,userPutMomey} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);
export default {
    data () {
        return {
            data:'',
            momeyNum:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        getMomey(){
            if (this.momeyNum=='') {
                Toast('提现金额不能为空!');
            }else{
                if(this.momeyNum<20){
                    Toast('最低提现额度为20元');
                }else{
                    if (this.data.balance<this.momeyNum) {
                        Toast('余额不足，无法提现!');
                    }else{
                        var  limit={
                            userId:Number(this.$cookie.get('userId')),
                            money:this.momeyNum
                        }
                        userPutMomey(limit).then(res=>{
                            if (res.data.success==true) {
                                this.momeyNum='';
                                Toast('提现成功!');
                                var limit={
                                    id:Number(this.$cookie.get('userId'))
                                }
                                this.getInforn(limit)
                            }else{
                                Toast(res.data.message);
                            }
                        })
                    }
                }
            }
        },
        getInforn(limit){
            getUserInforn(limit).then(res=>{
                if (res.data.success==true) {
                    this.data=res.data.data;
                }else{
                    Toast('加载失败，请刷新后重新加载!');
                }
            })  
        }
    },
    mounted () {
        var limit={
            id:Number(this.$cookie.get('userId'))
        }
        this.getInforn(limit);
    },
    created () {
        var limit={
            id:Number(this.$cookie.get('userId'))
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
.contain{
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
  padding: 0 10px;
  box-sizing: border-box;
  padding-top:25px;
}
.content span{
  color: red;
}
.momeyNum{
  font-size: 14px;
  color: #B0B0B0;
  margin-bottom:23px;
}
.momeyInput{
  overflow: hidden;
  font-size:17px;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #E0E0E0;
}
.momeyInputLeft{
  float: left;
}
.momeyInputRight{
  float: right;
  overflow: hidden;
}
.momeyInputRight input{
  float: left;
  font-size: 15px;
  text-align: right;
  padding-right: 5px;
  box-sizing: border-box;
  border: 0;
}
.psection{
    color: #B0B0B0;
}
.momeyInputRight span{
  float: right;
  margin-top:-2px;
}
.momeyRule{
  text-align: center;
  color:#B0B0B0;
  font-size: 12px;
  margin:13px 0 30px 0;
}
.momeyBtn{
  background: #0099FF;
  color: #fff;
  font-size: 15px;
  padding:10px 0;
  text-align:center;
  border-radius:9px;
}
</style>


