import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

// 一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。
export default {
  install(Vue) {
    // https://cn.vuejs.org/api/application.html#app-use
    // 安装一个插件。
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  }
};
