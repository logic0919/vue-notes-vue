import { defineStore,ref } from 'pinia'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
    const list = ref([])
    const getList = async () => {
        // 支持异步
        // 这个请求有问题，所以这里注释掉了，否则会报错
        const { data:{data} } = await axios.get('http://geek.itheima.net/v1_0/channels')
        list.value=data.channels
    }
    return {
        list,getList
    }
})