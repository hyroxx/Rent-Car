import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "../components/MainContent";
import CarsItem from "../views/CarsItem";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/rent',
    name: 'Rent',
    component: CarsItem,
  },

];

const router = new VueRouter({
  routes,
  mode:'history'
});

// router.beforeEach((to,from,next)=>{
//   if (to.name !== 'login' && !isAuthentication) next('/login');
//   else next()
// });

export default router