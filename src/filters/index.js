import Vue from 'vue'

// 时间过滤器
Vue.filter('date-format', function (originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    // padStart函数作用长度不足两位，前面补0
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')


    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})