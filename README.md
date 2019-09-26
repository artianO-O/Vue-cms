# 效果预览
![img](https://github.com/artianO-O/Vue-cms/blob/master/src/images/vue1.jpg)

![img](https://github.com/artianO-O/Vue-cms/blob/master/src/images/vue2.jpg)

![img](https://github.com/artianO-O/Vue-cms/blob/master/src/images/vue3.jpg)

![img](https://github.com/artianO-O/Vue-cms/blob/master/src/images/vue4.jpg)

# 这个是一个vue相关的项目

## 每一行代码都富有灵魂

### git提交到远程仓库的命令
1.git status
2.git add . 
3.git commit -m 'msg' ==daguo
4.git push address master 

## 项目制作
### 利用mint-ui组件库制作header
### 利用mui库制作底部tabbar
### 在中间区域放置路由模块router-view

## 加载轮播图数据 
1通过vue-resource cnpm i vue-resource -S 的this.$htttp.get获取数据
2获取到数据保存到data里面
3使用v-for循环渲染到每一个item中

## 制作新闻列表
1.制作新闻列表组件，先制作好页面布局，利用mui，
2.利用vue-resource获取数据
3.渲染真实的数据
4.在router.js中匹配路由规则跳转/home/news

## 实现新闻列表跳转到新闻详情页面，并且制作
1.改造新闻列表页面的每一条数据改造成路由链接到/home/newinfo/:id，并且指定唯一的id
2.新建新闻详情组件
3.在router.js中匹配路由规则

## 制作评论页面，属于公共模块，可以抽离出来成一个conment.vue
1.制作comment.vue组件
2.在需要comment.vue组件的组件中导入该组件
3.在父组件中，使用component属性注册为子组件，
4.在注册子组件的注册名字以标签的形式在页面中引用

## 获取评论数据加载到页面中
getcomment()方法

## 点击加载更多实现加载评论数据
1.添加点击事件，点击的时候让pageindex++,加载第二页的数据，重新调用getcomment方法
2.为了不让新数据覆盖老数据，调用数组的拼接方法concat方法。

## 实现评论功能
1.对评论表单进行双向数据绑定
2.点击评论按钮绑定一个点击事件，获取表单数据，同时先利用字符串的trim方法去掉空格，判断输入是否为空
3.将评论数据发送到服务器，利用post方法
4.将评论内容显示在第一页给用户
4.1 如果这里再一次调用getcomment方法的话，由于方法内部原因，是对pageindex进行++,如果先点击加载更多，那么就跳转到其他页，此时的pageindex不是1,再点击发布评论时候就显示不了前面几页的评论
4.2换一种思路：手动将用户的评论内容拼接成一个对象，使用数组unshift方法加载到前面

## 图片分享页面
1.制作图片分享组件，在home页面改造router-link
2.在router.js中导入该组件，配置该路由

## 制作水平滚动功能
1.导入mui.js,控制台出现'caller', 'callee', and 'arguments' properties may not be accessed on strict，由于mui.js使用非严格模式造成
解决方法1.1 修改mui成严格模式 这个不现实 1.2 修改webapck配置为非严格模式，这个需要cnpm i @babel/plugin-transform-modules-commonjs @babel/plugin-transform-strict-mode -D同时在.bablerc中配置
"plugins": [
      ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
    ]

2.初始化scroll控件，出现底部tabbar不能切换，需要修改mui-tab-item类名就可以

## 图片分类数据获取
1.get api/getcategory 

## 获取所有的图片list
1利用mint-ui里面的lazy-load组件
2.api/getimages/:cateid需要传递每一个分类的id

## 图片详情页面
1.先制作新闻图片详情页面的组件
2.需要将photoshare页面的li改造成router-link,同时需要将tag指向为li
3.在touter.js中匹配路由规则
4.利用api/getthumimages/43获取数据渲染页面

## 图片缩略图区域
1.安装一个veu预览插件cnpm i vue-preview -S
2.安装插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

## 商品列表
1.制作goodlist组件
2.修改home里面的路由链接
3.在router.js匹配路由规则
4.从服务器中加载数据，
5.这里采用编程式跳转，利用this.$router.push({paht:""});
注意，一定要区分开this.$route和this.$router,
this.$route是获取params,jquery路由参数的，而this.$router是获取路由

## 抽离轮播图成组件
1.创建一个新的轮播组件,涉及一个父子组件传值,自组件利用props数组接收
2.在需要的组件中import导入，和components注册子组件

## 抽离一个数字选择框的组件
1.利用mui里面的numbox

## 利用编程式导航实现商品评论和商品详情

