import { Http } from '../utils/http.js'
class ClassicModel extends Http {
  getLatest(callBack) {
    this.request({
      url: 'classic/latest',
      method: 'GET',
      success: res => {
        callBack(res)
      }
    })
  }
}
export { ClassicModel }
