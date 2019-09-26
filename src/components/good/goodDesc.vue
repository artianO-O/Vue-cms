<template>
    <div class="contents">
        <h3 class="title">{{desclist.title}}</h3>
        <hr>
        <div v-html="desclist.content" class="content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            desclist:{},
        }
    },
    created(){
        this.getdesc();
    },
    methods:{
        getdesc(){
            this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.desclist = result.body.message[0]
                }
            })
        }
    }
}
</script>
<style lang="scss">
.contents{
    padding:3px;
    .title{
        font-size:15px;
        text-align: center;
        line-height: 40px;    
    }
    .content{
        img{
            width:100%;
        }
    }
}

</style>
