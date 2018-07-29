const newsListApi = "https://test-miniprogram.com/api/news/list";

Page({
  data: {
    currentTab: "gn", 
    heroNews: [], 
    news: []
  },
  dataHandler: function(list) {
    let result = [];
    list.forEach(function(item) {
      item.date = item.date.slice(11, 16);
      result.push(item);
    });
    return result
  },
  getData: function(key, cb) {
    wx.request({
      url: newsListApi,
      data: {
        type: key
      },
      success: res => {
        let tmp = this.dataHandler(res.data.result);
        this.setData({
          heroNews: tmp.slice(0, 1),
          news: tmp.slice(1)
        });
      }, 
      complete: () => {
        cb && cb();
      }
    })
  }, 
  onLoad: function () {
    this.getData(this.data.currentTab);
  },
  onPullDownRefresh: function() {
    this.getData(this.data.currentTab, wx.stopPullDownRefresh);
  },
  //点击切换
  clickTab: function (e) {
    // 清空
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current, 
        heroNews: [],
        news: []
      });
      this.getData(e.target.dataset.current)
    }
  }, 
  openDetail: function(e){
    console.log(e.currentTarget)
    let id = e.target.id;
    wx.navigateTo({
      url: '/pages/detailPage/page?id=' + id,
    })
  }
})