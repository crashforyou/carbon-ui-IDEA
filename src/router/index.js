import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue"
import Login from "@/views/Login.vue"
import BulkAgreementGroupView from '@/views/bottomViews/BulkAgreementServiceView/Group.vue'
import BulkAgreementOfferView from '@/views/bottomViews/BulkAgreementServiceView/Offer.vue'
import BulkAgreementQueryView from '@/views/bottomViews/BulkAgreementServiceView/Query.vue'
import CapitalQuery from "@/views/bottomViews/CapitalServiceView/CapitalQuery.vue";
import InOrOut  from "@/views/bottomViews/CapitalServiceView/InOrOut.vue";
import QuotaQuery from "@/views/bottomViews/QuotaServiceView/QuotaQuery.vue";
import QuotaInOrOut from "@/views/bottomViews/QuotaServiceView/QuotaInOrOut.vue";
import DayBargainSelect from "@/views/bottomViews/DayQueryServiceView/DayBargainSelect.vue";
import DayCommissionSelect from "@/views/bottomViews/DayQueryServiceView/DayCommissionSelect.vue";
import ListingSelect from "@/views/bottomViews/HistoryQueryServiceView/ListingSelect.vue";
import BulkAgreementSelect from "@/views/bottomViews/HistoryQueryServiceView/BulkAgreementSelect";
import ActionSelect from "@/views/bottomViews/HistoryQueryServiceView/ActionSelect";
import ListingServiceIndex from "@/views/bottomViews/ListingServiceView/index.vue";
import ReportSelect from "@/views/bottomViews/ReportServiceView/ReportSelect.vue";
import AuctionTrade from "@/views/bottomViews/AuctionServiceView/AuctionTrade.vue";
import AuctionRequest from "@/views/bottomViews/AuctionServiceView/AuctionRequest.vue";
import CapitalAccountManage from "@/views/bottomViews/UserServiceView/CapitalAccountManage.vue"
import QuotaAccountManage from "@/views/bottomViews/UserServiceView/QuotaAccountManage.vue"
import BulkAgreementGroupQueryView from "@/views/bottomViews/BulkAgreementServiceView/GroupQuery.vue"
const routes = [
  {
    path: '/',
    redirect: '/login' // 默认重定向到登录页面
  },
  {
    path: '/login',
    name: 'Login',
    components:{
      default:Login
    }
  },
  {
    path: '/index',
    name: 'Main',
    component:Main,
    children:[
      {
        path: '/listing',
        name: 'Listing',
        components:{
          buttomView:ListingServiceIndex
        }
      },
      {
        path: '/bulkAgreement/Offer',
        name:'BulkAgreementOffer',
        components:{
          buttomView:BulkAgreementOfferView
        }
      },
      {
        path: '/bulkAgreement/Group',
        name:'BulkAgreementGroup',
        components:{ 
          buttomView:BulkAgreementGroupView
        }
      },
      {
        path: '/bulkAgreement/Query',
        name:'BulkAgreementQuery',
        components:{ 
          buttomView:BulkAgreementQueryView
        }
      },
      {
        path: '/bulkAgreement/QueryGroup',
        name:'BulkAgreementGroupQuery',
        components:{
          buttomView:BulkAgreementGroupQueryView
        }
      },
      {
        path:'/bulkAgreement/Components/NegotiationPage',
        name:'NegotiationPage',
        components:{
          buttomView:()=>import('@/views/bottomViews/BulkAgreementServiceView/components/NegotiationPage.vue')
        }
      },
      {
        path: '/capital/Query',
        name:'CapitalQuery',
        components:{
          buttomView:CapitalQuery
        }
      },
      {
        path: '/capital/InOrOut',
        name:'InOrOut',
        components: {
          buttomView:InOrOut
        }
      },
      {
        path: '/quota/Query',
        name:'QuotaQuery',
        components:{ 
          buttomView:QuotaQuery
        }
      },
      {
        path: '/quota/InOrOut',
        name:'QuotaInOrOut',
        components:{ 
          buttomView:QuotaInOrOut
        }
      },
      {
        path: '/dayQuery/BargainSelect',
        name:'DayBargainSelect',
        components:{ 
          buttomView:DayBargainSelect
        }
      },
      {
        path: '/dayQuery/CommissionSelect',
        name:'DayCommissionSelect',
        components:{ 
          buttomView:DayCommissionSelect
        }
      },
      {
        path: '/historyQuery/ListingSelect',
        name:'ListingSelect',
        components:{ 
          buttomView:ListingSelect
        }
      },
      {
        path: '/historyQuery/BulkAgreementSelect',
        name:'BulkAgreementSelect',
        components:{ 
          buttomView:BulkAgreementSelect
        }
      },
      {
        path: '/historyQuery/ActionSelect',
        name:'ActionSelect',
        components:{ 
          buttomView:ActionSelect
        }
      },
      {
        path: '/listingService/buy',
        name:'ListingServiceIndex',
        components:{ 
          buttomView:ListingServiceIndex
        }
      },
      {
        path:'/report',
        name:'report',
        components:{
          buttomView:ReportSelect
        }
      },
      {
        path:'/Auction/trade',
        name:'trade',
        components:{
          buttomView:AuctionTrade
        }
      },
      {
        path:'/Auction/request',
        name:'request',
        components:{
          buttomView:AuctionRequest
        }
      },
      {
        path:'/Account/CapitalAccountManage',
        name:'CapitalAccountManage',
        components:{
          buttomView:CapitalAccountManage
        }
      },
      {
        path:'/Account/QuotaAccountManage',
        name:'QuotaAccountManage',
        component:{
        buttomView:QuotaAccountManage
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 在进入任何路由之前检查用户是否已登录
  const token = localStorage.getItem('token');

  // 如果用户未登录且要访问的页面不是登录页面，则重定向到登录页面
  if (!token && to.path !== '/login') {
    next('/login');
    alert("请先登陆！")
  } else {
    // 用户已登录或访问的是登录页面，允许进入
    next();
  }
});

export default router
