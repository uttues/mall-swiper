<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>
  
<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  components:{
    NavBar
  }
}
</script>
  
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>