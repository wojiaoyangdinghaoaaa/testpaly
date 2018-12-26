<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="资金明细"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-tabs v-model="active" @click="onClick" sticky>
                <van-tab title="全部记录">
                    <div>
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="list"  v-for="(list,index) in lists" :key="index">
                                <div class="listLeft">
                                    <p class="listLeftName">{{list.typeName}}</p>
                                    <p class="listLeftTime">{{list.createTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd" v-if="list.type==1">+{{list.money}}.00</p>
                                    <p class="listRightSub" v-else-if="list.type==0">-{{list.money}}.00</p>
                                </div> 
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>


                        </van-list>
                    </div>
                </van-tab>
                <van-tab title="任务收益">
                    <div>
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   

                            <div class="list"  v-for="(list,index) in lists" :key="index">
                                <div class="listLeft">
                                    <p class="listLeftName">{{list.typeName}}</p>
                                    <p class="listLeftTime">{{list.createTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+{{list.money}}.00</p>
                                </div> 
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>


                        </van-list>
                    </div>
                </van-tab>
                <van-tab title="提现记录">
                    <div>
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   


                            <div class="list"  v-for="(list,index) in lists" :key="index">
                                <div class="listLeft">
                                    <p class="listLeftName">{{list.typeName}}</p>
                                    <p class="listLeftTime">{{list.createTime*1000 | datefmt('YYYY-MM-DD HH:mm:ss')}}</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-{{list.money}}.00</p>
                                </div> 
                            </div>

                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>


                        </van-list>
                    </div>  
                </van-tab>
                <van-tab title="充值记录">
                    <div>
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                    


                            <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>

                            
                        </van-list>
                    </div>     
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
import {getUserLoginState,getMomeyDetail} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, Tab, Tabs, List, PullRefresh, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Tab).use(Tabs).use(List).use(PullRefresh).use(Toast);

export default {
    data() {
        return {
            id:'',
            active:0,
            lists: [],
            refreshing: false,
            loading: false,
            finished: true,//false,
            noThing:img.noThing,
            type:''
        };
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClick(){
            if (this.active==0) {
                this.type=null;
                var limit={
                    userId:this.id,
                    type:null
                }
                this.getList(limit);  
            }else if (this.active==1) {
                this.type=1;
                var limit={
                    userId:this.id,
                    type:this.type
                }
                this.getList(limit);
            }else if (this.active==2) {
                this.type=0;
                var limit={
                    userId:this.id,
                    type:this.type
                }
                this.getList(limit);
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
            setTimeout(() => {
                var limit={
                    userId:this.id,
                    type:this.type
                }
                this.getList(limit);
                Toast('刷新成功!');
            }, 1000);
        },
        getList(limit){
            getMomeyDetail(limit).then(res=>{
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
            userId:this.id,
        }
        this.getList(limit);  
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
.content::-webkit-scrollbar{
    width:0;height:0
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
    overflow: hidden;
}
.listLeft{
    float: left;
}
.listLeft p{
    margin: 0;
    margin-top: 10px;
}
.listLeftName{
    /* font-size: 16px; */
}
.listLeft .listLeftTime{
    font-size: 12px;
    margin: 5px 0;
    color: #888888;
}
.listRight{
    float: right;
}
.listRight p{
    font-size: 18px;
    margin: 0;
    line-height: 54px;
}
.listRightAdd{
    color: #fe433a;
}
.listRightSub{
    color: green;
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
</style>


