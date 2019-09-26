<template>
    <div class="photoinfo-wrap">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtile"><span>时间:{{photoinfo.add_time}}</span>
        <span>点击：{{photoinfo.click}}次</span></p>
        <hr>

        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 内容区域 -->
        <div class="content" v-html='photoinfo.content'>
        </div>
        <hr>
        <!-- 这里需要父子组件传值 -->
        <comment-box v-bind:id="id"></comment-box>
    </div>
</template>
<script>
import { constants } from 'crypto';
// import Vue from "vue";
// // with parameters install
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
//   })
//导入评论子组件
import comment from '../subcomponent/comment.vue';
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:[],
            slide1:[]
        }
    },
    created(){
        //注意http获取数据的方法，数据加载后的钩子函数执行
        this.getphotoinfo();
        this.getpic();
    },
    methods:{
        
        getphotoinfo(){//获取图片详情
          this.$http.get("api/getimageInfo/"+this.id).then(result=>{
              if(result.body.status==0){
                  console.log(result.body)
                  this.photoinfo = result.body.message[0]
              }
          })

        },
        getpic(){//获取缩略图
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status==0){
                    result.body.message.forEach(element => {
                        element.w=600;
                        element.h=400;
                    });
                    this.slide1 = result.body.message
                }
            })
        },
        handleClose () {
        console.log('close event')
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>
 <style lang="scss" scoped>
    .photoinfo-wrap{
        padding: 5px;
        h3{
            color: #26a2ff;
            margin: 15px 0px;
            font-size: 16px;
            text-align: center;
        }
        .subtile{
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
        .content{
            font-size: 12px;
        }
    }
</style>
