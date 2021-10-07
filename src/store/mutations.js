// 直接更新state的多个方法的对象
import {
    RECESIVE_ADDRESS,
    RECESIVE_CATEGORYS,
    RECESIVE_SHOPS,
    RECESIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import Vue from 'vue'
import state from './state'

export default {
    [RECESIVE_ADDRESS] (state, { address }) {
        state.address = address
    },
    [RECESIVE_CATEGORYS] (state, { categorys }) {
        state.categorys = categorys
    },
    [RECESIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECESIVE_USER_INFO](state,{userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },

    // 商家页面
    [RECEIVE_GOODS](state,{goods}) {
        state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}) {
        state.ratings = ratings
    },
    [RECEIVE_INFO](state,{info}) {
        state.info = info
    },

    // CartControl组件部分
    [INCREMENT_FOOD_COUNT](state,{food}) {
        if (!food.count) {//第一次点击
            // food.count = 1  //新增属性（没有数据绑定）
            /*
            对象
            属性名
            属性值
            */
            Vue.set(food, 'count', 1) //这种新增的属性也有数据绑定的功能
            // 将food添加到cartFoods中
            state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}) {
        if (food.count) {//只要有值才能去减
            food.count--
            if (food.count === 0) {
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },


    // 清空购物车
    [CLEAR_CART](state) {
        //清除food中的count
        state.cartFoods.forEach(food => {
            food.count = 0
        })
        //移除购物车中所有的购物项
        state.cartFoods = []
    },

    //搜索得到的商家列表
    [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
        state.searchShops = searchShops
    }
}