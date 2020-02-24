<template>
  <div class="recommend-view">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  props:{
    recommends:{
      type:Array,
    }
  },
}
</script>
  
<style scoped>
.recommend-view{
  display: flex;
  border-bottom: 10px solid #eeeeee;
}
.recommend-item{
  text-align: center;
  padding: 8px 2px 12px;
}
.recommend-item img{
  width: 100%;
}
.recommend-item span{
  font-size: 14px
}
</style>