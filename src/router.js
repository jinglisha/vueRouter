// 引入路由
import VueRouter from "vue-router";

// 引入vue
import Vue from "vue";

// 引入页面
import Home from "./views/Home";

// 使用路由
Vue.use(VueRouter);

// 定义路由组件
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: () => import("./views/about"), //异步组件
	},
];

// 创建router实例
export default new VueRouter({
	mode: "history",
	routes,
});



