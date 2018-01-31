<template>
    <header class="top-nav-container">
        <nav class="top-nav">
            <div class="nav-logo">
                <img src="../assets/logo.png" class="logo" alt="">
                <span class="brand">ZhuPhon</span>
            </div>
            <ul class="nav-link-container">
                <li class="nav-link-item" v-for="tab in tabs" :key="tab.name" @click="tabClick(tab.route)">
                    {{tab.name}}
                </li>
                <!-- <li class="nav-link-item">文章</li>
                <li class="nav-link-item">标签</li>
                <li class="nav-link-item">关于我</li> -->
            </ul>
        </nav>
    </header>
</template>
<style>
.top-nav-container {
    position: fixed;
    height: 60px;
    top: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0 50px;
    z-index: 100;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.top-nav {
    /** max-width: 850px; */
    margin: 0 auto;
    height: 60px;
}
.nav-logo {
    display: inline-block;
    padding: 10px 0;
    cursor: pointer;
}

.logo {
    margin-right: 6px;
    width: 40px;
    height: 40px;
    vertical-align: middle;
}
.brand {
    font-size: 1.5em;
    display: inline-block;
    color: #2c3e50;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    vertical-align: middle;
}
.nav-link-container {      
    float: right;
    list-style-type: none;
}
.nav-link-item {
    display: inline-block;
    margin: 0.6em;
    cursor: pointer;
}
</style>
<script>
export default{
    data () {
        return {
            tabs: [
                {
                    name: 'Tab1',
                    route: '/tab1'
                },
                {
                    name: 'Tab2',
                    route: '/tab2'
                }
            ]
        }
    },
    methods: {
        tabClick (route) {
            this.$router.push(route)
        }
    }
}
</script>