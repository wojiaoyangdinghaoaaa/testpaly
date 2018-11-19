<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="末日撕裂者"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="text">
                在次世代废土冒险ARPG手游《末日撕裂者》里不仅有扭曲破碎的世界地图，凶猛异常的变异怪物，凶残暴力的永夜军团，以及充满金属感的机甲装备。
                这里还有一些靓丽的身影，她们在街头巷尾救死扶伤，助人为乐；在战场上纵横驰骋，大杀四方；在会议室里运筹帷幄，决胜千里。大家来认识一下她们吧！
            </div>
            <div class="img">
                <img :src="belle1"/>
            </div>
            <div class="text">
                第一位，佩尔·景。佩尔是玩家遇到的第一个女NPC，也是一个不折不扣的美女。
                朴素的妆发和简单的穿着有时会让人忽略她的美丽。
                但是只要细心一点就会发现她是一个温柔美丽、多才多艺的大姐姐，能给玩家多种引导，在离开十三号避难所以后，她主要在新方舟市生活，给玩家发布日常任务。
            </div>
            <div class="img">
                <img :src="belle2"/>
            </div>
            <div class="text">
                第二位，探索队员尤娜。在方舟联合的探险队里，尤娜是少见的女队员，而这位女队员的颜值极高，几乎能压制方舟联合里大部分的成员。
                尤娜在探险队里处于狙击手的位置，追踪、潜入、营救、奇袭无所不精。
                枪法、搏斗、战术水平非常出色，作战能力极强，是名副其实的沙场女杰，枪炮玫瑰。
            </div>
            <div class="img">
                <img :src="belle3"/>
            </div>
            <div class="text">
                第三位，艾瑟尔·金。新方舟市副市长，督伊德社大德鲁伊。
                红发飘飘，长相精致，性感火辣。
                如果说方舟联合里有谁能在外貌上彻底胜过尤娜，那个人非艾瑟尔?金莫属。
                除此之外，这位大美女还拥有高智商和高情商，既能制定行之有效的对外作战方案，也能调解内部矛盾，在方舟联合里人望颇高。
            </div>
            <div class="img">
                <img :src="belle4"/>
            </div>
            <div class="text">
                总而言之，在废土世界里，这些高颜值，好身材的美女NPC都不是什么省油的灯。
                除了一眼就能看到的漂亮外貌，性感身材，她们还有着极强的个人能力，在游戏里发挥着不可替代的作用。
                最后，大家如果想要认识这些美女NPC，了解更多有趣的故事，就赶快加入《末日撕裂者》一起冒险吧！
            </div>
            <div class="text textTwo">
                末世冒险，强者生存！次世代废土冒险ARPG手游来袭！
                世界为何会变成这样？人类为何迎来末日？
                恶意引爆的核弹，不计后果的战争，摧毁了文明与秩序，残存的人类躲入地下避难所，苟延残喘。
                百年之后，世界已是面目全非，暴虐的永夜军变异人横行霸道，幸存的人类组成方舟联合竭力对抗。
                神秘的勇士离开地下避难所，为寻找拯救末世的希望，踏上探索新世界的征程！
            </div>
            <div class="text bottomText">
                快来下载《末日撕裂者》，来一探究竟吧！
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
            belle1:img.belle1,
            belle2:img.belle2,
            belle3:img.belle3,
            belle4:img.belle4,
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
.img{
    width: 100%;
    height: 200px;
    margin: 10px 0;
}
.img img{
    height: 100%;
    width: 100%;
}
.textTwo{
    margin: 10px 0;
}
.bottomText{
    margin: 5px 0 30px;
}
</style>


