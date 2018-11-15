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
                            <div class="listAll" v-for="(list,index) in lists" :key="index" @click="goInformDetail(list.id)">
                                <div class='list'>
                                    <span class='listMessage'>{{list.title}}</span>
                                    <span class='listTime'>{{list.createTime*1000 | datefmt('YYYY-MM-DD')}}</span>
                                </div>
                                <div class='listTitle'>
                                    {{list.title}}
                                </div>
                            </div>
                            <!-- <div  v-if="lists.length==informLength">没有更多数据了</div> -->


                            <div class="noThingBig"   v-if="lists.length<1">
                                <img :src="noThing" />
                                <div>暂时没有记录~</div>
                            </div>
                            
                            
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

                            <div class="listAll" v-for="(list,index) in lists" :key="index" @click="goInformDetail(list.id)">
                                <div class='list'>
                                    <span class='listMessage'>{{list.title}}</span>
                                    <span class='listTime'>{{list.createTime*1000 | datefmt('YYYY-MM-DD')}}</span>
                                </div>
                                <div class='listTitle'>
                                    {{list.title}}
                                </div>
                            </div>
                            <!-- <div  v-if="lists.length==informLength">没有更多数据了</div> -->


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
import {getUserLoginState,getInform} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, Tab, Tabs, List, PullRefresh, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Tab).use(Tabs).use(List).use(PullRefresh).use(Toast);

export default {
    data() {
        return {
            active:0,
            type:1,
            limit:'',
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
                this.type=1;
                this.limit={
                    status:1,
                    type:this.type
                }
                this.getList(this.limit);
            }else if (this.active==1) {
                this.type=2;
                this.limit={
                    status:1,
                    type:this.type
                }
                this.getList(this.limit);
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
                // this.lists = [];
                // this.finished = false;
                // this.refreshing = false;
                // for (let i = 0; i < 15; i++) {
                //     const text = this.lists.length + 1;
                //     this.lists.push(text);
                // }
            // }, 1000);

            setTimeout(() => {
                this.limit={
                    status:1,
                    type:this.type
                }
                this.getList(this.limit);
                Toast('刷新成功!');
            }, 1000);

        },
        goInformDetail(id){
            this.$router.push({path:'/InformDetail',query:{id:id}});
        },
        getList(limit){
            getInform(limit).then(res=>{
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
        this.limit={
            status:1,
            type:1
        }
        this.getList(this.limit);
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


