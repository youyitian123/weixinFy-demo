const util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curLang: {},
    langList: app.globalData.langList
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      curLang: app.globalData.curLang
    })
  },

  /**
   * 将选择要翻译成的语言设置到index页面的curLang中显示
   */
  onTapItem:function(e){
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language',langObj)
    this.setData({ 'curLang': langObj })  
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index' })
  }
  
})