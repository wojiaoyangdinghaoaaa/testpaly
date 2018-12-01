<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="意见反馈"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="questionBig">
                <b>您的问题或建议:</b>
                <textarea name="question" cols="45" rows="10" v-model="feedback" placeholder="您的意见或建议..."></textarea>
                <b>您的联系方式:</b>
                <input type="text" v-model="phone" placeholder="输入电话号码">
                <input type="text" v-model="email" placeholder="输入邮箱地址">
                <p>留下您的联系方式，以便我们了解问题后及时反馈结果，紧急问题请联系客服。</p>
                <b>联系我们:</b>
                <span>App中联系在线客服</span>
                <!-- <span>关注公众号"乐游暇",联系在线客服</span> -->
            </div>
            <div class="btn" @click="saveFeedback">提交</div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,setFeedback} from '../api/getData';
import { NavBar, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    data () {
        return {
            id:'',
            feedback:'',
            phone:'',
            email:'',
            limit:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        saveFeedback(){
            if (this.feedback!='' && this.phone!='' && this.email!='') {
                this.limit={
                    userId:this.id,
                    content:this.feedback,
                    tel:this.phone,
                    email:this.email
                }
                setFeedback(this.limit).then(res=>{
                    if (res.data.success==true) {
                        Toast('反馈意见提交成功！');
                        this.$router.push({path:'/'});
                    }else{
                        Toast(res.data.message);
                    }
                })
            }else{
                Toast('数据提交不能为空！');
            }
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
            }else{
                this.id=res.data.data.id;
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
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
}
.questionBig{
    width: 100%;
}
.questionBig b{
    font-size: 18px;
    margin: 14px 0;
    display: inline-block;
}
.questionBig textarea{
    width: 100%;
    border: 0;
    border: 0;
    box-sizing: border-box;
    background:#F8F8F8;
    border-radius: 6px;
    padding: 10px;
}
.questionBig input{
    width: 100%;
    height: 46px;
    outline: 0;
    border: 0;
    background: #F8F8F8;
    margin-bottom: 14px;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 15px;
}
.questionBig p{
    margin: 0;
    font-size: 14px;
    color: #A8A8A8;
}
.questionBig span{
    color: #808080;
    font-size: 17px;
}
.btn{
    width: 100%;
    line-height: 44px;
    background: #0099FF;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    margin-top: 26px;
}
</style>


