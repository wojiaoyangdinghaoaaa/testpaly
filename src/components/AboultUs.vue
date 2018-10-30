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
                <h3>小花是谁？</h3>
                <div class="info">
                    小花钱包时提供科技服务和支持的第三方，
                    利用生物识别技术，结合只能机器学习方法，
                    以及其他金融科技方面的优势为网络借贷信息中介平台及中航信托等合作方推荐优质的借款客户。
                </div>
                <div class="info">
                    小花钱包不保证推荐客户百分百通过合作方的风控审核。
                    作为金融科技服务商，小花钱包不发放贷款。
                    贷款服务由合作方提供，小花钱包不经手不触碰客户资金。
                </div>
                <img :src="usImg" class="usImg"/>
            </div>

            <div class="who">
                <h3>小花从哪来？</h3>
                <div class="info">
                    小花钱包时提供科技服务和支持的第三方，
                    利用生物识别技术，结合只能机器学习方法，
                    以及其他金融科技方面的优势为网络借贷信息中介平台及中航信托等合作方推荐优质的借款客户。
                </div>
            </div>

        </div>
        <div class="bottom">
            <div class="chinese">
                <span>小花（厦门）互联网金融信息服务有限公司</span>
                <span>版权所有</span>
            </div>
            <div class="english">
                Copyright 2018 © Xiamen Xiaohua Financial Information Services Group Co.,Ltd.AllRights Reserved.
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
            usImg:img.us,
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
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


