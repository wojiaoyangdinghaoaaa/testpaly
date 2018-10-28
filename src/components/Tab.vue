<template>
    <div class="cantain">
        <div class="top">
            <!-- header部分 -->
            <van-nav-bar
            :title="headerTitle"
            />
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="tabs">
            <router-link to="/Tab" active-class="active"  exact>
                <i class="iconfont">&#xe605;</i>
                <span>首页</span>
            </router-link>
            <router-link to="/shop" active-class="active" >
                <i class="iconfont">&#xe66e;</i>
                <span>商城</span>
            </router-link>
            <router-link to="/Mine" active-class="active" >
                <i class="iconfont Myicon">&#xe601;</i>
                <span class="Myindex">我的</span>
            </router-link>
        </div>
    </div>
  
</template>
<script type="text/ecmascript-6">
  export default {
      data () {
          return {
              headerTitle: '',
          }
      },
      methods: {
          
      },
      watch: {
          '$route' (to, from) {
                // console.log(to.fullPath)
                if (to.fullPath=='/Tab') {
                    this.headerTitle="抢任务";
                }else if(to.fullPath=='/shop'){
                    this.headerTitle="商城";
                }else if(to.fullPath=='/Mine'){
                    this.headerTitle="个人中心";
                }
              
            }
      },
      created () {
            if (this.$route.path=='/Tab') {
                this.headerTitle="抢任务";
            }else if(this.$route.path=='/shop'){
                this.headerTitle="商城";
            }else if(this.$route.path=='/Mine'){
                this.headerTitle="个人中心";
            }
      }
  }
</script>
<style scoped>
.cantain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.top{
    width: 100%;
    height: 46px;
}
.van-nav-bar{
    background: #0099FF;
    color: #fff;
}
.content{
    flex: 1;
    width: 100%;
    overflow: auto;
}
.active{
    color: #0099FF !important;
}
.tabs{
    height: 54px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f8f8f8;
}
.tabs a{
    width: 30%;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #959595;
}
.tabs i{
    font-size: 27px;
    margin-top: 4px;
}
.tabs span{
    font-size: 13px;
}
.tabs .Myicon{
    font-size: 25px;
    margin-top: 6px;
}
</style>

