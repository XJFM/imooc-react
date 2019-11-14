const BaseUrl = 'http://10.115.0.27:8585'

let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')


function get(url, params) {
  if (params) {  
    let paramsArray = [];  
    //拼接参数  
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
        url += '&' + paramsArray.join('&')
    }
  }
  return new Promise((resolve, reject) => {
    fetch(
      BaseUrl + url, {
        method: 'GET',
        credentials: 'include',
        headers: initHeaders,
      }
    )
      .then(res => {
        if (res.status === 403) {
          window.location.href = '/login'
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(e => {
        reject(e)
      })
  })
  
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(
      BaseUrl + url, {
        method: 'POST',
        credentials: 'include',
        headers: initHeaders,
        body: JSON.stringify(data)
      }
    )
    .then(res => {
      if (res.status === 403) {
        window.location.href = '/login'
      }
      return res.json()
    })
    .then(data => {
      resolve(data)
    })
    .catch(e => {
      reject(e)
    })
  })
  
}

export default {
  get: get,
  post: post
}
