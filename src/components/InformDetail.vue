<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="通知"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <!-- <h3>【重要】关于暂停服务公告</h3>
            <div class="title">
                亲爱的用户:
            </div>
            <div class="info">
                根据监管部门要求，将永久关停“内涵段子”客户端软件及公众号。
                在此向内涵段子的用户及公众致歉，并请大家做好自己的资料备份。
                我们将坚持正确的价值导向，营造风清气正的网络环境。
            </div>
            <div class="number">
                如有疑问，请及时联系微信公众号“游天下”客服。
            </div>
            <div class="bottom">
                <p>游天下</p>
                <p>2018年4月6日</p>
            </div> -->
            <div v-html="content"></div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,getInformDetail} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    data () {
        return {
            id:'',
            content:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    mounted () {
        this.id=this.$route.query.id;
        let id='';
        id={
           id:this.id
        }
        getInformDetail(id).then(res=>{
              if(res.data.success==true){
                  this.content=res.data.data.content;
              }else{
                  this.$message(res.data.message);
              }
          })
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
    padding: 0 20px;
    box-sizing: border-box;
}
/* .content h3{
    text-align: center;
} */
/* .title{
    margin-bottom: 10px;
} */
/* .info{
    line-height: 36px;
    text-indent:2em;
} */
/* .number{
    margin-top: 8px;
    text-indent:2em;
} */
/* .bottom{
    text-align: right;
    margin-top: 20px;
}
.bottom p{
    margin: 0;
    margin-top: 8px;
} */
</style>


