<template>
    <div>
        <div class="card">
            <div style="padding: 20px">
                <h1>{{id}}</h1>
                <img src="../assets/logo.png" class="image">
                <div class="card-bottom">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ id }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text: ''
            }
        },
        props: [
            'id'
        ],
        created () {
            console.log(this.id)
        }
    }
</script>
<style>
    .card {
        cursor: pointer;
        margin: 10px auto;
        display: block;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border-radius: 4px;
        color: #303133;
        overflow: hidden;
        /* transform: rotate(-8deg); */
    }
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
</style>