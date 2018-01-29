<template>
    <div>
        <div v-for="menu in menus" class="menu-item" :key="menu.index">
            <el-submenu v-if="menu.subs" :index="menu.index">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.title}}</span>
                </template>
                <menu-item :menus="menu.subs"></menu-item>
            </el-submenu>
            <el-menu-item-group v-else-if="menu.groups" :title="menu.title">
                <menu-item :menus="menu.groups"></menu-item>
            </el-menu-item-group>
            <el-menu-item v-else :index="menu.index" @click="toMenuItem(menu.route)">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
            </el-menu-item>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menuItem',
    props: ['menus'],
    methods: {
        toMenuItem (route) {
            this.$router.push(route)
        }
    }
}
</script>
<style>
.menu-item {
    text-align: left;
}
</style>


