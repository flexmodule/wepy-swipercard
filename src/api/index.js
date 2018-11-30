import request from '@/utils/request.js';
export function ceshi(url, oType, data) {
  return new Promise(function (resolve, reject) {
    request(
      url,
      oType,
      data,
      '请求中',
      function(res) {
        if (res.meta.success) {
          resolve(res)
        } else {
          wx.showToast({
            title: res.meta.message,
            icon: 'none',
            duration: 1000
          });
        }
      },
      function(err) {
        console.log(err);
      }
    );
  })
};
export function getRecFood(url, oType, data) {
  return new Promise(function (resolve, reject) {
    request(
      url,
      oType,
      data,
      '请求中',
      function(res) {
        if (res.meta.success) {
          resolve(res)
        } else {
          wx.showToast({
            title: res.meta.message,
            icon: 'none',
            duration: 1000
          });
        }
      },
      function(err) {
        console.log(err);
      }
    );
  })
}