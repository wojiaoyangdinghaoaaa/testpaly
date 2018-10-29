<template>
    <div class="cantain">
        <!-- 头图 -->
        <div class='titleImgBig'>
            <img :src="bgImgUrl" class='titleImg'/>
            <i class="setIcon" @click="goSetting"></i>
            <div class="userName">小怪兽123</div>
            <div class='titleCard'>
                <div @click="goMoney">
                    <img :src="momeyImgUrl"/>
                    <div>账户余额</div>  
                </div>
                <div @click="goMyTask">
                    <img :src="finishImgUrl"/>
                    <div>我的任务</div>  
                </div>
                <div  @click="goActive">
                    <img :src="activeImgUrl"/>
                    <div>剩余活跃度</div>  
                </div>
                <div @click="goVipStatus">
                    <img :src="vipImgUrl"/>
                    <div>会员状态</div>  
                </div>
            </div>
            <div  class="userinfo">
                <img class="userinfo-avatar" :src="Img"/>
            </div>
        </div>

        <!-- 列表 -->

        <div class='listAll'>

            <div class='lists' @click="goMomeyDetail">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftMomeyIcon'></i>
                    <span class='listsLeftText'>资金明细</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goAddress">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftMyIcon'></i>
                    <span class='listsLeftText'>收货地址</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goInform">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftInformIcon'></i>
                    <span class='listsLeftText'>通知中心</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goHelp">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftHelpIcon'></i>
                    <span class='listsLeftText'>帮助中心</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goQuestion">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftQuestionIcon'></i>
                    <span class='listsLeftText'>意见反馈</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goService">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftServiceIcon'></i>
                    <span class='listsLeftText'>在线客服</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

            <div class='lists' @click="goAboultUs">
                <div class='listsLeft'>
                    <i class='listsLeftIcon listsLeftAboultUsIcon'></i>
                    <span class='listsLeftText'>关于我们</span>
                </div>
                <i class="listsRightIcon"></i>
            </div>

        </div>

    </div>
</template>
<script>
import img from '../../static/json/index.json';
import { NavBar} from 'vant';
import Vue from 'vue';

Vue.use(NavBar);

export default {
    data () {
        return {
            Img:img.images,
            bgImgUrl:img.bgImg,
            momeyImgUrl:img.momeyImg,
            finishImgUrl:img.finishImg,
            activeImgUrl:img.activeImg,
            vipImgUrl:img.vipImg
        }
    },
    methods: {
        goSetting(){
            this.$router.push({path:'/Setting'});
        },
        goMoney(){
            this.$router.push({path:'/Money'});
        },
        goMyTask(){
            this.$router.push({path:'/MyTask'});
        },
        goActive(){
            this.$router.push({path:'/Active'});
        },
        goVipStatus(){
            this.$router.push({path:'/VipStatus'});
        },
        goMomeyDetail(){
            this.$router.push({path:'/MomeyDetail'});
        },
        goAddress(){
            this.$router.push({path:'/Address'});
        },
        goInform(){
            this.$router.push({path:'/Inform'});
        },
        goHelp(){
            this.$router.push({path:'/Help'});
        },
        goQuestion(){
            this.$router.push({path:'/Question'});
        },
        goService(){
            this.$router.push({path:'/Service'});
        },
        goAboultUs(){
            this.$router.push({path:'/AboultUs'});
        }
    }
}
</script>
<style scoped>
.cantain{
    width: 100%;
}
/* 头图 */

.titleImgBig{
  width: 100%;
  height: 180px;
  box-sizing: border-box;
  position: relative;
}
.titleImg{
  width: 100%;
  height: 100%;
}
.titleCard{
  width: 94%;
  height: 135px;
  background: #ffffff;
  position:absolute;
  top:64%;
  border-radius:10px;
  left:3%;
  box-shadow:1px 2px 6px #0099FF;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  padding-top:50px;
  box-sizing:border-box;
}
.titleCard>div{
  width: 22%;
  font-size: 15px;
  color: 	#707070;
  text-align: center;
}
.titleCard img{
  width: 45px;
  height: 40px;
}
.userinfo {
  height:90px;
  width:90px;
  position:absolute;
  top:38%;
  left:50%;
  margin-left:-45px;
  padding:5px;
  box-sizing:border-box;
  background:#ffffff;
  border-radius:50%;
  border:1px solid #000;
}
.userinfo-avatar {
  width:100%;
  height:100%;
  border-radius:50%;
}
.userName{
  position:absolute;
  top:16%;
  width:100%;
  text-align:center;
  color:#ffffff;

}
.setIcon{
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  top: 4%;
  right: 4%;
}
.setIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
  color: #ffffff;
  content: '\e61d';
}


/* 列表 */

.listAll{
  width: 100%;
  margin-top: 110px;
  padding: 0 20px;
  box-sizing: border-box;
}

.lists{
  overflow: hidden;
  color:#949494;
  font-size:18px;
  margin-bottom: 20px;
}
.listsLeft{
  float: left;
  overflow: hidden;
}
.listsLeftIcon{
  float: left;
  margin-right:13px;
}
.listsLeftMomeyIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e631'
}
.listsLeftMyIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e60d'
}
.listsLeftInformIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  color: #0099FF;
  content: '\e6db'
}
.listsLeftHelpIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e604'
}
.listsLeftQuestionIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e7de'
}
.listsLeftServiceIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e627'
}
.listsLeftAboultUsIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  color: #0099FF;
  content: '\e645'
}
.listsLeftText{
  float: left;
  margin-top:5rpx;
  letter-spacing:4rpx;
}
.listsRightIcon{
  float: right;
}
.listsRightIcon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: #b9b9b9;
  content: '\e603'
}
</style>

