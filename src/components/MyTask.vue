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
                            
                            <!-- <div  v-if="list.length==45">没有更多数据了</div> -->
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="已审核">
                    <div class="tabContent">
                        已审核
                    </div>    
                </van-tab>
                <van-tab title="未通过">
                    <div class="tabContent">
                        未通过
                    </div>     
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
import { NavBar, Tab, Tabs, List, PullRefresh} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Tab).use(Tabs).use(List).use(PullRefresh);

export default {
    data() {
        return {
            active:0,
            list: [],
            refreshing: false,
            loading: false,
            finished: true//false
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
            //         this.list.push(text);
            //     }
            //     this.loading = false;
            //         if (this.list.length >= 45) {
            //         this.finished = true;
            //     }
            // }, 5000);
        },
        onRefresh() {
            // setTimeout(() => {
            //     this.list = [];
            //     this.finished = false;
            //     this.refreshing = false;
            //     for (let i = 0; i < 15; i++) {
            //         const text = this.list.length + 1;
            //         this.list.push(text);
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
.tabContent{
    height: 1000px;
}
</style>


