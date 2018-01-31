<template>
<div class="login-wrap">
    <div class="login-title">XXXXXX</div>
    <div class="login-container">
        <el-form :rules="rules" ref="loginForm" label-width="100px">
            <el-form-item label="用户名">
                <el-input v-model="loginForm.userName" placeholder="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" placeholder="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                loginForm: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm () {
                const that = this
                this.$axios.post('/login', this.loginForm)
                .then(function (response) {
                    if (response.data === true) {
                        that.$router.push('HelloWorld')
                    }
                })
                .catch(function (response) {

                })
            },
            resetForm () {
                this.$router.push('Home')
            }
        }
    }
</script>
<style>
    .login-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #324157;
    }
    .login-title {
        position: absolute;
        top: 50%;
        text-align: center;
        width: 100%;
        margin-top: -200px;
        font-size: 30px;
        color: #fff
    }
    .login-container { 
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        transform: translate(-50%,-50%);
        padding:40px 60px 40px 10px;
        border-radius: 5px;
        background: #fff;
    }
</style>