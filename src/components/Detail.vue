<template>
    <div class="cantain">
        <!-- header部分 -->
        <div class="headerNav">  
            <van-nav-bar
            title="任务详情"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        
        <div class="content">
            <!-- 任务头部 -->
            <div class="header">
                <div class="headerImg">
                    <img :src="data.picture">
                </div>
                <div class="headerInfo">
                    <h4>{{data.title}}</h4>
                    <p class="headerSerail">
                        <span>任务编号:</span>
                        <b>{{data.code}}</b>
                    </p>
                    <p class="headerNum">
                        已抢<b>{{data.num}}</b>份/剩余<b>{{data.total}}</b>份
                    </p>
                    <p class="headerTime">
                        <span>距离任务结束:</span>
                        <!-- <b>0天1时16分32秒</b> -->
                        <b>{{countDown}}</b>
                    </p>
                </div>
                <div class="headerState">
                    <p class="headerMoney">+{{data.price}}.00元</p>
                    <p class="headerShowStatus" v-if="nowTime>=data.createTime && nowTime<=data.endTime">任务进行中</p>
                    <p class='headerHidStatus' v-else>任务已结束</p>
                </div>
            </div>

            <!-- 任务说明 -->
            <div class=taskExplain>
                <h4>{{data.title}}</h4>
                <p>任务为长期任务,</p>
                <p>每天定时更新，请用户下载后不要删除,</p>
                <p>方便接下来的任务</p>
                <p>=========================</p>
            </div>

            <!-- 任务简介 -->
            <div class="taskInfo">
                <p>游戏平台:&nbsp;九游&nbsp;果盘&nbsp;当乐</p>
                <!-- <p>区服选择:&nbsp;18区&nbsp;高照福星&nbsp;再起东山</p>
                <p class="taskSelectBig">17区&nbsp;无痕踏雪&nbsp;民安国泰</p>
                <p class="taskSelect">春风桃李&nbsp;万世风流</p>
                <p class="taskSelect">回梦游仙&nbsp;飞燕高峰</p>
                <p class="taskSelect">女王降临&nbsp;月满东楼</p>
                <p class="taskSelect">回梦游仙&nbsp;飞燕高峰</p>
                <p class="taskSelect">剑指青山&nbsp;一站倾城</p>
                <p class="taskSelectBig">16区&nbsp;彼岸花开&nbsp;一统天下</p>
                <p class="taskSelect">豪言壮志&nbsp;贤者为王</p> -->
                <div v-html="data.content"></div>
                <p>可自由选择以上区服</p>
                <p>=========================</p>
                <p>
                    <a href="javascript:void(0)" @click="jiuyouDownApp(data.jiuyouDownload)">九游下载</a>
                </p>
                <p>
                    <a href="javascript:void(0)"  @click="guopanDownApp(data.guopanDownload)">果盘下载</a>
                </p>
                <p>
                    <a href="javascript:void(0)"   @click="dangleDownApp(data.dangleDownload)">当乐下载</a>
                </p>
            </div>

            <!-- 领取任务按钮 -->
            <div class="taskBtnBig">
                <div class="taskBtnAll">
                    <div class="taskBtn" v-if="(!pullTask || !showInfo) && !getTaskBtn"  @click="getTask">
                        领取任务
                    </div>
                    <div class="taskBtn" v-if="(!pullTask || !showInfo) && getTaskBtn">
                        已领取
                    </div>
                    <div class="taskDetail taskDetailTitle" v-else-if="pullTask && showInfo">
                        任务详情
                    </div>
                    <div class="taskDetail" @click="showTask">
                        <span v-if="!pullTask || !showInfo">领取任务后点击查看明细</span>
                        <div class="showTaskInfo" v-else-if="pullTask && showInfo">
                            <!-- <h4>第五期要求:角色达到21级</h4>
                            <p>回复时提交:&nbsp;1.游戏平台</p>
                            <p class="showTaskReply">2.所在区服</p>
                            <p class="showTaskReply">3.角色昵称</p>
                            <p>回复格式:&nbsp;游戏平台--区服--角色名</p>
                            <p class="taskExampleOne">如:&nbsp;九游--彼岸花开--张三三</p>
                            <p class="taskExampleTwo">果盘--一统天下--李四四</p>
                            <p class="taskExampleTwo">果盘--一统天下--王五五</p> -->
                            <div v-html="data.goal"></div>
                            <p>[务必按照要求格式提交回复内容,以免影响正常审核!</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;禁止使用连续类昵称,禁止在游戏中聊天!]</p>
                            <p class="taskLine">==========================</p>
                            <div class="tashInputBig">
                                <textarea name="" id="" cols="45" rows="5" placeholder="请输入回复内容" v-model="taskInfo"></textarea>
                                <div class="taskBtn" @click="putTask">
                                    提交
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState,getOneList,receiveTask,ifReceiveTask,putReceiveTask} from '../api/getData';
import { NavBar, Dialog, Toast} from 'vant';
import Vue from 'vue';
import moment from 'moment' 

Vue.use(NavBar).use(Dialog).use(Toast);


export default {
    data () {
        return {
            id:'',
            nowTime:'',
            countDown:'',
            countTime:'',
            endTime:'',
            times:'',
            pullTask:'',
            getTaskBtn:'',
            showInfo:false,
            taskInfo:'',
            taskInfoStatus:'',
            data:'',
            taskid:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        getTask(){
            var limit={
                userId:this.id,
                taskId:this.taskid
            }
            receiveTask(limit).then(res=>{
                if(res.data.success==true){
                    var id={
                        id:this.taskid
                    }
                    getOneList(id).then(res=>{
                        if(res.data.success==true){
                            this.data=res.data.data;
                            this.endTime=res.data.data.endTime;
                            this.countTime=moment(res.data.data.endTime*1000).format("YYYY-MM-DD HH:mm:ss")
                            this.time();
                            this.times=setInterval(this.time,1000);
                        }else{
                            Toast(res.data.message);
                            this.$router.push({path:'/Tab'});
                        }
                    });
                    this.nowTime=Date.parse(new Date())/1000; 
                    
                    this.getTaskBtn=true;
                    this.pullTask=true;
                    Dialog.alert({
                    title: '温馨提示',
                    message: '任务领取成功！赶快去查看明细吧！'
                    }).then(() => {
                    // on close
                    });
                }else{
                    Toast(res.data.message);
                }
            })
        },
        showTask(){
            if (!this.pullTask) {
                // 用户是否领取了任务
                var limit={
                    userId:this.id,
                    taskId:this.taskid
                }
                ifReceiveTask(limit).then(res=>{
                    if(res.data.success==true){
                        this.pullTask=true;
                    }else{
                        this.pullTask=false;
                        Dialog.alert({
                        title: '温馨提示',
                        message: '要先领取任务才能查看明细哦!'
                        }).then(() => {
                        // on close
                        });
                    }
                })
            }else{
                this.showInfo=true;
            }
        },
        putTask(){
            if(this.taskInfoStatus==false){
                if (this.taskInfo=='') {
                Dialog.alert({
                title: '温馨提示',
                message: '提交信息不能为空！'
                }).then(() => {
                        
                });
                }else{
                    var limit={
                        userId:this.id,
                        taskId:this.taskid,
                        submitContent:this.taskInfo
                    }
                    putReceiveTask(limit).then(res=>{
                        if(res.data.success==true){
                            Dialog.alert({
                            title: '温馨提示',
                            message: '任务提交成功！赶快去领取新任务吧！'
                            }).then(() => {
                                this.$router.go(-1);
                            });
                        }else{
                            Dialog.alert({
                            title: '温馨提示',
                            message: res.data.message
                            }).then(() => {
                            
                            });
                        }
                    })
                }
            }else{
                Dialog.alert({
                title: '温馨提示',
                message: '你已提交过任务，不可重复提交!'
                }).then(() => {
                            
                });
            }
            
            
        },
        jiuyouDownApp(url){
            // var u = navigator.userAgent, 
            // isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
            // isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            // urls = {
            //     'android':'http://ftp-apk.pcauto.com.cn/pub/autoclub-5000-autowapDL1.apk',
            //     'ios':'http://www.9game.cn/game/downs_828511_2.html?ch=SO_4',
            //     'other':'http://www.9game.cn/game/downs_828511_2.html?ch=SO_4'
            // };
            //三元运算
            // window.location.href = isAndroid? urls.android : isiOS? urls.ios : urls.other;
            //简化
            // if(isAndroid){
            //     window.location.href=urls.android;
            // }else if(isiOS){
            //     window.location.href=urls.ios;
            // }else{
            //     window.location.href=urls.other;
            // }

            window.location.href=url;
            console.log(url);
        },
        guopanDownApp(url){
            window.location.href=url;
            console.log(url);
        },
        dangleDownApp(url){
            window.location.href=url;
            console.log(url);
        },
        double(num) {
            if (num<10) {
                num='0'+num;
            }
            return num;
       },
       time () {
	   	var fulurtime=new Date(this.countTime);
	   	var nowtime=new Date();
	   	var num=Number((fulurtime-nowtime)/1000);
	   	var days=parseInt(num/86400);
	   	var hours=parseInt(num%86400/3600);
	   	var mins=parseInt(num%3600/60);
           var secs=parseInt(num%60);
           if (this.nowTime<this.endTime) {
               this.countDown=days+'天'+this.double(hours)+'时'+this.double(mins)+'分'+this.double(secs)+'秒';
           }else{
               this.countDown='0天00时00分00秒';
               clearInterval(this.times)
           }
	   	
	   }
    },
    mounted () {
        // 获取任务详情
        this.taskid=this.$route.query.id;
        var id={
            id:this.taskid
        }
        getOneList(id).then(res=>{
            if(res.data.success==true){
                this.data=res.data.data;
                this.endTime=res.data.data.endTime;
                this.countTime=moment(res.data.data.endTime*1000).format("YYYY-MM-DD HH:mm:ss")
                this.time();
                this.times=setInterval(this.time,1000);
            }else{
                Toast(res.data.message);
                this.$router.push({path:'/Tab'});
            }
        });
        this.nowTime=Date.parse(new Date())/1000;  

        // 用户是否领取了任务
        var limit={
            userId:this.id,
            taskId:this.taskid
        }
        ifReceiveTask(limit).then(res=>{
            if(res.data.success==true){
                this.pullTask=true;
                this.getTaskBtn=true;
                if(res.data.message=='任务已提交，待审核' || res.data.message=='任务审核通过' || res.data.message=='任务审核不通过'){
                    this.taskInfoStatus=true;
                }else{
                    this.taskInfoStatus=false;
                }
            }else{
                this.pullTask=false;
            }
        })
        
    },
    created () {
        this.id=Number(localStorage.getItem('userId'));
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
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.van-icon-arrow:before{
    color: #fff !important;
}
.header{
    width: 100%;
    overflow: hidden;
    padding: 12px 0 20px;
    border-bottom: 1px solid #E8E8E8;
}
.headerImg{
    float: left;
    width: 55px;
    height: 55px;
    margin-left: 6px;
}
.headerImg img{
    width: 100%;
    height: 100%;
}
.headerInfo{
    float: left;
    margin-left: 10px;
}
.headerInfo b{
    color: #fe433a;
}
.headerInfo h4{
    margin: 0;
}
.headerSerail{
    margin: 0;
    font-size: 14px;
    color: #A8A8A8;
    margin-top: 2px;
}
.headerNum{
    margin: 0;
    font-size: 14px;
    color: #A8A8A8;
    margin-top: 4px;
}
.headerTime{
    margin: 0;
    font-size: 14px;
    color: #A8A8A8;
    margin-top: 4px;
}
.headerState{
    float: right;
    margin-right: 8px;
}
.headerState p{
    margin: 0;
}
.headerMoney{
    color: #fe433a;
    text-align: center;
}
.headerState .headerShowStatus{
    background: #fd9113;
    font-size: 12px;
    color: #fff;
    padding: 3px 4px;
    border-radius: 6px;
    margin-top: 10px;
}
.headerState .headerHidStatus{
    background:#009933;
    font-size: 12px;
    color: #fff;
    padding: 3px 4px;
    border-radius: 6px;
    margin-top: 10px;
}
.taskExplain,.taskInfo{
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #A8A8A8;
}
.taskExplain p{
    margin-top: 14px;
}
.taskExplain h4{
    margin:0;
    color: #000;
    margin-top: 15px;
}
.taskInfo p{
    margin-top: 15px;
}
.taskInfo a{
    color: #0099FF;
}
/* .taskSelectBig{
    margin-left: 68px;
} */
/* .taskSelect{
    margin-left: 105px;
} */
.taskInfo h4{
    margin: 0;
    color: #000;
    margin-top: 15px;
}
.taskReply{
    margin-left: 83px;
}
.taskBtnBig{
    width: 100%;
    background:#E8E8E8;
    padding: 10px 0 0;
}
.taskBtnAll{
    background: #fff;
     padding: 15px;
}
.taskBtn{
    width: 92%;
    margin: 0 auto;
    text-align: center;
    background: #0099FF;
    color: #fff;
    font-size: 16px;
    line-height: 35px;
    border-radius: 8px;
}
.taskDetail{
    width: 92%;
    margin: 0 auto;
    font-size: 14px;
    color: #0099FF;
    border: 1px dashed #ccc;
    margin-top: 15px;
    border-radius: 4px;
    padding: 10px 0 15px 5px;
    box-sizing: border-box;
}
.taskDetailTitle{
    text-align: center;
}
.showTaskInfo{
    width: 100%;
}
/* .showTaskInfo h4{
    margin: 0;
    margin-top: 5px;
    color: #000;
} */
.showTaskInfo p{
    margin: 0;
    margin-top: 14px;
    color: #A8A8A8;
}
/* .showTaskInfo .showTaskReply{
    margin-left: 78px;
} */
/* .showTaskInfo .taskExampleOne{
    margin-left: 42px;
}
.showTaskInfo .taskExampleTwo{
    margin-left: 62px;
} */
.taskLine{
    text-align: center;
}
.tashInputBig{
    width: 100%;
    margin-top: 15px;
}
.tashInputBig textarea{
    width: 90%;
    margin:0 0 15px 4%;
    height: 80px;
    border: 1px solid #A8A8A8;
    border-radius: 4px;
    font-size: 14px;
    color: #000;
    resize: none;
}
</style>


