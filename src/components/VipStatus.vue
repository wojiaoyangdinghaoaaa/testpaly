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
                    <div class='cardName'>游天下</div>
                    <div class='cardClass'>
                        <span>会员等级:</span>
                        <span>普通</span>
                    </div>
                    <div class='cardId'>会员ID:123456</div>
                <div  class="cardImg">
                    <img :src="Img"/>
                </div>
                </div>
            </div>
            <div class='containBottom'>
                <div class='containBottomBtn'>
                    <div class='containBottomLeft'>充值</div>
                    <div class='containBottomRight'  @click="goShop">购物</div>
                </div>
                <div class='containBottomNum'>
                    <div>余额(元)</div>
                    <div class='containBottomNumber'>100.00</div>
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
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        goShop(){
            this.$router.push({path:'/shop'});
        },
        goEnjoy(){
            this.$router.push({path:'/Enjoy'});
        },
        goUpgrade(){
            this.$router.push({path:'/Upgrade'});
        }
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
  bottom: -34%;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid #000;
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
</style>


