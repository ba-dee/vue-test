<template>
    <div class="lgnHeadNav">
        <img :src="logoUrl" class="lgnHeadNavLogo">
        <span class="lgnHeadNavTitle">文件管理系统</span>

        <div class="lgnHeadNavRight">
            <span class="lgnHeadNavUser lgnHeadNavUserPosition">
              用户职位：{{user.position}}
            </span>
            <span class="lgnHeadNavUser">用户名称：{{user.name}}</span>

            <img :src="logoUrl">
            <img :src="logoUrl">

        </div>

    </div>
</template>

<script>
    export default {
        name: "LgnHeadNav",
        data() {
            return {
                logoUrl:require("../assets/icon/logo.png"),
                user: {
                    name: "apple",
                    position: "good"
                }
            }
        }
    }
</script>

<style scoped>
    .lgnHeadNav {
        width: 100%;
        border: #2c3e50 1px solid;
        height: 40px;
        display: flex;
    }
    .lgnHeadNavLogo {
        height: 40px;
    }

    .lgnHeadNavTitle {
        margin-top: auto;
        margin-bottom: auto;
        font-size: 14px;
        font-weight: bold;
    }
    .lgnHeadNavRight {
        margin-bottom: auto;
        margin-top: auto;
        margin-left: auto;
    }

    .lgnHeadNavRight>span{
        margin-right: 20px;

    }
    .lgnHeadNavRight>img{
        margin-right: 20px;
        height: 40px;
    }

</style>