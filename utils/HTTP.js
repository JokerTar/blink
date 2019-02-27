import { config } from '../config.js'

const tips = {
    1: '抱歉，出现了一个错误',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

export default class HTTP{
    request(params) {
        wx.request({
            url: `${config.api_base_url}${params.url}`,
            header: {
              'content-type': 'application/json',
              appkey: config.appkey
            },
            method: params.method || 'GET',
            data: params.data,
            // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: (res) => {
              // success
              console.log(res)
              let code = res.statusCode.toString()
              if (code.startsWith('2')) {
                params.success && params.success(res.data)
              } else {
                  let error_code = res.data.error_code
                  this._show_error(error_code)
              }
            },
            fail: () => {
                this._show_error(1)
            },
            complete: function() {
              // complete
            }
          })
    }

    _show_error(error_code) {
        if(!error_code) {
            error_code = 1
        }
        wx.showToast({
            title: tips[error_code],
            icon: 'none',
            duration: 2000
        })
    }
}