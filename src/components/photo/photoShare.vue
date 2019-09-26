<template>
    <div>
        <!-- 底部分类区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <!-- 三元表达式激活类，给类名绑定数组 -->
						<a v-bind:class="['mui-control-item',item.id==0 ? 'mui-active' :'']" v-for="item in category" v-bind:key='item.id' v-on:click="getimglist(item.id)">
							{{item.title}}
						</a>
						
                       
					</div>
				</div>
		</div>
        <!-- 图片列表区域 -->
        <ul class="imglist">
            <router-link v-for="item in imglist" v-bind:key='item.id' v-bind:to="'/home/photoinfo/'+item.id"  tag='li'>
                <img v-lazy="item.img_url">
                <div class="intro-wrap">
                    <div class="intro-title">
                        {{item.title}}
                    </div>
                    <div class="intro-zhaiyao">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>

    </div>
</template>
<script>

import mui from  "../../lib/dist/js/mui.js"

export default {
    data(){
        return {
            category:[],
            imglist:[]
        }
    },
    created(){
        this.getcatagory();
        this.getimglist(0);//默认为所有的图片列表
    },
    mounted(){//dom元素已经挂载完成
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getcatagory(){//获取顶部分类资料
            this.$http.get('api/getimgcategory').then((res)=>{
                if(res.body.status==0){
                    //这里手动增加一个全部的分类名称
                    res.body.message.unshift({
                        title:"全部",
                        id:0
                    }),
                    this.category = res.body.message
                }
            })
        },
        getimglist(cateid){//获取图片list,需要顶部分类的id
            this.$http.get('api/getimages/'+cateid).then((result)=>{
                if(result.body.status==0){
                    this.imglist = result.body.message
                }
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.imglist{
    padding: 0px 10px;
    margin: 0;
    list-style: none;
    li{
        background-color: #ccc;
        box-shadow: 0px 0px 6px #ccc;
        margin-bottom: 10px;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle
        }
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
        .intro-wrap{
            max-height: 87px;
            position:absolute;
            bottom: 0;
            background:rgba(0,0,0,0.5);
            color: #fff;
            .intro-title{
                font-size: 15px
            }
            .intro-zhaiyao{
                font-size: 12px;
            }
        }
    }
}

</style>


