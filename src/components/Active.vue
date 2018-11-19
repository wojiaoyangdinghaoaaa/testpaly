<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="剩余活跃度"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-circle
                v-model="finishCurrentRate"
                color="#0099FF"
                :rate="finishRate"
                :speed="100"
                :stroke-width="60"
                size="130px"
                layer-color="#eee"
                :text="finishCurrentRate.toFixed(0) + '%'"
            />
            <van-circle
                v-model="remainCurrentRate"
                color="#13ce66"
                fill="#fff"
                :rate="remainRate"
                size="130px"
                layer-color="#eee"
                :speed="100"
                :stroke-width="60"
                :clockwise="false"
                :text="remainCurrentRate.toFixed(0) + '%'"
            />
            <div class="inform">
                <div class="informFinish">完成活跃度:{{number}}</div>
                <div class="informRemain">剩余活跃度:{{2-number}}</div>
            </div>
            <div class="bottom" v-if="number!=2">
                <div class="text">
                    您当日还可完成
                    <span>{{2-number}}</span>
                    个任务,快去看看吧
                </div>
                <div class="btn" @click="goHome">去看看</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,getUserActivity} from '../api/getData';
import { NavBar, Circle, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Circle).use(Toast);

export default {
  data () {
      return {
          finishRate:0,
          remainRate: 0,
          finishCurrentRate: 0,
          remainCurrentRate: 0,
          number:''
      }
  },
  methods: {
    onClickLeft(){
        this.$router.go(-1);
    },
    goHome(){
        this.$router.push({path:'/Tab'});
    }
  },
  mounted () {
        var limit={
            userId:Number(this.$cookie.get('userId'))
        }
      getUserActivity(limit).then(res=>{
          if (res.data.success==true) {
              this.number=res.data.data;
              if(this.number==0){
                  this.finishRate=0;
                  this.remainRate=100;
              }else if(this.number==1){
                  this.finishRate=50;
                  this.remainRate=50;
              }else if(this.number==2){
                  this.finishRate=100;
                  this.remainRate=0;
              }

          }else{
              Toast('加载失败，请刷新后重新加载！');
          }
      })
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
    padding-top: 28px;
    box-sizing: border-box;
}
.van-circle{
    margin-left: 50px;
}
.inform{
    width: 100%;
    overflow: hidden;
    margin-top: 12px;
    font-size: 18px;
}
.informFinish{
    float: left;
    width: 50%;
    text-align: center;
}
.informRemain{
    float: right;
    width: 50%;
    text-align: center;
}
.bottom{
    width: 100%;
    margin-top: 50px;
}
.text{
    color: #A8A8A8;
    font-size: 15px;
    margin: 14px 0;
    text-align: center;
}
.text span{
    color: #000;
}
.btn{
    width: 80%;
    margin: 0 auto;
    line-height: 44px;
    background: #0099FF;
    color: #fff;
    text-align: center;
    border-radius: 6px;
}
</style>