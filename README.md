# 如何使用vue-router
## 利用脚手架搭建项目
### 安装node
### 安装npm
### 安装vue-cli
### vue create 项目名
## 安装路由
`npm i vue-router`
## 引入路由
```js
import vueRouter form 'vue-router'
```
## 使用路由
```
jsVue.use(vueRouter)
```
## 定义路由组件
```js
const routes = [
  {
    path:'/',
    component:'./Home'
  },{
    path:'./About',
    component:()=>import('./About')
  }
]
```
## 配置路由
```js
  const router = new VueRouter({routes})
```
## 把路由组件挂载到Vue实例上
```js
new Vue({
  render:h=>h(App),
  router
}).$mount('#app')
```
