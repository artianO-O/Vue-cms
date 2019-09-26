<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="items in lunbo" v-bind:key="items.id">
            <img v-bind:src="items.img?items.img:items.src" alt="" :class="{'isfull':isfull}">
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
//这里出现一个问题，就是首页的轮播图和商品页面的轮播图图片的width和height不一样
// 首页的是width和height都是100%，而商品的是只需要height100%,width自适应
//解决方法，父组件继续传一个类isfull
//注意父组件不可以直接修改子组件的样式
export default {
    props:["lunbo","isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe{
        height: 200px;
        .mint-swipe-item{
            text-align: center;
           
            img{
                // width: 100%;
                height: 100%;
            }
        }
    }
    .mui-content>.mui-table-view:first-child{
        margin-top:0px;
    }
    .isfull{
        width: 100%;
    }
</style>
