<template>
  <div class="tabbar-item" @click="itemClick">
    <span class="item-icon" v-if="isActive"><slot name="item-icon-active"/></span>
    <span class="item-icon" v-else><slot name="item-icon"/></span>
    <span class="item-title" :style="activeClass"><slot name="item-title"/></span>
  </div>
</template>
  
<script>
export default {
  props:{
    activeColor:{
      type:String,
      default:'red'
    },
    path:{
      type:String,
      required:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeClass(){
      return this.isActive?{'color':this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>
  
<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
}
.item-icon img{
  vertical-align: middle;
  height: 20px;
  margin: 6px auto 3px;
}
.item-title{
  display: block;
  font-size: 12px;
}
</style>