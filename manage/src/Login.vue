<template>
    <el-form :model="adminForm" ref="adminForm" :rules="rules" class="ele_container">
        <h3>饿了么后台管理系统{{$store.state.admin.adminName}}</h3>
        <el-form-item prop="adminName">
            <el-input v-model="adminForm.adminName" placeholder="请输入管理员账号"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input v-model="adminForm.passWord" type="password" placeholder="请输入管理员密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button :loading="$store.state.isLoading" style="width:100%;" @click="submitForm" type="primary">登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                // isLoading:false,
                adminForm:{
                    adminName:"",
                    passWord:""
                },
                rules:{
                    adminName: [
                        { required: true, message: '请输入管理员账号', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入管理员密码', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                // 验证你输入的内容是否符合要求。
                this.$refs.adminForm.validate(async valid=>{
                    if(valid){
                        // 发送登陆请求
                        this.isLoading = true;
                        const data = await this.$store.dispatch("login",this.adminForm);
                        if(data.ok === 1){
                            this.$store.commit("CHANGE_LOGIN_INFO",data)
                        }else{
                            this.$message.error(data.msg);
                        }
                    }else{
                        this.$message.error('错了哦，请输入正确的账号或密码');
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .ele_container{
        border:1px solid #eaeaea;
        margin:150px auto;
        width:350px;
        padding:10px 20px;
        box-shadow:0 0 30px red;
        h3{
            text-align:center;
        }
    }
</style>