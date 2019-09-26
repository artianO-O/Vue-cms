<template>
    <div class="comment-wrap">
        <div class="comment-title">
            <h3>发表评论</h3>
        </div>
        <textarea placeholder="发表你的意见，最多120字" v-model="msg"></textarea>
        <mt-button type='primary' size='large' v-on:click='send'>发布评论</mt-button>
        <div class="comment-list" v-for="(item,id) in comment" v-bind:key= 'item.add_item'>
            <div class="comment-item">
                <div class="comment-title">
                    第{{id+1}}楼  用户：{{item.user_name}}
                    发布时间：{{item.add_time|dataFormat}}
                </div>
                <div class="comment-boby">
                    {{item.content=='undefined' ? "这个用户很懒":item.content}}
                </div>
            </div>
        </div>
        <mt-button type='danger' plain size='large' v-on:click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
// import { constants } from 'crypto';
import {Toast} from 'mint-ui';
export default {
    //获取评论内容
    data(){
        return {
            pageindex:1,//默认为1
            comment:[],
            msg:''
        }
    },
    created(){
        this.getcomment();
    },
    methods:{
        getcomment(){//加载评论数据
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then((result)=>{
                console.log(result.body);
                if(result.body.status==0){
                    // this.comment = result.body.message;
                    this.comment = this.comment.concat(result.body.message)
                }
            })
        },
        getmore(){//加载更多评论
            this.pageindex++;
            this.getcomment();
        },
        send(){//发送评论
            if(this.msg.trim().length==0){
                Toast('评论内容不能为空');
                return false;
            }
            //post
            // Vue.http.post('/someUrl', [body], [config]).then(successCallback, errorCallback);
            //第一个参数url
            //第二个发送的数据
            //相关的配置，处理编码为json，已经全局配置,数据的格式
            this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()}).then(res=>{
                if(res.body.status==0){
                    var obj = {
                        user_name:"匿名用户",
                        add_time:new Date(),
                        content:this.msg.trim()
                    };
                    this.comment.unshift(obj);
                    this.msg='';
                }else{
                    Toast('评论失败')
                }
            })
        }

    },
    //父向子组件传值,通过1vue-bind，2props支持该值
    props:["id"]

}
</script>
 <style lang="scss" scoped>
    .comment-item{
        margin: 10px 0px;
        .comment-title{
            font-size: 14px;
            line-height: 30px;
            background-color: #ccc;
        }
        .comment-boby{
            line-height: 35px;
            text-indent: 15px;
        }

    }

</style>
