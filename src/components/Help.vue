<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="帮助中心"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            这里是帮助中心
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
}
</style>


