<template>
  <div class="tab-control">
    <div v-for="(item,index) in list"
          class="control-item" :class="{'active':index==currentIndex}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  computed:{
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    }
  }
}
</script>
  
<style scoped>
.tab-control{
  height: 40px;
  line-height: 40px;
  display: flex;
  text-align: center;
}
.control-item{
  flex: 1;
}
.control-item span{
  padding: 5px;
}
.active span{
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>