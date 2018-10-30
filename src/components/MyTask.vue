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
                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                            </div>

                            <!-- <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div> -->
                            
                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
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

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                            </div>


                            <!-- <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div> -->

                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
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
                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                            </div>


                            <!-- <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div> -->

                            
                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
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
                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                                <div @click="aginPush">重新提交</div>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                                <div @click="aginPush">重新提交</div>
                            </div>

                            <div class="list">
                                <p>领取时间:&nbsp;2018-10-25</p>
                                <p>任务名称:&nbsp;超级玛丽（安卓）第四期</p>
                                <p>提交时间:&nbsp;2018-10-25</p>
                                <p>回复内容:&nbsp;九游--彼岸花开--张三三</p>
                                <p>审核时间:&nbsp;2018-10-25</p>
                                <div @click="aginPush">重新提交</div>
                            </div>


                            <!-- <div class="noThingBig">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div> -->

                            
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
        aginPush(){
            Toast('提交成功！');
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
    top: 38%;
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
</style>


