<template>
    <div id="backImage">
        <div id="center">
            <div>
                <ul><input class="input" type="text" v-model="user.account" placeholder="请输入账号"></ul>
                <ul><input class="input" type="password" v-model="user.password" placeholder="请输入密码"></ul>
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    import '../assets/css/login.css'
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    account: '',
                    password: ''
                },
            }
        },
    }
</script>