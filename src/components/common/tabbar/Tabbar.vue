<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  
}
</script>
  
<style scoped>
#tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  height: 49px;
  background-color: #f5f5f5;
  box-shadow: 0 -1px rgba(100, 100, 100, .15);
}
</style>