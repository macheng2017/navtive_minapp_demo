import { config } from '../config.js'

class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success: res => {
        let code = res.statusCode.toString()
        // console.log('code', code)
        if (code.startsWith('2')) {
            params.success(res)
        } else {



        }
      },
      fail: err => {

      }
    })
  }
}

export {HTTP}