<template>
	<el-form class="container" :rules="rules" ref="loginForm" label-width="100px">
		<el-form-item label="用户名" prop="userName">
			<el-input v-model="loginForm.userName"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input v-model="loginForm.password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm">登录</el-button>
		    <el-button @click="resetForm">重置</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
        data() {
            return{
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
			submitForm(){
				this.$axios.post('/login', this.loginForm)
				.then(function(response){

				})
				.catch(function(response){
					console.log(this)
					console.log(response)

				})
				if (this.loginForm.userName === 'admin' && this.loginForm.password === 'admin') {
					console.log('success');
					this.$router.push('HelloWorld')
				}
			},
			resetForm(){

			}
		}
	}
</script>
<style>
	.container {
		margin: 300px auto; 
		width: 40%;
		border-radius: 5px;
	}
</style>