// pages/components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    like: true,
    count1: 999,
    count2: 111,
    count:999
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      console.log(event)
    }
  }
})
