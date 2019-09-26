<template>
   <ul class="mui-table-view">

				<li class="mui-table-view-cell mui-media" v-for="item in listdata" v-bind:key="item.citme">
					<router-link v-bind:to="'/home/newinfo'+item.id ">
						<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3> 
							<p class='mui-ellipsis'>
                                <span>时间：{{item.add_time|dataFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>		

		</ul>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            listdata:[]
        }
    },
    created(){
        this.getlistdata();
    },
    methods:{
        getlistdata(){
            this.$http.get("api/getnewslist").then((result)=>{
                // console.log(result.body);
                if(result.body.status==0){
                    this.listdata = result.body.message;
                }else{
                   Toast('获取数据失败') 
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-media-body{
        h3{
            font-size:16px;
        }
        .mui-ellipsis{
            font-size: 12px;
            display:flex;
            justify-content: space-between;
            color: #26a2ff
        }
    }
</style>

