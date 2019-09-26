//抽离路由模块
// router模块
//1 导入路由模块
import vueRouter from "vue-router";

//2 导入路由组件
import home from "./components/tabbar/homeContainer.vue";
import member from "./components/tabbar/memberContainer.vue";
import shopcar from "./components/tabbar/shopcarContainer.vue";
import my from "./components/tabbar/myContainer.vue";
import news from "./components/new/news.vue";
import newinfo from "./components/new/newinfo.vue";
import photo from "./components/photo/photoShare.vue";
import photoinfo from "./components/photo/photoinfo.vue";
import goods from "./components/good/goodlist.vue";
import goodinfo from "./components/good/goodinfo.vue";
import gooddesc from "./components/good/gooddesc.vue";
import goodcmt from "./components/good/goodcmt.vue";

//配置路由规则对象
var router = new vueRouter({
    routes:[
      //路由重定向,一进入就看到主页
      {path:"/",redirect:"/home"},
      {path:"/home",component:home,
      // children:[
      //   {path:'news',component:news},
       
      //  ]
     },
      {path:"/member",component:member},
      {path:"/shopcar",component:shopcar},
      {path:"/search",component:my},
      {path:"/home/news",component:news},
      {path:"/home/newinfo:id",component:newinfo},
      {path:"/home/photo",component:photo},
      {path:'/home/photoinfo/:id',component:photoinfo},
      {path:'/home/goods',component:goods},
      {path:"/home/goodinfo/:id",component:goodinfo,name:'goodinfo'},
      {path:'/home/gooddesc/:id',component:gooddesc},
      {path:'/home/goodcmt/:id',component:goodcmt}
    ],
    //路由高亮显示，替换router-link-acti  ve类
    linkActiveClass:"mui-active"
});
//导出路由模块
export default router;