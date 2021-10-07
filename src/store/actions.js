//通过mutation间接更新state的多个方法的对象

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
import {
    reqAddress,
    reqFoodCategorys,
    reqLogout,
    reqShopInfo,
    reqShops,
    reqUserInfo,
    reqShopRatings,
    reqShopGoods,
    reqSearchShop
} from '../api'

export default {
    async getAddress({ commit, state }) {
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        
        // 成功就提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECESIVE_ADDRESS, { address })
        }
    },

    // 异步获取食品分类列表
    async getCategorys({ commit }) {
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        
        // 成功就提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECESIVE_CATEGORYS, { categorys })
        }
    },

    // 异步获取商家列表
    async getShops({ commit, state }) {
        //发送异步ajax请求
        // 解构赋值
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        
        // 成功就提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECESIVE_SHOPS, { shops })
        }
    },
    //同步记录用户信息
    recordUser({ commit }, userInfo) {
        commit(RECESIVE_USER_INFO, { userInfo })
    },
    // 异步获取用户信息
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECESIVE_USER_INFO, { userInfo })
        }
    },
    // 异步登出
    async logout({ commit }) {
        const result = await reqLogout()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },


    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

    // 同步更新food中的count数量
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, { food })
        } else {
            commit(DECREMENT_FOOD_COUNT, { food })
        }
    },

    // 清空购物车
    clearCart({ commit }) {
        commit(CLEAR_CART)
    },

    // 发搜索关键字获取商家列表请求
    async searchShops({ commit,state }, { keyword }) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShop(geohash, keyword)
        if (result.code === 0) {
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS, { searchShops })
        }
    }
}