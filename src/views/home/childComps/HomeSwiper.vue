<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" >
        <a href="#">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
  </swiper>
</template>
  
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  props:{
    banners:{
      type:Array
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
}
</script>
  
<style scoped>
  
</style>