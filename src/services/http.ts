//拦截器
//基地址
const baseUrl = 'https://u241567-8fae-693a7f37.neimeng.seetacloud.com:6443'

//拦截器
const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        //1.非http形式需要拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url
        }
        //2.超时事件
        // options.timeout = 10000
        //3.添加请求头标识
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }
    },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

//请求函数的封装
/*
1. 返回promise对象
2.请求成功
  2.1提取核心数据res.data
  2.2添加类型
3.请求失败
  3.1网络错误
  3.2 401错误
  3.3未知错误
*/
interface Data<T> {
    code: string
    msg: string
    result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            //响应成功
            success(res) {
                //因为它的类型可能太多，不确定，所以要类型断言
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    reject(res)
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误',
                    })
                    reject(res)
                }
            },
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误,换个网络试试',
                })
                reject(err)
            },
        })
    })
}
