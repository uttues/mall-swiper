import axios from './axios.js'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

// 返回首页中轮播图以及活动分类数据
export function getHomeMultipleData() {
  return axios({
    url:'/home/multidata'
  })
}

export function getHomeGoodsData(type, page) {
  console.log('getHomeGoodsData');
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}