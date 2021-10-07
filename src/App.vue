<template>
    <div id='app'>
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
export default {
    mounted () {
        // this.$store.dispatch('getAddress')
        this.getAddress()
        this.getUserInfo()
        },
    // 映射成标签
    components:{
        FooterGuide
    },
    methods: {
        ...mapActions(['getAddress','getUserInfo'])
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>