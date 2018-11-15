<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="收货地址"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">

            <div class="addressList">
                <i class="icon"></i>
                <div class='left'>
                    <div class="ui-list-item-info">
                            杨哈哈
                        <span>&nbsp;&nbsp;</span>
                            15058665861
                    </div>
                    <div class="ui-list-item-address">
                         北京市 市辖区 东城区 客户科比科比 
                    </div>
                </div>
                <p class="ui-list-item-del" bindtap="delAddress">删除</p>
                <div class="separate"></div>
            </div>

            <div class="addressList">
                <i class="icon"></i>
                <div class='left'>
                    <div class="ui-list-item-info">
                            杨哈哈
                        <span>&nbsp;&nbsp;</span>
                            15058665861
                    </div>
                    <div class="ui-list-item-address">
                         北京市 市辖区 东城区 客户科比科比 
                    </div>
                </div>
                <p class="ui-list-item-del" bindtap="delAddress">删除</p>
                <div class="separate"></div>
            </div>

        </div>
        <div class="bottomBtn" @click="goAddressAdd">
            新增地址
        </div>
    </div>
</template>
<script>
import {getUserLoginState} from '../api/getData';
import { NavBar, AddressList, Toast} from 'vant';
import Vue from 'vue';

Vue.use(NavBar).use(AddressList).use(Toast);

export default {
    data () {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        goAddressAdd(){
            this.$router.push({path:'/AddressAdd'});
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
    background:#F8F8F8;
}
.addressList{
    width: 100%;
    overflow: hidden;
    padding: 15px 0;
    border-bottom: 1px solid#E8E8E8;
}
.ui-list-item-info{
  margin: 5px 0px;
}
.ui-list-item-address{
  color: #252930;
  letter-spacing: 1px;
  word-wrap: break-word;  
    word-break: normal;  
}
.ui-list-item-del{
  position: absolute;
  right: 10px;
  color: 	#707070;
  float: right;
  line-height:27px;
  margin:14px 0;
  border-left: 1px solid #C8C8C8;
  padding-left:8px;
}
.left{
  float: left;
  width: 70%;
  font-size: 14px;
}
.icon{
  float: left;
  line-height: 49px;
  margin: 0 8px;
}
.icon:after{
  font-family: 'iconfont';
  font-weight: 500;
  font-style: normal;
  font-size: 34px;
  content: '\e60d'
}


.bottomBtn{
    width: 100%;
    height: 54px;
    background: #f44;
    color: #fff;
    text-align: center;
    line-height: 56px;
}
</style>


