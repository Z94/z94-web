<template>
    <el-menu default-active="2" class="el-menu-left" :collapse="isCollapse" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <menu-item :menus="menus"></menu-item>
    </el-menu>
</template>
<script>
import menuItem from './MenuItem.vue'
export default {
    data () {
        return {
            isCollapse: false,
            menus: [
                {
                    icon: 'el-icon-location',
                    index: '1',
                    title: '导航1',
                    route: '/HelloWorld'
                },
                {
                    icon: 'el-icon-menu',
                    index: '2',
                    title: '导航2',
                    subs: [
                        {
                            title: '分组2-1',
                            groups: [
                                {
                                    icon: 'el-icon-location',
                                    index: '2-1-1',
                                    title: '2-1-1',
                                    route: '/Login'
                                },
                                {
                                    icon: 'el-icon-location',
                                    index: '2-1-2',
                                    title: '2-1-2',
                                    route: '/Login'
                                }
                            ]
                        },
                        {
                            title: '分组2-2',
                            groups: [
                                {
                                    icon: 'el-icon-location',
                                    index: '2-2-1',
                                    title: '2-2-1',
                                    route: '/Home'
                                },
                                {
                                    icon: 'el-icon-location',
                                    index: '2-2-2',
                                    title: '2-2-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: '3',
                    title: '导航3'
                }
            ]
        }
    },
    methods: {
        handleOpen () {

        },
        handleClose () {

        }
    },
    components: {
        menuItem
    }
}
</script>
<style>
    .el-menu-left {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        margin-left: 0;
        height: 100%;
        text-align: left;
        padding-left: 0
    }
</style>


