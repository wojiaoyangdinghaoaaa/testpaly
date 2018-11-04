<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="常见问题"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="title">
                <p>提现会多久到账？</p>
            </div>
            <div class="text">
                如果您的提现申请审核通过后，我们会快速打款。如遇高峰期，到账速度会有延迟，请您谅解。
            </div>
            
        </div>
    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
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
    background:#F8F8F8;
}
.title{
    padding: 18px;
    border-bottom: 1px solid #ccc;
}
.title p{
    padding-left: 8px;
    box-sizing: border-box;
    border-left: 4px solid #FF9900;
    margin: 0px;
    font-weight: 600;
    font-size: 15px;
}
.text{
    width: 100%;
    padding: 18px 28px;
    box-sizing: border-box;
    font-size: 14px;
    color: #707070;
    line-height: 24px;
}
</style>


