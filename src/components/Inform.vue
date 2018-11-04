<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="通知中心"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-tabs v-model="active" @click="onClick" sticky>
                <van-tab title="通知">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="listAll" @click="goInformDetail">
                                <div class='list'>
                                    <span class='listMessage'>暂停服务公告</span>
                                    <span class='listTime'>2018-04-18</span>
                                </div>
                                <div class='listTitle'>
                                    由于系统维护，暂停系统的开放功能！
                                </div>
                            </div>

                            <div class="listAll">
                                <div class='list'>
                                    <span class='listMessage'>暂停服务公告</span>
                                    <span class='listTime'>2018-04-18</span>
                                </div>
                                <div class='listTitle'>
                                    由于系统维护，暂停系统的开放功能！
                                </div>
                            </div>

                            <!-- <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div> -->
                            
                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="活动">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   

                            <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有活动~</div>
                            </div>

                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                
            </van-tabs>
        </div>

    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, Tab, Tabs, List, PullRefresh, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Tab).use(Tabs).use(List).use(PullRefresh).use(Toast);

export default {
    data() {
        return {
            active:0,
            lists: [],
            refreshing: false,
            loading: false,
            finished: true,//false,
            noThing:img.noThing
        };
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClick(){
            if (this.active==0) {
                console.log("你0")
            }else if (this.active==1) {
                console.log("你1")
            }else if (this.active==2) {
                console.log("你2")
            }else if (this.active==3) {
                console.log("你3")
            }
        },
        onLoad() {
            // setTimeout(() => {
            //     for (let i = 0; i < 15; i++) {
            //         const text = this.list.length + 1;
            //         this.lists.push(text);
            //     }
            //     this.loading = false;
            //         if (this.lists.length >= 45) {
            //         this.finished = true;
            //     }
            // }, 5000);
        },
        onRefresh() {
            // setTimeout(() => {
            //     this.lists = [];
            //     this.finished = false;
            //     this.refreshing = false;
            //     for (let i = 0; i < 15; i++) {
            //         const text = this.lists.length + 1;
            //         this.lists.push(text);
            //     }
            // }, 1000);
        },
        goInformDetail(){
            this.$router.push({path:'/InformDetail'});
        }
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
.cantain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.headerNav{
    height: 46px;
    width: 100%;
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.van-icon-arrow:before{
    color: #fff !important;
}
.noThingBig{
    height: 300px;
    text-align: center;
    padding-top: 110px;
    box-sizing: border-box;    
}
.noThingBig img{
    height: 140px;
}
.noThingBig div{
    font-size: 14px;
    color: #A8A8A8;
    margin-top: 10px;
}
.listAll{
  width: 100%;
  border-bottom: 1px solid #E8E8E8;
  padding: 14px;
  box-sizing: border-box;
}
.list{
  width: 100%;
  overflow: hidden;
}
.listMessage{
  float: left;
  font-size: 18px;
}
.listTime{
  float: right;
  font-size: 13px;
}
.listTitle{
  font-size: 13px;
  color: #B0B0B0;
  text-align:left;
  margin-top:12px;

}
</style>


