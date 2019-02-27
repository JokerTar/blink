import HTTP from '../utils/HTTP.js'

export default class classicModel extends HTTP {
    getLatest(sCallback) {
        // this.request({
        //     url: 'classic/latest',
        //     success: (res => {
        //       sCallback(res)
        //     })
        // })

        return new Promise((resolve, reject) => {
            this.request({
                url: 'classic/latest',
                success: (res => {
                    resolve(res)
                })
            })
        })
    }
}