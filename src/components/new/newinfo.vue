<template>
    <div class="newContainer">
        
        <div class="title">{{listinfo.title}}</div>
        <div class="subtitle">
            <span>时间：{{listinfo.add_time|dataFormat}}</span>
            <span>点击：{{listinfo.click}}次</span>
        </div>
        <hr>
        <div class="content" v-html="listinfo.content">
        </div>
        <comment-box  v-bind:id="this.id"></comment-box>
    </div>
</template>
<script>
// import { constants } from 'crypto';
import {Toast} from 'mint-ui';
//注意不可以再root根元素增加vue指令，这样会渲染更多的元素
//导入评论子组件
import comment from "../subcomponent/comment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,
            listinfo:{}
        }
    },
    created(){
        this.getnewinfo();
    },
    methods:{
        getnewinfo(){
            this.$http.get('api/getnew/'+this.id).then(function(result){
               
               if(result.body.status==0){
                   this.listinfo = result.body.message[0]
               }else{
                   Toast('获取新闻失败')
               }
            })
        }
    },
    components:{
        "comment-box":comment
    }

}
</script>
<style <style lang="scss" scoped>
 .newContainer{
    padding: 4px;
    .title{
        text-align: center;
        font-size: 16px;
        padding: 15px 0px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #26a2ff
    }
 }
</style>

