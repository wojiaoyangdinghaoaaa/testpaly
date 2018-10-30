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
                <p>任务审核为什么会不通过？</p>
            </div>
            <div class="text">
                可能是您提交的内容里面的信息填写不全,或者是您提交的任务和没有达到预期的理想。
                您可修改后再次提交或联系客服，请您谅解。
            </div>
            
        </div>
    </div>
</template>
<script>
import { NavBar} from 'vant';
import Vue from 'vue';

Vue.use(NavBar);

export default {
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


