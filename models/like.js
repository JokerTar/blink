import HTTP from '../utils/HTTP.js'

export default class LikeModel extends HTTP {
    like(behavior, id, category) {
        console.log('behavior')
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: id,
                type: category
            }
        })
    }
}