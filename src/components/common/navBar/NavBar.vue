<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"/></div>
    <div class="nav-center"><slot name="center">标题</slot></div>
    <div class="nav-right"><slot name="right"/></div>
  </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.nav-bar{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
}
.nav-left,.nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
}
</style>