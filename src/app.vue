<template>   
    <div class="app-container">
    <!-- header区域 -->
        <mt-header fixed title="The First Vue Project"></mt-header>
    <!-- main区域 -->
	<!-- transition增加动画效果 -->
	<transition>
		<router-view></router-view>
	</transition>
	
    <!-- footer区域tabbar及路由跳转 -->
         <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>   
  
    </div>
   
</template>
<script>

export default {
  
}
</script>

<style lang="scss" scoped>
.mint-header.is-fixed{
	z-index: 1000;
}
.app-container{
    padding-top:40px;
	padding-bottom: 50px;
	overflow-x: hidden;//解决动画多出的滚动条
	
};
.v-enter{
	opacity: 0;
	transform:translateX(100%);//进去时候的方向
}
.v-leave-to{
	transform: translateX(-100%);//出来时候的方向
	position:absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.3s ease;//中间过渡的效果
}
// 解决类名
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>


