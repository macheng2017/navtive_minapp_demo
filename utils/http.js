import { config } from '../config.js'

const tips = {
  1: '抱歉,出现了一个错误',
  1005: '授权失败',
  3000: '未知错误'
}
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
          params.success(res.data)
        } else {
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: err => {
        // fail 出现的比较少,报错处理很简单,当网络异常是,提示出错即可
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
