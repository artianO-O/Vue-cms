//入口文件
//导入vue
import Vue from "vue";
//1.1导入路由模块
import VueRouter from "vue-router";
//1.2使用路由
Vue.use(VueRouter);
//1.3导入自定义的路由规则
import router from "./router.js";

//导入格式化时间的插件
import moment from 'moment';
//定义全局的过滤器
Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern)
})

//2.1获取数据 导入vue-resource
import vueResource from "vue-resource";
//2.2安装vue-resource
Vue.use(vueResource);
//2.3设置请求的根路劲
Vue.http.options.root = "http://www.liulongbin.top:3005";
//处理表单post数据的格式为application/x-www-form-urlencoded形式发送，为json格式
Vue.http.options.emulateJSON = true;

//导入根组件
import app from "./app.vue";

//导入所有mint-ui组件
import Mintui from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mintui);

// 安装vue-preview预览插件
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview)
 
// with parameters install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})


//导入mui样式
import "./lib/dist/css/mui.min.css";
import "./lib/dist/css/icons-extra.css"

var vm = new Vue({
    el:'#app',
    data:{},
    //render渲染根组件
    render:function(createElement){
        return createElement(app)
    },
    //1.4挂载路由到vm
    router:router

})
  