<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="关于我们"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="who">
                <h3>乐游暇是谁？</h3>
                <div class="info">
                    乐游暇是在当前火爆的游戏市场中应运而生的一个集游戏与传媒为一身的新型网络科技平台。
                    乐游暇，利用新颖的模式，与国内多个大型游戏公司达成战略合作，为国内游戏，推波助澜！
                </div>
                <div class="info">
                    乐游暇，为用户开启了一道爱上手游的大门，
                    作为手游整合服务商，乐游暇为用户提供了强大的技术支持和良好的用户体验。
                    来吧！让你的闲暇时光，游起来。
                </div>
                <img :src="usImg" class="usImg"/>
            </div>

            <div class="who">
                <h3>乐游暇从哪来？</h3>
                <div class="info">
                    乐游暇，作为一个新型的互联网科技平台。
                    在天使轮即获得首都创投（代码:HK2324）旗下"836基金"的领投，
                    华润资本跟投。
                </div>
                <div class="info">
                    于是，在如此强大的背景和良好的条件下，乐游暇诞生了。
                    上线短时间内，获得了用户的强烈好评和追捧。
                </div>
                <div class="info">
                    这就是我---乐游暇。
                </div>
            </div>

        </div>
        <div class="bottom">
            <div class="chinese">
                <span>乐游暇（上海）互联网信息科技服务有限公司</span>
                <span>版权所有</span>
            </div>
            <div class="english">
                Copyright 2018 © Shanghai Leyouxia Internet Information Technology Services Ltd.AllRights Reserved.
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
            usImg:img.us,
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
.who{
    width: 100%;
}
.who h3{
    padding-left: 8px;
    box-sizing: border-box;
    border-left: 4px solid #FF9900;
}
.info{
    line-height: 30px;
    text-indent: 2em;
    color:#787878;
}
.usImg{
    width: 100%;
    margin: 16px 0 10px;
}
.bottom{
    width: 100%;
    height: 64px;
}
.chinese,.english{
    width: 100%;
    font-size: 12px;
    color:#B0B0B0;
    text-align: center;
    margin-top: 5px;
}
.chinese span{
    margin-right: 5px;
}

</style>


