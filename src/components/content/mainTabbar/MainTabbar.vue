<template>
  <tabbar>
    <tabbar-item v-for="item in tabData" 
                  :path="item.toPath"
                  activeColor="var(--color-high-text)">
      <img slot="item-icon-active" :src="item.iconActiveSrc" alt="">
      <img slot="item-icon" :src="item.iconSrc" alt="">
      <span slot="item-title">{{item.title}}</span>
    </tabbar-item>
  </tabbar>
</template>
  
<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'

import HomeIcon from 'assets/img/tabbar/home.svg'
import HomeIconActive from 'assets/img/tabbar/home_active.svg'
import CategoryIcon from 'assets/img/tabbar/category.svg'
import CategoryIconActive from 'assets/img/tabbar/category_active.svg'
import CartIcon from 'assets/img/tabbar/cart.svg'
import CartIconActive from 'assets/img/tabbar/cart_active.svg'
import ProfileIcon from 'assets/img/tabbar/profile.svg'
import ProfileIconActive from 'assets/img/tabbar/profile_active.svg'

export default {
  data(){
    return {
      tabData:[
        {
          iconSrc: HomeIcon,
          iconActiveSrc:HomeIconActive,
          title:'首页',
          toPath:'/home'
        },
        {
          iconSrc: CategoryIcon,
          iconActiveSrc:CategoryIconActive,
          title:'分类',
          toPath:'/category'
        },
        {
          iconSrc: CartIcon,
          iconActiveSrc:CartIconActive,
          title:'购物车',
          toPath:'/cart'
        },
        {
          iconSrc: ProfileIcon,
          iconActiveSrc:ProfileIconActive,
          title:'我的',
          toPath:'/profile'
        }
      ]
    }
  },
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>
  
<style scoped>
</style>