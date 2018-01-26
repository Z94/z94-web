<template>
    <el-container>
        <el-header v-show="showHeader">
            <el-row :gutter="20">
                <el-col :span="1"><img src="../assets/logo.png" class="logo"></el-col>
                <el-col :span="23">
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
            </el-row>
        </el-header>
        <el-main>
            <el-row v-for="row in 20" :key="row">
                <el-col :span="8" v-for="(o) in 2" :key="o">
                    <el-card class="el-card" @click.native="cardClick">
                        <img src="../assets/logo.png" class="image">
                        <div class="card-bottom">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
        
    </el-container>
</template>
<script>
    export default {
        data () {
            return {
                search: '',
                activeIndex: '1',
                showHeader: true,
                currentDate: new Date()
            }
        },
        methods: {
            cardClick () {
                alert('card')
            }
        }
    }
</script>
<style>
    .logo {
        width: 100px;
        height: 50px;
        margin: 150
    }
    .card-bottom {
        padding: 14px;
    }
    .image {
        display: block;
    }
    .button {
        padding: 0;
        float: right;
    }
    .time {
        font-size: 13px;
        color: #999
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .clearfix:before,
      .clearfix:after {
          display: table;
          content: "";
      }
      .clearfix:after {
      clear: both
      }

    header {
        margin-top: -60px;
    }
    .input {
        width: 10%;
    }
    .el-menu {
        margin-left: 50px
    }
    .el-card {
        padding: 0px;
        cursor: pointer;
        margin: 10px 0 0 10px
    }
</style>