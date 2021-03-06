import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = originAxios.create({
      baseURL: 'http://106.54.54.237:8000/api/hy',
      timeout:5000
    })

    // 2.配置请求拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    })

    //配置响应拦截
    instance.interceptors.response.use(response => {
      return response.data;
    }, err => {
        if (err & err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权的访问';
              break
          }
        }
      return err
    })

    // 4.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}