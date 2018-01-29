<template>
    <el-container>
        <el-header v-show="showHeader">
            <v-header></v-header>
        </el-header>
        <el-container>
            <el-aside>
                <v-aside></v-aside>
            </el-aside>
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
        
    </el-container>
</template>
<script>
    import vHeader from './Header.vue'
    import vAside from './Aside.vue'
    export default {
        data () {
            return {
                search: '',
                currentDate: new Date(),
                showHeader: true
            }
        },
        components: {
            vAside,
            vHeader
        },
        methods: {
            cardClick () {
                alert('card')
            }
        }
    }
</script>
<style>
    .card-bottom {
        padding: 14px;
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
    .clearfix:before, .clearfix:after {
        display: table;
        content: "";
      }
    .clearfix:after {
        clear: both
    }
    .el-card {
        padding: 0px;
        cursor: pointer;
        margin: 10px 0 0 10px
    }
    header {
        background-color: #242f42;
        position: relative;
    }
</style>