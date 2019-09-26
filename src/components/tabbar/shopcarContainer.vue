<template>
    <div class="shopcar">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                        <div class="img-wrap">
                            <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200059017695.jpg" alt="">
                        </div>
                        
                        <div class="goods">
                            <p class="title">苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</p>
                            <p class="pirce-wrap">
                                <span class="price" style="height:23px">￥2199</span>
                                <numbox></numbox>
                                <span>删除</span>
                            </p>
                        </div>
					</div>
				</div>
		</div>
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                         <div class="img-wrap">
                            <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200059017695.jpg" alt="">
                        </div>
                        <div class="goods">
                            <p class="title">苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</p>
                            <p class="pirce-wrap">
                                <span class="price" style="height:23px">￥2199</span>
                                <numbox></numbox>
                                <span>删除</span>
                            </p>
                        </div>
					</div>
				</div>
		</div>
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                         <div class="img-wrap">
                            <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200059017695.jpg" alt="">
                        </div>
                        <div class="goods">
                            <p class="title">苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</p>
                            <p class="pirce-wrap">
                                <span class="price" style="height:23px">￥2199</span>
                                <numbox></numbox>
                                <span>删除</span>
                            </p>
                        </div>
					</div>
				</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                    <div class="count">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品：<span>0</span> 件</p>
                    </div>

					<mt-button type='danger' >结算</mt-button>
                        
                       
                        
					</div>
				</div>
		</div>
        
        
    </div>
</template>
<script>
import numbox from "../subcomponent/shopnum.vue";
export default {
    data(){
        return{}
    },
    components:{
        numbox:numbox
    }
}
</script>
<style <style lang="scss" scoped>
.mui-card-content-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-wrap{
        padding: 3px;
    img{
        width: 70px;
        height: 70px;
    }
    }
   
    .goods{
        .title{
            font-size: 16px;
            color: #000;
            font-weight: bold;
            max-height: 45px;
            overflow: hidden;
        }
        .pirce-wrap{
            display: flex;
            justify-content: space-between;
            .price{
                font-weight: bold;
                color: red;
            }
           
        }
    }
}
</style>



