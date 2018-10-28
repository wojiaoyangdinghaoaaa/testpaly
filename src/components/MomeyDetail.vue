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
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">任务收益</p>
                                    <p class="listLeftTime">2018-10-26 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+4.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">余额提现</p>
                                    <p class="listLeftTime">2018-10-26 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-50.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">任务收益</p>
                                    <p class="listLeftTime">2018-10-24 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+3.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">余额提现</p>
                                    <p class="listLeftTime">2018-10-24 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-100.00</p>
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
                <van-tab title="任务收益">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">任务收益</p>
                                    <p class="listLeftTime">2018-10-26 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+4.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">任务收益</p>
                                    <p class="listLeftTime">2018-10-24 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+3.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">任务收益</p>
                                    <p class="listLeftTime">2018-10-27 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightAdd">+5.00</p>
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
                <van-tab title="提现记录">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   


                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">余额提现</p>
                                    <p class="listLeftTime">2018-10-26 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-50.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">余额提现</p>
                                    <p class="listLeftTime">2018-10-24 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-100.00</p>
                                </div> 
                            </div>

                            <div class="list">
                                <div class="listLeft">
                                    <p class="listLeftName">余额提现</p>
                                    <p class="listLeftTime">2018-10-27 18:14:27</p>
                                </div>
                                <div class="listRight">
                                    <p class="listRightSub">-150.00</p>
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
                <van-tab title="充值记录">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        >   
                    


                            <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
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
import img from '../../static/json/index.json';
import { NavBar, Tab, Tabs, List, PullRefresh} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Tab).use(Tabs).use(List).use(PullRefresh);

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
        }
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


