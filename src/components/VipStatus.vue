<template>
    <div class="contain">
        <!-- header部分 -->
        <van-nav-bar
        title="会员状态"
        left-arrow
        @click-left="onClickLeft"
        />

        <div class='containBig'>
            <div class='containTop'>
                <div class='cardInfo'>
                    <div class='cardName'>乐游暇</div>
                    <div class='cardClass'>
                        <span>会员等级:</span>
                        <span>普通</span>
                    </div>
                    <div class='cardId'>会员ID:{{data.id}}</div>
                <div  class="cardImg">
                    <img :src="Img"/>
                </div>
                </div>
            </div>
            <div class='containBottom'>
                <div class='containBottomBtn'>
                    <div class='containBottomLeft' @click="momey">充值</div>
                    <div class='containBottomRight'  @click="goShop">购物</div>
                </div>
                <div class='containBottomNum'>
                    <div>余额(元)</div>
                    <div class='containBottomNumber'>{{data.balance}}.00</div>
                </div>
            </div>
        </div>

        <div class='lists'>

            <div class='list'>
                <span class='listLeft'>我的等级</span>
                <div class='listRight'>
                    <span>普通会员</span>
                    <i></i>
                </div>
            </div>

            <div class='list' @click='goEnjoy'>
                <span class='listLeft'>享受权益</span>
                <div class='listRight'>
                    <span></span>
                    <i></i>
                </div>
            </div>
            <div class='list'  @click='goUpgrade'>
                <span class='listLeft'>升级会员</span>
                <div class='listRight'>
                    <span></span>
                    <i></i>
                </div>
            </div>
        </div>

        <van-popup v-model="upgradeShow" :close-on-click-overlay="false">
            <div class="upgradeShow">
                <div class="upgradeImg">
                    <img :src="upgradeImg" />
                </div>
                <div class="text">
                    如想拥有更多权益请联系在线客服
                </div>
                <div class="btn" @click="upgradeHid">
                    我知道了
                </div>
            </div>
        </van-popup>


        <van-popup v-model="enjoyShow" :close-on-click-overlay="false">
            <div class="enjoyShow">
                <div class="enjoyImg">
                    <img :src="enjoyImg" />
                </div>
                <div class="enjoyText">
                    <div class="texts">
                        <div class="textRound"></div>
                        <div class="text">
                            您已经是vip会员，可在平台享受每天享受领取两个任务的权益。
                        </div>
                    </div>
                    <div class="texts textsBottom">
                        <div class="textRound"></div>
                        <div class="text">
                            如想拥有更高的权益，请升级您的会员等级。
                        </div>
                    </div>
                </div>
                <div class="enjoyBtn" @click="enjoyHid"> 
                    去升级
                </div>
            </div>
        </van-popup>

    </div>
</template>
<script>
import {getUserLoginState,getUserInforn} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, Toast, Popup, Dialog} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast).use(Popup).use(Dialog);

export default {
    data () {
        return {
            id:'',
            Img:img.images,
            data:'',
            upgradeShow:false,
            upgradeImg:img.upgradeImg,
            enjoyShow:false,
            enjoyImg:img.enjoyImg,
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        momey(){
            Dialog.alert({
            title: '温馨提示',
            message: '暂时不能充值,请谅解!'
            }).then(() => {
            // on close
            });
        },
        goShop(){
            this.$router.push({path:'/shop'});
        },
        goEnjoy(){
            this.enjoyShow=true;
        },
        enjoyHid(){
            this.enjoyShow=false;
        },
        goUpgrade(){
            this.upgradeShow=true;
        },
        upgradeHid(){
            this.upgradeShow=false;
        },
        getInforn(limit){
            getUserInforn(limit).then(res=>{
                if (res.data.success==true) {
                    this.data=res.data.data;
                }else{
                    Toast('加载失败，请刷新后重新加载!');
                }
            })  
        }
    },
    mounted () {
        var limit={
            id:this.id
        }
        this.getInforn(limit);
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
.contain{
    width: 100%;
}
.van-nav-bar{
    background: #404040;
    color: #fff;
}
.van-icon-arrow:before{
    color: #fff !important;
}
.containBig{
  margin-bottom: 15px;
}
.containTop{
  width: 100%;
  height: 150px;
  background: #0099FF;
  padding: 10px;
  box-sizing: border-box;
}
.cardInfo{
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 15px;
  position: relative;
}
.cardClass{
  color: #fff;
  font-size: 15px;
  margin:12px 0;
}
.cardId{
  position:absolute;
  bottom:0;

}
.cardImg{
  color: #fff;
  font-size: 15px;
  position: absolute;
  bottom: -39%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #707070;
  background:#ffffff;
  left:50%;
  margin-left:-38px;

}
.cardImg img{
  width:100%;
  height:100%;
  border-radius:50%;

}
.containBottom{
  width: 100%;
  background: #ffffff;
}
.containBottomBtn{
  overflow: hidden;
}
.containBottomLeft{
  float: left;
  width: 73px;
  background: #FFCC33;
  color: #fff;
  border-radius:6px;
  text-align:center;
  line-height:35px;
  font-size:17px;
  letter-spacing:6px;
  margin:19px 0 0 34px;
}
.containBottomRight{
  float: right;
  width: 72px;
  background: #0099FF;
  color: #fff;
  border-radius:6px;
  text-align:center;
  line-height:35px;
  font-size:17px;
  letter-spacing:6px;
  margin:19px 34px 0 0;
}
.containBottomNum{
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size:16px;
  color:#A8A8A8;
}
.containBottomNum .containBottomNumber{
  color: #000;
  font-size: 20px;
}


.lists{
  width: 100%;
  background: #ffffff;
}
.list{
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height:45px;
  border-bottom:1px solid #C8C8C8;
}
.listLeft{
  float: left;
  font-size: 16px;
}
.listRight{
  float: right;
  font-size: 16px;
  color:#A8A8A8;
}
.listRight>i:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: #b9b9b9;
  content: '\e603'
}
.upgradeShow{
    width: 300px;
    height: 390px;
}
.upgradeImg{
    width: 100%;
    height: 250px;
}
.upgradeImg img{
    height: 100%;
    width: 100%;
}
.upgradeShow .text{
    width: 100%;
    text-align: center;
    color: #FFCC33;
    line-height: 26px;
    margin-top: 8px;
}
.upgradeShow .btn{
    width: 85%;
    color: #fff;
    font-size: 18px;
    background: #f14a4c;
    border-radius: 20px;
    margin: 0 auto;
    padding: 8px 0;
    text-align: center;
    margin-top: 33px;
}
.enjoyShow{
    width: 300px;
    height: 390px;
}
.enjoyImg{
    width: 100%;
    height: 134px;
}
.enjoyImg img{
    height: 100%;
    width: 100%;
}
.enjoyText{
    padding: 23px 19px 0;
    box-sizing: border-box;
}
.texts{
    position: relative;
}
.textRound{
    width: 6px;
    height: 6px;
    background: #9a9a9a;
    border-radius: 50%;
    position: absolute;
    top: 9px;
}
.text{
    color: #9a9a9a;
    font-size: 15px;
    line-height: 24px;
    text-indent: 1em;
}
.textsBottom{
    margin-top: 16px;
}
.enjoyBtn{
    width: 53%;
    color: #fff;
    text-align: center;
    background: #17c5ac;
    margin: 0 auto;
    margin-top: 36px;
    border-radius: 6px;
    font-size: 19px;
    padding: 7px 0;
}
</style>


