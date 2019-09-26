<template>
    <div>
        <!-- 录播图区域 -->
        <lunbos v-bind:lunbo="lunbo" :isfull="true"></lunbos>
        <!-- 内容区域 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/news">
		                   
                            <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photo">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goods">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                     <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li> 
		        </ul> 
		</div>
    </div>
</template>
<script>

import {Toast} from "mint-ui";
//导入轮播组件
import lunbos from "../subcomponent/lunbo.vue"
export default {
    data(){
        return {
            lunbo:[]
        }
    },
    created(){
        //数据创建时期执行getswiper函数,来获取数据
        this.getSwiper();
    },
    methods:{
        getSwiper(){
            this.$http.get('api/getlunbo').then((result)=>{
                    // console.log(result.body);
                if(result.body.status==0){
                    // console.log(result.body.data.hot.list);
                    this.lunbo = result.body.message;
                   
                }else{
                    Toast('加载失败')
                }
            })
        }
    },
    components:{
        lunbos
    }
    
}
</script>

<style lang="scss" scoped>
.mui-content>.mui-table-view:first-child{
 margin-top: 0px;
 }
.mui-table-view{
.mui-table-view-cell{
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
    }
}
    
</style>


