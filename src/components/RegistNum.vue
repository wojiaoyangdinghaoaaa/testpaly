<template>
    <div>
      <!-- header部分 -->
      <div class="header">
          <i class="iconfont" @click="onClickLeft">&#xe650;</i>
          <div class="headerText">注册</div>
      </div>

      <!-- 注册数量选项 -->
      <div class='content'>
          <div class='checkNum'>选择注册数量</div>
          <div v-for="item in parameter" :key="item.id" class='numberAll ' :class=" parameter[item.id].checked == true ? 'checked_parameter' :'' "  @click="parameterTap(item.id)" >{{item.number}}</div>
          <input type='text' placeholder='请输入需要注册的数量...' placeholder-class="psection" ref="number"  @focus='getFocus'  @change="getNumber" v-model="flagNum"/>
          <button @click="goRegist">下一步</button>
      </div>

    </div>

</template>
<script>

import { NavBar, Toast,} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Toast);

export default {
    inject: ['reload'],
    data () {
        return {
            number:0,
            flagNum:'',
            flag:0,
            parameter: [{ id: 0, number:'50',checked:false }, { id: 1, number:'100' ,checked:false}, { id: 2, number:'200' ,checked:false}],
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({path:'/'});
        },
        parameterTap(id){
            this.number=0;
            this.flagNum='';
            this.$refs.number.value='';
            var parameterList = this.parameter;
            for (var i = 0; i < parameterList.length; i++) {
                if (parameterList[i].id == id) {
                    parameterList[i].checked = true;
                }
                else {
                    parameterList[i].checked = false;
                }
            };
            this.number=parameterList[id].number;
        },
        getFocus(){
            var parameterList = this.parameter;
            for (var i = 0; i < parameterList.length; i++) {
                parameterList[i].checked = false;
            };
            this.number=0;
        },
        getNumber(e){
            this.number=e.target.value;
        },
        goRegist(){
            if(this.number>200){
                Toast('最大注册数量不能超过200！');
                this.reload();
            }else{
                if (this.number>0) {
                    this.$router.push({path:'/Regist',query:{number:this.number}});
                }else{
                    Toast('注册数量不能为空！');
                }
            }
            
        }
    },
    created () {
        this.number=this.$route.query.number;
        var parameterList = this.parameter;
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].number==this.number) {
                parameterList[i].checked = true;
            }else{
                this.flag++;
            }
        };
        if (this.flag==3) {
            this.flagNum=this.number;
            this.flag=0;

        }
    }
}
</script>

<style scoped>
.content{
  margin: 0 auto;
  /* height: 700rpx; */
  width: 90%;
}
.header{
    height: 46px;
    width: 100%;
    position: relative;
}
.header i{
    position: absolute;
    top: 9px;
    left: 15px;
    font-size: 26px;
    color: #000;
}
.headerText{
    height: 100%;
    width: 100%;
    font-size: 17px;
    text-align: center;
    line-height: 46px;
}
.checkNum{
  line-height: 65px;
   padding-left: 15px;
   box-sizing: border-box;
}
.numberAll{
  width: 90%;
  margin-left: 5%;
  line-height:42px;
  font-size: 20px;
  text-align: center;
  border: 2px solid #0099FF;
  color: #0066FF;
  border-radius: 5px;
  margin-bottom:30px;
}
.checked_parameter{
  color: white;
  background: #0066FF;
}

input{
  width: 91%;
  margin-left: 5%;
  height:46px;
  font-size: 15px;
  text-align:left;
  border: 2px solid #0099FF;
  border-radius: 5px;
  margin-bottom:35px;
  padding-left:10px;
  box-sizing:border-box;
}
.psection{
    color: #0066FF;
}
button{
  width: 91%;
  margin-left: 5%;
  border: 0;
  outline: 0;
  line-height:45px;
  font-size: 20px;
  text-align: center;
  color: white !important;
  margin-bottom:30px;
  border-radius: 40px;
  background: linear-gradient(to right, #3300CC , #CC00FF);
}
</style>


