<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="游戏介绍"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div v-html="data"></div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,getIndexNum} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);
 
export default {
    data () {
        return {
            data:'',
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
    },
    mounted () {
        getIndexNum().then(res=>{
            this.data=res.data.data.alpha;
        })
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
</style>


