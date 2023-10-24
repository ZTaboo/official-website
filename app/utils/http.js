const baseUrl = "https://wx.yunyuweilai.com";

export const get = (url) => {
    return fetch(baseUrl + url)
}

//  客户端组件
export const post = (api, data) => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    return fetch(baseUrl + api, {
        method: 'POST', body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json',
            'account': username,
            'token': token
        }
    })
}