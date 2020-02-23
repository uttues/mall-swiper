<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
  
<script>
import NavBar from 'components/common/navBar/NavBar'

import HomeSwiper from './childComps/HomeSwiper'

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
    HomeSwiper
  },
}
</script>
  
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>