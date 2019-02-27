// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isFirst: {
      type: Boolean
    },
    isLast: Boolean,
    title: String
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    wLeft: './images/triangle.dis@left.png',
    bLeft: './images/triangle@left.png',
    wRight: './images/triangle.dis@right.png',
    bRight: './images/triangle@right.png'
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onLeft() {
      if (!this.properties.isFirst) {
        this.triggerEvent('left', {}, {})
      }
    },
    
    onRight() {
      if (!this.properties.isLast) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
