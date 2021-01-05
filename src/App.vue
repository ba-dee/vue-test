<template>
    <div>
        <p>
            <router-link to="/news">新闻</router-link>
            <router-link to="/books">图书</router-link>
        </p>
        <router-view></router-view>
    </div>

</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import BaiDuMap from './components/Map.vue'
    // import Login from './components/Login'
    // import Home from './components/Home.vue'

    export default {
        name: 'App',
        components: {
            //HelloWorld,
            //BaiDuMap
            //Home
        },
    }
</script>
-webkit-font-smoothing: antialiased; /*chrome、safari*/
-moz-osx-font-smoothing: grayscale;/*firefox*/
<style>
    /*#app {*/
    /*    font-family: Helvetica Neue, Helvetica, Tahoma, Arial, Microsoft YaHei, PingFang SC;*/
    /*    -webkit-font-smoothing: antialiased; !*字体抗锯齿 chrome、safari*!*/
    /*    -moz-osx-font-smoothing: grayscale; !*字体抗锯齿 firefox *!*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    height: 100%;*/
    /*    font-size: 12px;*/
    /*}*/
    html, body {
        height: 100%;
        box-sizing: border-box;
    }
</style>
