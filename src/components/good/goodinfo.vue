<template>
    <div class="good-wrap">
        <!-- 顶部轮播图 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<lunbo v-bind:lunbo="lunbo" :isfull="false"></lunbo>
					</div>
				</div>
		</div>
        <!-- 中间商品区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{goodinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价 ：<span class="old"> ￥{{goodinfo.market_price}}</span>
                            销售价：<span class="new"> ￥{{goodinfo.sell_price}}</span>
                        </p>
                        <p>购买数量：<numbox></numbox></p>
                        <p>
                            <mt-button type='primary' size='small'>立即购买</mt-button>
                            <mt-button type='danger' size='small'>加入购物车</mt-button>
                        </p>
					</div>
				</div>
				
		</div>

        <!-- 底部区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号：{{goodinfo.goods_no}}</p>
                        <p>库存情况：{{goodinfo.stock_quantity}}</p>
                        <p>上架时间：{{goodinfo.add_time}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size='large' v-on:click="goodDesc(id)">图文介绍</mt-button>
                    <mt-button type='danger' size='large' v-on:click="goodcmt(id)">商品评论</mt-button>
                </div>
		</div>

    </div>
</template>
<script>
//导入轮播组件
import lunbotu from "../subcomponent/lunbo.vue";
//导入numbox组件
import numbox from "../subcomponent/numbox.vue";
import mui from '../../lib/dist/js/mui.js'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbo:[],
            goodinfo:{}
        }
    },
    created(){
        this.getlunbo();
        this.getgoodinfo();
    },
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods:{
        getlunbo(){//获取轮播图
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.lunbo = result.body.message;
                }
            })
        },
        getgoodinfo(){//获取图片详情
            this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.goodinfo = result.body.message[0]
                }
            })
        },
        goodDesc(id){
            this.$router.push({path:"/home/gooddesc/"+id})
        },
         goodcmt(id){
            this.$router.push({path:"/home/goodcmt/"+id})
        }
    },
    components:{
        lunbo:lunbotu,
        numbox:numbox
    }

}
</script>
<style lang="scss" scoped>
.good-wrap{
    background-color: #ddd;
    overflow: hidden;
    .mui-card{

        .price{
            .old{
                text-decoration: line-through;
            }
            .new{
                color:red;
                font-size: 16px;
                font-weight: bold
            }
        }
        .mui-card-footer{
            display: block;
            button{
                margin:10px 0px;
            }
        }
    }
}


</style>
