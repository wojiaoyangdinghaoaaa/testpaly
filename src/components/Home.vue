<template>
    <div class="cantain">
        <div class="top">
            <!-- 字体滚动 -->
            <van-notice-bar
            :text="scrollspan"
            :left-icon="hornUrl"
            />
            <!-- 轮播图 -->
            <van-swipe :autoplay="5000">
                <van-swipe-item  v-for="(img, index) in imgs" :key="index">
                    <img :src="img"/>
                </van-swipe-item>
            </van-swipe>
            <!-- 任务情况 -->
            <div class="taskStatus">
                <div>
                    <div class='taskspan'>
                        <div>总人气</div>
                        <div class='taskNum'>119153</div>
                    </div>
                    <i class="taskIcon peopleIcon"></i>
                </div>
                <div>
                    <div class='taskspan'>
                        <div>已发布</div>
                        <div class='taskNum'>89765</div>
                    </div>
                    <i class="taskIcon issueIcon"></i>
                </div>
                <div>
                    <div class='taskspan'>
                        <div>已完成</div>
                        <div class='taskNum'>3699872</div>
                    </div>
                    <i class="taskIcon finishIcon"></i>
                </div>
            </div>
              <!-- 最新任务 -->
            <div class="newTask">最新任务</div>
        </div>
        
        <div class="list">
            <!-- 任务列表 -->
            <div class='taskList' @click="goDetail">
                <div class='taskListStatus'>
                    <img src='http://img5.imgtn.bdimg.com/it/u=3719079994,1913545685&fm=26&gp=0.jpg' class='taskListImg'/>
                    <div class='taskListInfo'>
                        <div class='taskListName'>
                            超级玛丽（安卓）第四期
                        </div>
                        <div class='taskListNember'>
                            <span>已抢28327份</span>
                            <span>剩余71672份</span>
                        </div>
                    </div>
                </div>
                <div class='taskListNum'>
                    <div class='taskListMomey'>+4.00元</div>
                    <div class='taskListState'>任务进行中</div>
                </div>
            </div>

            <div class='taskList'>
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
            </div>

            <div class='taskList'>
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
            </div>

        </div>

        
    </div>
</template>
<script>
import img from '../../static/json/index.json';
import { NavBar, NoticeBar, Swipe, SwipeItem} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(NoticeBar).use(Swipe).use(SwipeItem);

export default {
    data () {
        return {
            hornUrl:img.horn,
            scrollspan:"足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
            imgs: [
                'https://timgsa.baidu.com/timg?img&quality=80&size=b9999_10000&sec=1539424807423&di=2ddf1f1b098c7e8c2850d1f268b572e6&imgtype=0&src=http%3A%2F%2Fres.cngoldres.com%2Fupload%2F2015%2F0414%2Fc6cb66cd12a77199ab649f836bf62d34.jpg%3F_%3D1428978369311',
                'https://timgsa.baidu.com/timg?img&quality=80&size=b9999_10000&sec=1539424864350&di=ccf8338e612f137a43f059a94e7f82c1&imgtype=0&src=http%3A%2F%2Fhimg2.huanqiu.com%2Fattachment2010%2F2017%2F1116%2F20171116021011617.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335311430,4287071869&fm=26&gp=0.jpg',
                'https://timgsa.baidu.com/timg?img&quality=80&size=b9999_10000&sec=1540734575&di=b624f93418e0135d40cd150812d351ae&imgtype=jpg&er=1&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmw690%2F001oaouagy6XwS7oz30b6%26amp%3B690'
            ]
        }
    },
    methods: {
        goDetail(){
            this.$router.push({path:'/Detail'});
        }
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
.taskListNember>text{
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
.taskListState{
  font-size:10px;
  background:#fd9113;
  color:#ffffff;
  border-radius:5px;
  margin-top:5px;
}
</style>


