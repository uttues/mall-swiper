<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <b-scroll class="b-scroll">
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <fashion-view></fashion-view>
      <tab-control :list="['流行','新款','精选']"></tab-control>
    </b-scroll>
  </div>
</template>
  
<script>
import NavBar from 'components/common/navBar/NavBar'
import BScroll from 'components/common/bscroll/BScroll'

import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FashionView from './childComps/FashionView'

import {getHomeMultipleData,
        BANNER,
        RECOMMEND} from 'network/home.js'

export default {
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    // 1.请求多个数据
    this.getMultiData()
  },
  methods:{
    // 1.请求多个数据
    getMultiData(){
      getHomeMultipleData().then(res=>{
        this.banners = res.data[BANNER].list
        this.recommends = res.data[RECOMMEND].list
      })
    }
  },
  components:{
    NavBar,
    BScroll,
    
    TabControl,

    HomeSwiper,
    RecommendView,
    FashionView,
  },
}
</script>
  
<style scoped>
#home{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.b-scroll{
  height: calc(100% - 44px - 49px);
  background-color: #fff;
}
</style>