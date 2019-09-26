<template>
    <div>
        <cmt :id="this.$route.params.id"></cmt>

    </div>
</template>
<script>
//导入评论组件
import cmt from '../subcomponent/comment.vue'
export default {
    components:{
        cmt:cmt
    }
}
</script>
<style lang="sass" scoped>

</style>
