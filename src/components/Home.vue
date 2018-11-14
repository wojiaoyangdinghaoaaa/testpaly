<template>
    <div class="cantain">
        <div class="top">
            <!-- 字体滚动 -->
            <van-notice-bar
            :text="scrollspan"
            :left-icon="hornUrl"
            @click="goInformDetail"
            />
            <!-- 轮播图 -->
            <van-swipe :autoplay="5000">
                <van-swipe-item  v-for="(img, index) in imgs" :key="index">
                    <a :href="img.url">
                        <img :src="img.imgAddress"/>
                    </a>
                    
                </van-swipe-item>
            </van-swipe>
            <!-- 任务情况 -->
            <div class="taskStatus">
                <div>
                    <div class='taskspan'>
                        <div>总人气</div>
                        <div class='taskNum'>{{indexNum.userCount}}</div>
                    </div>
                    <i class="taskIcon peopleIcon"></i>
                </div>
                <div>
                    <div class='taskspan'>
                        <div>已发布</div>
                        <div class='taskNum'>{{indexNum.taskCount}}</div>
                    </div>
                    <i class="taskIcon issueIcon"></i>
                </div>
                <div>
                    <div class='taskspan'>
                        <div>已完成</div>
                        <div class='taskNum'>{{indexNum.finishCount}}</div>
                    </div>
                    <i class="taskIcon finishIcon"></i>
                </div>
            </div>
              <!-- 最新任务 -->
            <div class="newTask">最新任务</div>
        </div>
        
        <div class="list">
            <!-- 任务列表 -->
            <div class='taskList' v-for="(list,index) in lists" :key="index" @click="goDetail(list.id)" >
                <div class='taskListStatus'>
                    <img :src='list.picture' class='taskListImg'/>
                    <div class='taskListInfo'>
                        <div class='taskListName'>
                            <!-- 超级玛丽（安卓）第四期 -->
                            {{list.title}}
                        </div>
                        <div class='taskListNember'>
                            <span>已抢{{list.num}}份</span>
                            <span>剩余{{list.total}}份</span>
                        </div>
                    </div>
                </div>
                <div class='taskListNum'>
                    <div class='taskListMomey'>+{{list.price}}.00元</div>
                    <div class='taskListShowState' v-if="nowTime>=list.createTime && nowTime<=list.endTime">任务进行中</div>
                    <div class='taskListHidState' v-else>任务已结束</div>
                </div>
            </div>

            <!-- <div class='taskList'>
                <div class='taskListStatus'>
                    <img src='http://img.zcool.cn/community/0151f65775e18b0000012e7e4046ef.jpg@2o.jpg' class='taskListImg'/>
                    <div class='taskListInfo'>
                        <div class='taskListName'>
                            刺激战场（安卓）第四期
                        </div>
                        <div class='taskListNember'>
                            <span>已抢28313份</span>
                            <span>剩余71786份</span>
                        </div>
                    </div>
                </div>
                <div class='taskListNum'>
                    <div class='taskListMomey'>+4.00元</div>
                    <div class='taskListState'>任务进行中</div>
                </div>
            </div> -->

        </div>

        
    </div>
</template>
<script>
import {getUserLoginState,getNewInform,getIndexImg,getIndexNum,getTaskList,} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, NoticeBar, Swipe, SwipeItem, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(NoticeBar).use(Swipe).use(SwipeItem).use(Toast);

export default {
    data () {
        return {
            hornUrl:img.horn,
            informId:'',
            indexNum:'',
            lists:'',
            scrollspan:"",
            imgs: [],
            ifShow:'',
            nowTime:'',
        }
    },
    methods: {
        goDetail(id){
            this.$router.push({path:'/Detail',query:{id:id}});
        },
        goInformDetail(){
            this.$router.push({path:'/InformDetail',query:{id:this.informId}});
        }
    },
    mounted () {
        // 获取首页滚动通知
        getNewInform().then(res=>{
            this.scrollspan=res.data.data.title;
            this.informId=res.data.data.id;
        })
        // 获取首页数据
        getIndexNum().then(res=>{
            this.indexNum=res.data.data;
        })
        // 获取轮播图
        getIndexImg().then(res=>{
            this.imgs=res.data.data;
        })
        // 获取任务列表
        getTaskList().then(res=>{
            this.lists=res.data.data;
        })
        this.nowTime=Date.parse(new Date())/1000;  
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
}
.top{

}
.van-notice-bar{
    color: #f94343;
}
.van-swipe{
    height: 220px;
}
.van-swipe img{
    width: 100%;
    height: 100%;
}

/* 任务情况 */
.taskStatus{
  height: 50px;
  width: 100%;
  padding:22px 0;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
}

.taskStatus>div{
  width: 30%;
  height: 100%;
  background:#F0F0F0;
  border-radius:9px;
  overflow: hidden;
  padding:9px 13px;
  box-sizing:border-box;


}
.taskspan{
  font-size: 12px;
  float: left;
  line-height:18px;
  color: #A8A8A8;
}

.taskNum{
  color: #0099FF;
}

.taskIcon{
  float: right;
  margin-top:3px;
}

.peopleIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  color: #ffffff;
  content: '\e60e'
}

.issueIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  color: #ffffff;
  content: '\e616'
}

.finishIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  color: #ffffff;
  content: '\e65c'
}

/* 最新任务 */
.newTask{
  box-sizing: border-box;
  color: #787878;
  border-bottom: 2px solid #d7e8ff;
  width:74px;
  margin-left:10px;
  padding:5px;
  font-size:16px;
}

/* 任务列表 */
list{
    
}
.taskList{
  height: 80px;
  width: 100%;
  overflow: hidden;
  padding: 5px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #F0F0F0;
}

.taskListStatus{
  float: left;
  width: 80%;
  height: 100%;
  overflow: hidden;
  padding-top: 9px;
  box-sizing: border-box;
}

.taskListImg{
  height: 50px;
  width: 50px;
  float: left;
}

.taskListInfo{
  float: left;
  font-size: 15px;
  margin-left:13px;
  padding:2px 0;
  box-sizing:border-box;
  line-height:25px;
}
.taskListNember{
  font-size:12px;
  color:#A8A8A8;
}
.taskListNember>span{
  margin-right:11px;
}


.taskListNum{
  float: right;
  width:20%;
  padding-top:13px;
  text-align:center;
  line-height:19px;
}
.taskListMomey{
  font-size:26rpx;
  color: #fe433a;
}
.taskListShowState{
  font-size:10px;
  background:#fd9113;
  color:#ffffff;
  border-radius:5px;
  margin-top:5px;
}
.taskListHidState{
  font-size:10px;
  background:#009933;
  color:#ffffff;
  border-radius:5px;
  margin-top:5px;
}
</style>


