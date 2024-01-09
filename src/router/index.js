import { createRouter, createWebHistory } from 'vue-router'
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
    name: 'Listing',
    component:ListingServiceIndex
  },
  {
    path: '/bulkAgreement/Offer',
    name:'BulkAgreementOffer',
    component:BulkAgreementOfferView
  },
  {
    path: '/bulkAgreement/Group',
    name:'BulkAgreementGroup',
    component: BulkAgreementGroupView
  },
  {
    path: '/bulkAgreement/Query',
    name:'BulkAgreementQuery',
    component: BulkAgreementQueryView
  },
  {
    path: '/bulkAgreement/QueryGroup',
    name:'BulkAgreementGroupQuery',
    component:BulkAgreementGroupQueryView,
  },
  {
    path:'/bulkAgreement/Components/NegotiationPage',
    name:'NegotiationPage',
    component:()=>import('@/views/bottomViews/BulkAgreementServiceView/components/NegotiationPage.vue')
  },
  {
    path: '/capital/Query',
    name:'CapitalQuery',
    component: CapitalQuery
  },
  {
    path: '/capital/InOrOut',
    name:'InOrOut',
    component: InOrOut
  },
  {
    path: '/quota/Query',
    name:'QuotaQuery',
    component: QuotaQuery
  },
  {
    path: '/quota/InOrOut',
    name:'QuotaInOrOut',
    component: QuotaInOrOut
  },
  {
    path: '/dayQuery/BargainSelect',
    name:'DayBargainSelect',
    component: DayBargainSelect
  },
  {
    path: '/dayQuery/CommissionSelect',
    name:'DayCommissionSelect',
    component: DayCommissionSelect
  },
  {
    path: '/historyQuery/ListingSelect',
    name:'ListingSelect',
    component: ListingSelect
  },
  {
    path: '/historyQuery/BulkAgreementSelect',
    name:'BulkAgreementSelect',
    component: BulkAgreementSelect
  },
  {
    path: '/historyQuery/ActionSelect',
    name:'ActionSelect',
    component: ActionSelect
  },
  {
    path: '/listingService/buy',
    name:'ListingServiceIndex',
    component: ListingServiceIndex
  },
  {
    path:'/report',
    name:'report',
    component:ReportSelect
  },
  {
    path:'/Auction/trade',
    name:'trade',
    component:AuctionTrade
  },
  {
    path:'/Auction/request',
    name:'request',
    component:AuctionRequest
  },
  {
    path:'/Account/CapitalAccountManage',
    name:'CapitalAccountManage',
    component:CapitalAccountManage
  },
  {
    path:'/Account/QuotaAccountManage',
    name:'QuotaAccountManage',
    component:QuotaAccountManage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
