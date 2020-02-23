<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper class="home-swiper" :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <fashion-view></fashion-view>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>
  
<script>
import NavBar from 'components/common/navBar/NavBar'

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
    HomeSwiper,
    RecommendView,
    FashionView,
  },
}
</script>
  
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-swiper{
  margin-top: 44px;
}
</style>