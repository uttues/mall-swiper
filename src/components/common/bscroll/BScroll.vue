<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
import BScroll from 'better-scroll'

export default {
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:[Boolean,Object],
      default:false
    }
  },
  data(){
    return {
      scroll:{}
    }
  },
  mounted(){
    setTimeout(this.__initScroll,20)
  },
  methods:{
    __initScroll(){
      if(!this.$refs.wrapper){
        console.log('!this.$refs.wrapper');
        return
      }
      // 1.初始化BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad,
      })

      // 2.外部监听scroll事件
      this.scroll.on('scroll', pos=>{
        this.$emit('scroll', pos)
      })

      // 3.外部监听上拉加载更多事件
      this.scroll.on('pullingUp', ()=>{
        this.$emit('pullingUp')
      })
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
  }
</script>
  
<style scoped>
.wrapper{
  background-color: #f00;
  overflow: hidden;
}
</style>
