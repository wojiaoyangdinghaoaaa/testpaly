<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="广告招租"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <h4>乐游暇广告位招租</h4>
            <div class="img">
                <img :src="adverImg"/>
            </div>
            <div class="weixin">
                乐游暇唯一官方公众号:
                <span>lyx公众号</span>
            </div>
            <div class="weixin">
                乐游暇唯一客服电话:
                <span>400828187</span>
            </div>
            <div class="tack">
                APP在线咨询:
            </div>
            <div class="tackWay">
                「<span>乐游暇APP</span>」-「<span>我的</span>」-「<span>在线客服</span>」
            </div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import img from '../../static/json/index.json';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    data () {
        return {
            adverImg:img.adverImg,
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.headerNav{
    height: 46px;
    width: 100%;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.van-icon-arrow:before{
    color: #fff !important;
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
    padding: 14px 15px 0;
    box-sizing: border-box;
}
.img{
    width: 100%;
    height: 200px;
    margin: 10px 0;
}
.img img{
    height: 100%;
    width: 100%;
}
.weixin{
    width: 100%;
    text-align: center;
    font-size: 17px;
    line-height: 24px;
    margin: 20px 0;
    letter-spacing:2px
}
.weixin span{
    background: #0099FF;
}
.tack{
    margin: 30px 0 10px;
    font-size: 17px;
    text-align: center;
}
.tackWay{
    font-size: 17px;
    text-align: center;
}
.tackWay span{
    color: #0099FF;
}
</style>


