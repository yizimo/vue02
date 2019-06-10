import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login'
import Cart from '../components/cart'
import Sign from '../components/sign-in'
import Confirm  from '../components/confirm-order'
import ForGotPwd from '../components/forgot-pwd'
import GoodsDetail from '../components/goods-detail'
import Pay from '../components/pay'
import ResetPwd from '../components/reset-pwd'
import SearchGoods from '../components/search-goods'
import Uc from '../components/uc'
import UcAccount from '../components/uc-account'
import UcAdress from '../components/uc-adress'
import UcApplyRefund from '../components/uc-apply-refund'
import UcEvaludate from '../components/uc-evaludate'
import UcFav from '../components/uc-fav'
import UcFavShop from '../components/uc-fav-shop'
import UcOrderDetail from '../components/uc-order-detail'
import UcRefund from '../components/uc-refund'
import UcSafe from '../components/uc-safe'
import UcVerity from '../components/uc-verify'
import UcVerityTwo from '../components/uc-verity-two'
import UcVerityTh from '../components/uc-verity-three'
import UcFoortPrint from '../components/uv-footprint'
import UcOrder from '../components/uv-order'
import KB from '../page/kongbai'
import backcharge from '../components/backcharge'
import usercharge from '../components/usercharge'
import changeuser from '../components/addgoods'
import classcharge from '../components/classcharge'
import goodsales from '../components/goodsales'
import shopsales from '../components/shopsales'
import ordercharge from '../components/ordercharge'
import classedit from '../page/classedit'
import shopedit from '../page/shopedit'
import useredit from '../page/useredit'
import addclass from '../page/addclass'
import shopkeepper from '../components/shopkeepper'
import shoporder from '../components/shoporder'
import commentcharge from '../components/commentcharge'
import addgoods from '../components/addgoods'
import uploadimg from '../page/uploadimg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/kb',
      name: 'kb',
      component: KB
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/forgot_pwd',
      name: 'forgot_pwd',
      component: ForGotPwd
    },
    {
      path: '/goods_detail',
      name: 'goods_detail',
      component: GoodsDetail
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/reset_pwd',
      name: 'reset_pwd',
      component: ResetPwd
    },
    {
      path: '/search_goods',
      name: 'search_goods',
      component: SearchGoods
    },
    {
      path: '/uc',
      name: 'uc',
      component: Uc
    },
    {
      path: '/uc_account',
      name: 'uc_account',
      component: UcAccount
    },
    {
      path: '/uc_adress',
      name: 'uc_adress',
      component: UcAdress
    },
    {
      path: '/uc_apply_refund',
      name: 'uc_apply_refund',
      component: UcApplyRefund
    },
    {
      path: '/uc_evaludate',
      name: 'uc_evaludate',
      component: UcEvaludate
    },
    {
      path: '/uc_fav',
      name: 'uc_fav',
      component: UcFav
    },
    {
      path: '/uc_fav_shop',
      name: 'uc_fav_shop',
      component: UcFavShop
    },
    {
      path: '/uc_order_detail',
      name: '/uc_order_detail',
      component: UcOrderDetail
    },
    {
      path: '/uc_refund',
      name: 'uc_refund',
      component: UcRefund
    },
    {
      path: '/uc_safe',
      name: 'uc_safe',
      component: UcSafe
    },
    {
      path: '/uc_verity',
      name: 'uc_verity',
      component: UcVerity
    },
    {
      path: '/uc_verity_two',
      name: 'uc_veroty_two',
      component: UcVerityTwo
    },
    {
      path: '/uc_verity_th',
      name: 'uc_veroty_th',
      component: UcVerityTh
    },
    {
      path: '/uc_footprint',
      name: 'uc_footprint',
      component: UcFoortPrint
    },
    {
      path: '/uc_order',
      name: 'uc_order',
      component: UcOrder
    },
    {
      path: '/backcharge',
      name: 'backcharge',
      component: backcharge
    },
    {
      path: '/usercharge',
      name: 'usercharge',
      component: usercharge
    },
    {
      path: '/changeuser',
      name: 'changeuser',
      component: changeuser
    },
    {
      path: '/classcharge',
      name: 'classcharge',
      component: classcharge
    },
    {
      path: '/goodsales',
      name: 'goodsales',
      component: goodsales
    },
    {
      path: '/ordercharge',
      name: 'ordercharge',
      component: ordercharge
    },
    {
      path: '/shopsales',
      name: 'shopsales',
      component: shopsales
    },
    {
      path:'/classedit',
      name:'classedit',
      component:classedit
    },
    {
      path:'/shopedit',
      name:'shopedit',
      component:shopedit
    },
    {
      path:'/useredit',
      name:'useredit',
      component:useredit
    },
    {
      path:'/addclass',
      name:'addclass',
      component:addclass
    },
    {
      path:'/shopkeepper',
      name:'shopkeepper',
      component:shopkeepper
    },
    {
      path:'/addgoods',
      name:'addgoods',
      component:addgoods
    },
    {
      path:'/shoporder',
      name:'shoporder',
      component:shoporder
    },
    {
      path:'/commentcharge',
      name:'commentcharge',
      component:commentcharge
    },
    {
      path:'/addgoods',
      name:'addgoods',
      component:addgoods
    },
    {
      path:'/uploadimg',
      name:'uploadimg',
      component:uploadimg
    }
  ]
})
