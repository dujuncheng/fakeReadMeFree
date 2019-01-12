const axios = require('axios')

let cookie = "csrftoken=NDM0b9c5QMXVGjIUgOxxj9jI32yyYYvAkU97EmUubn9r2Wn5yQSC7ow7N6uXhFhX; sessionid=89qmsxp621bm3lqo10hpcbcex2gwcsv6; Hm_lvt_375aa6d601368176e50751c1c6bf0e82=1546528586,1547131485; Hm_lpvt_375aa6d601368176e50751c1c6bf0e82=1547289339"

let getPage = () => {
    axios({
        method: 'get',
        url: 'http://readfree.me/',
        data: {},
        headers: {'Cookie': cookie},
    }).then((result) => {
        let setCookie = result.headers['set-cookie'][0]
        cookie = getCsrftoken(setCookie)
    })
}

let getCsrftoken = (str) => {
    let arr = str.split(';')
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split('=')[0] === 'csrftoken') {
            result = arr[i].split('=')[1]
        }
    }
    return result
}

getPage()
setInterval(function () {
    getPage()
}, 24 * 60 * 60 * 1000)
