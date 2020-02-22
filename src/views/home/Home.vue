<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
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