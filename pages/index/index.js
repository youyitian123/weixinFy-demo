import {
  translate
} from '../../utils/api.js'
const app = getApp()

// translate('apple', { from: 'en', to: 'zh' })

Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: "",
    hideClearIcon: true,
    result: '',
    curLang: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log("lonload...")
    // console.log(options)
    if (options.query) {
      this.setData({
        query: options.query
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      // this.onConfirm()
    }
  },

  /**
   * 获取输入的值
   */
  onInput: function(e) {
    // console.log(e)
    this.setData({
      'query': e.detail.value
    })
    // console.log(this.data.query)
    if (this.data.query.length > 0) {
      this.setData({
        'hideClearIcon': false
      })
    } else {
      this.setData({
        'hideClearIcon': true
      })
    }
    // translate(this.data.query, {
    //   from: 'auto',
    //   to: this.data.curLang.lang
    // }).then(res => {
    //   console.log(res)
    //   this.setData({
    //     'result': res.trans_result
    //   })
    // })
  },

  /**
   * 点击Close按钮，清空输入
   */
  onTapClose: function() {
    this.setData({
      'query': ''
    })
    this.setData({
      'hideClearIcon': true
    })
  },

  /**
   * 发送请求到百度翻译api中进行翻译
   */
  onConfirm: function() {
    if (!this.data.query) {
      return
    }
    console.log(this.data.curLang.lang)
    translate(this.data.query, {
      from: 'auto',
      to: this.data.curLang.lang
    }).then(res => {
      console.log(res)
      this.setData({
        'result': res.trans_result
      })
    })
  }
})