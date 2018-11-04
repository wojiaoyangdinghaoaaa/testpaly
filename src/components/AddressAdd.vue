<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="新增地址"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-cell-group>
                <van-field
                 v-model="username" 
                 label="用户名"
                 placeholder="请输入收货人真实姓名"
                 />
                <van-field 
                v-model="phone" 
                label="手机号"
                placeholder="请输入收货人手机号" 
                />
                <van-field 
                v-model="address" 
                label="收货地址"
                @focus="getAddr"
                placeholder="请输入收货地址" 
                />
                <van-field 
                v-model="addressDetail" 
                label="详细地址"
                placeholder="请输入收货人详细地址" 
                />
                <van-field 
                v-model="postcode" 
                label="邮政编码"
                placeholder="请输入所在地区邮政编码" 
                />
            </van-cell-group>

            <van-popup v-model="addrPop" position="bottom">
                <van-area 
                :area-list="areaList" 
                value="110101"
                @confirm="onConfirm"
                @cancel="onCancel"
                />
            </van-popup>
            <div class="saveBtn" @click="saveInfo">
                保存
            </div>
        </div>
    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import AreaList  from '../../static/js/area.js';
import { NavBar, Field, Cell, CellGroup, Popup, Area, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(Field).use(Cell).use(CellGroup).use(Popup).use(Area).use(Toast);

export default {
    data () {
        return {
            username:'',
            phone:'',
            address:'',
            addressDetail:'',
            postcode:'',
            addrPop: false,
            areaList: AreaList,
            province:'',
            city:'',
            county:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        getAddr(){
            this.addrPop = true;
        },
        onConfirm(e){
            this.province=e[0].name;
            this.city=e[1].name;
            this.county=e[2].name;
            this.address=this.province+'-'+this.city+'-'+this.county;
            this.addrPop=false;
        },
        onCancel(){
            this.addrPop=false;
        },
        saveInfo(){
            if (this.username!='' && this.phone!='' && this.address!='' && this.addressDetail!='' && this.postcode!='') {
                Toast('保存成功!');
            }else{
                Toast('收货信息必须填写完整!');
            }
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
    padding-left: 10px;
    box-sizing: border-box;
}
.saveBtn{
    width: 80%;
    margin-top: 28px;
    margin-left: 8%;
    color: #fff;
    background: #0099FF;
    line-height: 46px;
    text-align: center;
    border-radius: 6px;
}
</style>


