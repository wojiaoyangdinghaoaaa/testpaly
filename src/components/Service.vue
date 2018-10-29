<template>
    <div class="cantain">
        <div class="headerNav">
            <!-- header部分 -->
            <van-nav-bar
            title="在线客服"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <div class="body">
                <p v-if="hasHistory" v-on:click="getHistory()" class="history">查看历史消息</p>

                <div  class="message" v-for=" message in historyList" :key="message.messageId">
                    <div class="send-message" v-if="message.direction === 'IN' || message.direction === 'H_IN'">
                        <div class="send-message-box">
                            <div class="s3-r"></div>
                            {{message.messageBody.question}}
                        </div>
                        <div class="user-head">
                        </div>
                    </div>

                    <div class="answer-message" v-if="message.direction === 'OUT' || message.direction === 'H_OUT'">
                        <div class="robot-head">
                        </div>
                        <div class="answer-message-box">
                            <div class="s3-l"></div>
                            {{message.messageBody.answer}}
                        </div>
                    </div>
                </div>

                <div class="message" v-for=" message in messageList" :key="message.id">
                    <div class="send-message" v-if="message.type === 'send'">
                        <div class="send-message-box">
                        <div class="s3-r"></div>
                            {{message.str}}
                        </div>
                        <div class="user-head">
                        </div>
                    </div>
                    <div class="banner" v-if="message.type == 'banner'">
                        <span>{{message.answer}}</span>
                    </div>
                    <div class="answer-message" v-if="message.type === 'answer'">
                        <div class="robot-head"></div>
                        <div class="answer-message-box">
                            <div class="s3-l"></div>
                            <span v-if="message.answerContentType === 'TEXT' && message.answerType !== 'RECOMMEND'">
                                {{message.answer}}
                            </span>
                            <img v-if="message.answerContentType ==='IMAGE'" style="max-width: 400px; margin: 5px 0;" v-bind:src="message.answer">
                            <audio controls  v-if="message.answerContentType ==='AUDIO'">
                                <source v-bind:src="message.answer">
                                Your browser does not support the audio element.
                            </audio>
                            <a v-if="message.answerContentType === 'RICH_TEXT'" v-bind:href="message.data.materialUrl" target="_blank"
                                style="display:block; background: white; width: 200px; padding: 5px; border: 1px solid #ccc">
                                <img v-bind:src="message.data.materialCover" style="width: 200px">
                                <p style="color: #333; margin: 0">{{message.data.materialTitle}}</p>
                                <p style="color: #999;font-size: 12px; margin: 5px 0">{{message.data.materialDigest}}</p>
                            </a>
                            <div v-if="message.answerContentType ==='MENU'">
                                <p style="margin: 0">{{message.answer}}</p>
                                <div v-for="item in message.items" :key='item.id' v-on:click="chooseMenu(item)"
                                    style="background-color: white; color: #333; border-bottom:1px solid #ccc; padding: 5px 10px">
                                {{item.content}}
                                </div>
                            </div>
                            <div v-if="message.answerType === 'RECOMMEND'">
                                <p>你想问的是不是一下问题:</p>
                                <div v-for="item in message.items" :key='item.id' v-on:click="chooseQuestion(item, message)"
                                    style="background-color: white; color: #333; border-bottom:1px solid #ccc; padding: 5px 10px">
                                {{item.content}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="chatInput">
            <div class="chatInputLeft"  v-on:click="transferToHuman()">
                <i class="iconfont">&#xe601;</i>
                <span>转人工</span>
            </div>
            <div class="chatInputCenter">
                <input type="text" placeholder="请简短描述你的问题"  v-model="sendstr">
            </div>
            <div class="chatInputRight"  v-on:click="send">
                发送
            </div>
        </div>
    </div>
</template>
<script>
import { NavBar} from 'vant';
import Vue from 'vue';

Vue.use(NavBar);

export default {
  name: 'Chat',
  data: function () {
    return {
      WebKey: '2045#012faa4d-74ac-4721-8758-39d657703f6e',
      sendstr: '',
      messageList: [],
      lastTime: false,
      historyList: [],
      hasHistory: true
    }
  },
  methods: {
    onClickLeft(){
        this.$router.go(-1);
    },
    greet: function () {
      window['IcsWebSdk'].init(this.WebKey)
      window['IcsWebSdk'].listFunction = (data) => { // data为返回的提示信息文本列表
      // console.log(data);
        // 自定义处理方式
        if (data.answerContentType && data.answer) {
          if (data.answerType === 'BANNER') {
            data.type = 'banner'
          } else {
            // console.log("2",data.answerType)
            data.type = 'answer'
          }
          this.messageList.push(data)
          setTimeout(_ => {
            document.querySelector('.body').scrollTop = document.querySelector('.body').scrollHeight
          })
        }
      }
    },
    asyncLoaded: function (url) {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      if (script['readystate']) { // 兼容IE
        script['onreadystatechange'] = () => { // 状态改变触发事件
          if (script['readyState'] === 'loaded' || script['readyState'] === 'complete') {
            this.greet()
            script['onreadystatechange'] = null
          }
        }
      } else {
        script.onload = () => {
          this.greet()
        }
      }
      script.src = url
      document.body.appendChild(script)
    },
    send: function () {
      this.sendstr = this.sendstr.trim()
      if (this.sendstr === '') {
        return
      }
      window['IcsWebSdk'].sendText(this.sendstr)
      this.messageList.push({
        type: 'send',
        str: this.sendstr
      })
      this.sendstr = ''
      setTimeout(_ => {
        document.querySelector('.body').scrollTop = document.querySelector('.body').scrollHeight
      })
    },
    chooseMenu: function (item) {
      window['IcsWebSdk'].sendSelectRecommend(item.id, 'MENU')
    },
    chooseQuestion: function (item, data) {
      window['IcsWebSdk'].sendSelectRecommend(item.id, 'RECOMMEND', data)
    },
    transferToHuman: function () {
      window['IcsWebSdk'].transferToHuman(res => {
        res.type = 'answer'
        this.messageList.push(res)
        setTimeout(_ => {
          document.querySelector('.body').scrollTop = document.querySelector('.body').scrollHeight
        })
      })
    },
    getHistory: function () {
      window['IcsWebSdk'].getConversation(this.lastTime, conversationList => {
        if (conversationList.length === 0) {
          this.hasHistory = false
        }
        conversationList.forEach(conversation => {
          const messages = conversation.messages.map(res => {
            res.messageBody = JSON.parse(res.messageBody)
            return res
          })
          this.historyList = messages.concat(this.historyList)
        })
        this.historyList[0] && (this.lastTime = this.historyList[0].createTime)
      })
    }
  },
  created: function () {
    this.asyncLoaded('https://bot.4paradigm.com/web/assets/ics-web-sdk.js')
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
    background: #f0f0f0;
}
.body{
    height: 100%;
    width: 100%;
}
.history{
    margin: 0;
    text-align: center;
    padding-top: 6px;
    color: #707070;
    font-size: 16px;
}
 .send-message {
    text-align: right;
}
  .send-message-box {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    position: relative;
    vertical-align: top;
    margin-top: 10px;
  }
    .s3-r {
    width: 7px;
    height: 7px;
    transform: rotate(-45deg);
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: absolute;
    right: -5px;
    background-color: white;
  }
    .user-head {
    background-image: url("../assets/image/userhead.jpg");
    background-size: cover;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    vertical-align: middle;
  }
.answer-message {
    text-align: left;
}
.robot-head {
    background-image: url("../assets/image/icon.png");
    background-size: cover;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
}
.answer-message-box {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
    background-color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    position: relative;
    vertical-align: top;
    margin-top: 10px;
}
  .s3-l {
    border: 7px solid rgba(255, 255, 255, 0);
    border-right-color: #fff;
    position: absolute;
    left: -14px;
  }
    .banner{
    text-align: center;
  }
  .banner>span{
    display: inline-block;
    background-color: #ccc;
    color: white;
    font-size: 12px;
    padding: 1px 10px;
    border-radius: 10px;
  }
.chatInput{
    height: 8%;
    width: 100%;
    border-top: 1px solid #A8A8A8;
    padding: 7px;
    box-sizing: border-box;
    overflow: hidden;
}
.chatInputLeft{
    float: left;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.chatInputLeft i{
    font-size: 22px;
}
.chatInputLeft span{
    font-size: 12px;
    transform: scale(0.8);
}
.chatInputCenter{
    float: left;
    width: 70%;
    margin-left: 8px;
}
.chatInputCenter input{
    border: 1px solid #A8A8A8;
    border-radius:6px;
    height: 38px;
    outline: 0;
    width: 100%;
    padding-left: 6px;
    box-sizing: border-box;
}
.chatInputRight{
    float: right;
    color: #fff;
    background: #0099FF;
    width: 17%;
    height: 37px;
    text-align: center;
    border-radius: 6px;
    line-height: 37px;
}
</style>