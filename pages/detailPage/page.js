// pages/detailPage/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {},
    date: ""
  },
  test: function() {
    return "test"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: options.id
      },
      success: function(res){
        if(res) {
          self.setData({
            result: res.data.result,
            date: res.data.result.date.slice(5, 10)
          });
        } else {
          self.setData({result: {type: 'p', text: 'API加载错误，请返回重新加载'}})
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})