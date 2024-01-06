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
import ListingBargainSelect from "@/views/bottomViews/HistoryQueryServiceView/ListingBargainSelect.vue";
import ListingServiceIndex from "@/views/bottomViews/ListingServiceView/index.vue";
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
    path: '/historyQuery/ListingHistoryCommission',
    name:'ListingHistoryCommission',
    component: ListingBargainSelect
  },
  {
    path: '/listingService',
    name:'ListingServiceIndex',
    component: ListingServiceIndex
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
