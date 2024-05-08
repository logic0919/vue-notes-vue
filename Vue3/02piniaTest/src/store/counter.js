import { defineStore } from "pinia";
import {ref} from 'vue'

export const useCounterStore=defineStore('counter', () => {
    const count = ref(100)
    const msg = ref('这是msg')
    
    const addCount = () => {
        count.value++
    }
    const msgChange = () => {
        msg.value='change'
    }

    return {
        count,msg,addCount,msgChange
    }
},
    // {
    //     persist:true
    // }
    {
    persist: {
        key: 'hm-counter',// 修改本地存储的唯一标识
        storage: sessionStorage,// 本地存储的方式
        path:['count']// 存储的数据，这里没有'msg'，所以'msg'就不会持久化
    }
}
)