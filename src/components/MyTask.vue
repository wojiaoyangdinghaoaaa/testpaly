<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="我的任务"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-tabs v-model="active" @click="onClick" sticky>
                <van-tab title="已领取">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="list"  v-for="(list,index) in lists" :key="index">
                                <p class="taskInfo">
                                    <img :src="list.task.picture">
                                    <span class="taskName">{{list.task.title}}</span>
                                    <span class="taskPrice">+{{list.task.price}}.00</span>
                                </p>
                                <p>领取时间:&nbsp;&nbsp;{{list.takeTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>
                            
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="待审核">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   

                            <div class="list"   v-for="(list,index) in lists" :key="index">
                                <p class="taskInfo">
                                    <img :src="list.task.picture">
                                    <span class="taskName">{{list.task.title}}</span>
                                    <span class="taskPrice">+{{list.task.price}}.00</span>
                                </p>
                                <p>领取时间:&nbsp;&nbsp;{{list.takeTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>提交时间:&nbsp;&nbsp;{{list.submitTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>回复内容:&nbsp;&nbsp;{{list.submitContent}}</p>
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>

                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="已审核">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="list"   v-for="(list,index) in lists" :key="index">
                                <p class="taskInfo">
                                    <img :src="list.task.picture">
                                    <span class="taskName">{{list.task.title}}</span>
                                    <span class="taskPrice">+{{list.task.price}}.00</span>
                                </p>
                                <p>领取时间:&nbsp;&nbsp;{{list.takeTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>提交时间:&nbsp;&nbsp;{{list.submitTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>回复内容:&nbsp;&nbsp;{{list.submitContent}}</p>
                                <p>审核时间:&nbsp;&nbsp;{{list.checkTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>


                        </van-list>
                    </van-pull-refresh>  
                </van-tab>
                <van-tab title="未通过">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="list"   v-for="(list,index) in lists" :key="index">
                                <p class="taskInfo">
                                    <img :src="list.task.picture">
                                    <span class="taskName">{{list.task.title}}</span>
                                    <span class="taskPrice">+{{list.task.price}}.00</span>
                                </p>
                                <p>领取时间:&nbsp;&nbsp;{{list.takeTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>提交时间:&nbsp;&nbsp;{{list.submitTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <p>回复内容:&nbsp;&nbsp;{{list.submitContent}}</p>
                                <p>审核时间:&nbsp;&nbsp;{{list.checkTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                <div @click="aginPush(list)">重新提交</div>
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>

                        </van-list>
                    </van-pull-refresh>     
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
import {getUserLoginState,getUserTaskList,putReceiveTask} from '../api/getData';
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
            noThing:img.noThing,
            status:0,
        };
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClick(){
            if (this.active==0) {
                this.status=0;
                var limit={
                    userId:Number(this.$cookie.get('userId')),
                    status:this.status
                }
                this.getList(limit);
            }else if (this.active==1) {
                this.status=1;
                var limit={
                    userId:Number(this.$cookie.get('userId')),
                    status:this.status
                }
                this.getList(limit);
            }else if (this.active==2) {
                this.status=2;
                var limit={
                    userId:Number(this.$cookie.get('userId')),
                    status:this.status
                }
                this.getList(limit);
            }else if (this.active==3) {
                this.status=3;
                var limit={
                    userId:Number(this.$cookie.get('userId')),
                    status:this.status
                }
                this.getList(limit);
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
            setTimeout(() => {
                var limit={
                    userId:Number(this.$cookie.get('userId')),
                    status:this.status
                }
                this.getList(limit);
                Toast('刷新成功!');
            }, 1000);
        },
        aginPush(list){
            // Toast('提交成功！');
            var userid=list.userId;
            var taskid=list.taskId;
            var limit={
                userId:userid,
                taskId:taskid,
            }
                putReceiveTask(limit).then(res=>{
                    if(res.data.success==true){
                        Toast('提交成功！');
                        var limit={
                            userId:Number(this.$cookie.get('userId')),
                            status:3
                        }
                        this.getList(limit);  
                    }else{
                        Toast(res.data.message);
                    }
                })
        },
        getList(limit){
            getUserTaskList(limit).then(res=>{
                if (res.data.success==true) {
                    this.lists=res.data.data;
                    this.refreshing = false;
                }else{
                    Toast(res.data.message);
                }
            })
        }
    },
    mounted () {
      var limit={
        userId:Number(this.$cookie.get('userId')),
        status:0
      }
      this.getList(limit);  
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
.list{
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;
    border-bottom: 1px solid#E8E8E8;
    position: relative;
}
.list p{
    margin: 10px 0;
    color: #505050;
    font-size: 14px;
}
.list div{
    position: absolute;
    right: 0;
    top: 50%;
    padding: 5px 10px;
    color: #fff;
    border-radius: 6px;
    font-size: 15px;
    background: #0099FF;
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
.taskInfo{
    width: 100%;
    overflow: hidden;
    line-height: 40px;
}
.taskInfo img{
    float: left;
    width: 40px;
    height: 40px;
}
.taskInfo .taskName{
    float: left;
    font-size: 14px;
    padding-top: 2px;
    box-sizing: border-box;
    font-weight: 600;
    margin-left: 18px;
    color: #000;
}
.taskInfo .taskPrice{
    float: right;
    color: #fe433a;
    font-size: 14px;
    padding-top: 2px;
    box-sizing: border-box;
    font-weight: 600;
}
</style>


