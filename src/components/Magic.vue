<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="魔天记"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="text">
                正版授权3DMMO修仙手游《魔天记3D》正式开启新一轮测试。
                本次测试为安卓付费删档测试，时间将持续7天。
            </div>
            <div class="img">
                <img :src="magic1"/>
            </div>
            <div class="textSmall">
                【小说改编 开启全新修仙传奇】
            </div>
            <div class="text">
                游戏改编自忘语的玄幻小说《魔天记》。
                在游戏中，玩家将跟随主线剧情，亲身经历一遍主角柳鸣跌宕起伏的修仙经历：从初初踏入仙途的无名小卒，到经历无数艰险，层层突破，最终成为一代修仙大能。
                淬炼法宝、收服仙宠、邂逅道侣……所有这些令人神往的修仙经历，都能在游戏中一一体验！
            </div>
            <div class="img">
                <img :src="magic2"/>
            </div>
            <div class="textSmall">
                【一键切换 化身魔修逆风翻盘】
            </div>
            <div class="text">
                小说中主角柳鸣因为被魔主的魂魄碎片寄生，自己也习得了一身魔功。
                为了更好地还原小说情节，游戏中增加了“魔化”玩法，战斗中玩家们使用魔化技能，
                可以瞬间变身为魔修状态，获得特别外观，并打出超高伤害数值，瞬间扭转战局，体验到仙魔同体的强大威力！
            </div>
            <div class="img">
                <img :src="magic3"/>
            </div>
            <div class="textSmall">
                【淬炼法宝 多重神通辅助战斗】
            </div>
            <div class="text">
                操控天地法则的浑天镜、蕴含开山裂地之威的陨魔鞭……只要对这些法宝悉心培养，
                就能提升威能、获得专属技能，通过策略选择和搭配，可以大幅提升战力，令玩家在战斗中如虎添翼！
            </div>
            <div class="img">
                <img :src="magic4"/>
            </div>
            <div class="text bottomText">
                各位仙友准备好了吗？赶快下载《魔天记3D》，是时候书写属于我们自己的修仙传奇了！
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
            magic1:img.magic1,
            magic2:img.magic2,
            magic3:img.magic3,
            magic4:img.magic4,
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
.text{
    font-size: 14px;
    line-height: 23px;
    text-indent: 2em;
}
.textSmall{
    margin: 30px 0;
    color: #e60000;
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
.bottomText{
    margin: 5px 0 30px;
}
</style>


