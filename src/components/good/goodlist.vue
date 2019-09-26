<template>
    <div class="goods-container">
        <!-- 第一种实现路由跳转是router-link创建a标签 -->
        <!-- <router-link class="good-item" v-for="item in goodlist" v-bind:key='item.id' :to="'/home/goodinfo/'+item.id" tag='div'>
            <div class="goodimg">
                <img :src="item.img_url" alt="">
            </div>
            <h3 class="title">{{item.title}}</h3>
            <div class="sub">
                <p class="price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="intro">
                    <span class="sell">热卖中</span>
                    <span class="count">剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->

        <!-- 第二使用编程的方式进行跳转，js中的window.location.href -->
        <div class="good-item" v-for="item in goodlist" v-bind:key='item.id' v-on:click="link(item.id)">
            <div class="goodimg">
                <img :src="item.img_url" alt="">
            </div>
            <h3 class="title">{{item.title}}</h3>
            <div class="sub">
                <p class="price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="intro">
                    <span class="sell">热卖中</span>
                    <span class="count">剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>




        <mt-button type="danger" size='large' v-on:click="showmore">加载更多</mt-button>
    </div>
</template>
<script>
import { constants } from 'crypto';
export default {
    data(){
        return {
            pageindex:1,//默认为加载数据的页数为1
            goodlist:[]

        }
    },
    created(){
        //执行获取商品列表的数据
        this.getgoodlist();
    },
    methods:{
        getgoodlist(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                // console.log(result.body)
                if(result.body.status==0){
                    this.goodlist = this.goodlist.concat(result.body.message)
                }
            })
        },
        showmore(){
            this.pageindex++;
            this.getgoodlist();
        },
        link(id){
            // console.log(this);
            //字符串的方式
            // this.$router.push("/home/goodinfo/"+id);
            // 对象
            this.$router.push({ path: "/home/goodinfo/"+id });
            //路由的命名方式
            // this.$router.push({name:'goodinfo',parmas:{id:id}})
        }
    },
}
</script>
<style lang="scss" scoped>
    .goods-container{
        padding: 4px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .good-item{
            box-sizing: border-box;
            padding: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 49%; 
            border: 1px solid #ddd;
            box-shadow: 0 0 8px #ddd;
            margin: 4px 0px;
            .goodimg{
                img{width: 100%;}
            }
            .title{
                font-size: 16px;
            }
            .sub{
                background-color: #ddd;
                min-height: 50px;
                p{
                    margin:0;
                }
                .price{
                    .new{
                        color: red;
                        font-size: 15px;
                        font: bold;
                        margin-right: 10px;
                    }
                    .old{
                        font-size: 12px;
                        text-decoration: line-through;
                    }
                }
                .intro{
                    display: flex;
                    justify-content:space-between;
                }
            }
        }
    }
</style>

