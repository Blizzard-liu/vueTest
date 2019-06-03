import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hi from "@/components/Hi";
import Hi1 from "@/components/Hi1";
import Hi2 from "@/components/Hi2";
import Hi3 from "@/components/Hi3";
import Error from "@/components/Error";
import Count from "@/components/count";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: HelloWorld
    },
    {
      path: "/hi",
      component: Hi,
      children: [
        { path: "/", name: "Hi", component: Hi },
        { path: "hi1", name: "Hi1", component: Hi1 },
        { path: "hi2", name: "Hi2", component: Hi2 }
      ]
    },

    {
      path: "/Hi3/:newsId/:newsTitle", //:冒号的形式传递参数
      name: "Hi3",
      components: {
        default: Hi3,
        left: Hi2,
        right: Hi1
      },
      beforeEnter: (to, from, next) => {
        console.log("我进入了Hi3模板");
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: "*",
      component: Error
    },
    {
      path:"/count",
      name:'count',
      component:Count
    }
  ]
});
