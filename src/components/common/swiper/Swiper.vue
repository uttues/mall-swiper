<template>
  <div class="swiper-wrapper">
    <div class="swiper" ref="swiper" 
         @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <div v-for="(item,index) in itemCount" 
          class="indi-item" :class="{'active':isActiveIndi(index)}"
          @click="indiClick(index)"></div>
    </div>
  </div>
</template>
  
<script>
import SwiperItem from './SwiperItem'

export default {
  components:{
    SwiperItem
  },
  props:{
    // 一张图片的停留时间
    interval:{
      type: Number,
      default: 2000
    },
    // 图片滑动动画的持续时间
    animDuration:{
      type: Number,
      default: 300
    },
    slideRadio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      itemCount: 0, //元素个数
      slideDistance: 0, //滑动距离
      swiperStyle:{}, //swiper结点样式
      currentIndex:0, //当前图片下标
      timer:null,  //定时器
      isSliding:false,

      startTouchPosX:0,
      dragDistance:0,
      currentItemPosX:0
    }
  },
  mounted(){
    setTimeout(()=>{
      this.handleDOM()

      this.initSwiperPos()
      // // 开启计时器
      this.startTimer()
    },100)
  },
  computed:{
    isOnEdge(){
      return this.currentIndex==0||this.currentIndex==this.itemCount+1
    },
    isActiveIndi(){
      return index => {
        return index == this.currentIndex-1 || 
              (index==0&&this.currentIndex==this.itemCount+1) || 
              (index==this.itemCount-1&&this.currentIndex==0)
      }
    }
    // isActiveIndi(index){
    //   return index==this.currentIndex-1
    // }
  },
  methods:{
    /**
     * 定时器操作
     */
    startTimer(){
      this.timer = window.setInterval(()=>{
        this.currentIndex++;
        this.startSliding(this.animDuration, this.itemWidth*this.currentIndex)
      },this.interval+this.animDuration)
    },
    stopTimer(){
      window.clearInterval(this.timer)
    },

    /**
     * 开启一个滑动,并设置滑动时间,滑到什么位置
     */
    startSliding(duration,toPosition){
      // 1.根据参数设置滑动时长
      this.swiperStyle.transition = 'transform ' + duration + 'ms'

      // 2.开始滑动状态
      this.isSliding = true
      this.stopTimer()

      // 3.滑动
      new Promise(resolve=>{

        this.setTransform(toPosition)

        setTimeout(()=>{
          resolve()
        },duration)
      
      }).then(res=>{
        //4.滑动结束,则检查滑动位置是否正确
        this.checkPosition()
        this.isSliding = false
        this.startTimer()
      })
    },
    /**
     * 快速滑动,用于迅速调整位置
     */
    quickSlideProcess(toPosition){
      this.swiperStyle.transition = ''
      this.setTransform(toPosition)
    },

    // mounted后就处理DOM树
    handleDOM(){
      const swiperNode = this.$refs.swiper
      const swiperItems = swiperNode.getElementsByClassName('swiper-item')
      
      this.itemCount = swiperItems.length
      this.swiperStyle = swiperNode.style
      this.itemWidth = parseFloat(swiperNode.offsetWidth)

      const firstItemClone = swiperItems[0].cloneNode(true)
      const lastItemClone = swiperItems[this.itemCount-1].cloneNode(true)

      swiperNode.insertBefore(lastItemClone,swiperItems[0])
      swiperNode.appendChild(firstItemClone)
    },

    // 初始化swiper位置,使之在图片[1]处
    initSwiperPos(){
      this.currentIndex = 1
      this.quickSlideProcess(this.currentIndex*this.itemWidth)
    },

    //操纵css
    setTransform(toPos){
      let move = -toPos
      this.swiperStyle.transform = 'translate('+move+'px)'
      this.swiperStyle['-webkit-transform'] = 'translate('+move+'px)'
      this.swiperStyle['-ms-transform'] = 'translate('+move+'px)'
    },

    checkPosition(){
      if(this.isOnEdge){
        this.currentIndex=Math.abs(this.itemCount-this.currentIndex)
        this.quickSlideProcess(this.itemWidth*this.currentIndex)
      }
    },

    /**
     * 拖动事件处理
     */
    touchStart(event){
      if(this.isSliding) return

      this.startTouchPosX = event.touches[0].pageX
      this.currentItemPosX = this.currentIndex * this.itemWidth
      
      this.stopTimer()
    },

    touchMove(event){
      if(this.isSliding) return

      this.dragDistance = event.touches[0].pageX - this.startTouchPosX
      // dragDistance为正值，位置往左；负值，位置往右
      this.quickSlideProcess(this.currentItemPosX-this.dragDistance)
    },
    touchEnd(event){
      if(this.isSliding) return
      let dragRatio = Math.abs(this.dragDistance/this.itemWidth)

      if(dragRatio==0){
        this.startTimer()
        return
      }else if(dragRatio < this.slideRadio){
        this.startSliding(dragRatio * this.animDuration,this.currentItemPosX)
      }else{
        if(this.dragDistance>0){
          this.currentIndex--
          this.startSliding((1 - dragRatio) * this.animDuration, this.currentIndex*this.itemWidth)
        }else{
          this.currentIndex++
          this.startSliding((1 - dragRatio) * this.animDuration, this.currentIndex*this.itemWidth)
        }
      }
      this.dragDistance = 0
      
    },

    /**
     * indicator点击事件处理
     */
    indiClick(index){
      if(this.isActiveIndi(index)==false){
        this.currentIndex = index+1
        this.startSliding(this.animDuration, this.currentIndex*this.itemWidth)
      }
    }
  }
  
}
</script>
  
<style scoped>
.swiper-wrapper{
  position: relative;
  overflow: hidden;
}
.swiper{
  display: flex;
}
.swiper-item{
  width: 100%;
  flex-shrink: 0;
}
.swiper-item img {
  width: 100%;
  vertical-align: middle;
}

.indicator{
  position: absolute;
  bottom: 8px;
  margin-left: 50%;
  transform: translate(-50%);
  display: flex;
}
.indi-item{
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #eee;
  margin: 0 3px;
}
.indi-item.active{
  background-color: #f00;
  border: 1px solid #f00;
}
</style>