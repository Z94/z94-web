<template>
    <el-row :gutter="20">
        <el-col :span="3">
                <img src="../assets/logo.png" />
            <div class="title">
                XXXXXXX
            </div>
        </el-col>
        <el-col :span="19">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">about</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="2">
            <img src="../assets/logo.png" class="logo" />
        </el-col>
    </el-row>
</template>
<script>
export default {
    data () {
        return {
            activeIndex: '1'
        }
    }
}
</script>
<style>
    img {
        width: 50px;
        height: 50px;
        display: inline-block
    }
    .title {
        font-size: 2em;
        color: #fff;
        display: inline-block
    }
    .el-menu {
        margin-left: 50px
    }
    .input {
        width: 10%;
    }
</style>


