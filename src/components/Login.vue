<template>
  <div>
      <van-nav-bar
        title="登录"
      />
      <div class="userinfo">
         <img class="userinfo-avatar" src="" />
    </div>
  </div>
</template>

<script>
import { NavBar} from 'vant';
import Vue from 'vue';

Vue.use(NavBar);


export default{
    methods: {

    }
}
</script>

<style scoped>
.userinfo {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}

.userinfo-avatar {
  width: 75px;
  height: 75px;
  margin: 10px;
  border-radius: 50%;
  border:1px solid #000;
}
</style>



