<template>
    <div>
        <v-header></v-header>
        <main class="container">
            <z-side-bar></z-side-bar>
            <!-- <v-aside></v-aside> -->
            <div class="content">
                <div class="main-container">
                    <router-view></router-view>
                </div>
                <footer class="z-footer">
                    &copy;6666666666666
                </footer>
            </div>
        </main>
    </div>
</template>
<script>
    import vHeader from './HeaderNav.vue'
    import vAside from './Aside.vue'
    import zSideBar from './SideBar.vue'
    export default {
        data () {
            return {
                search: '',
                showHeader: true
            }
        },
        components: {
            vAside,
            vHeader,
            zSideBar
        },
        methods: {
            cardClick () {
                alert('card')
            }
        }
    }
</script>
<style scoped>
    .container {
        display: block;
        position: relative;
        margin-top: 60px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .content {
        display: block;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        flex: 2;
    }
    .main-container {
        margin: 0 auto;
        padding: 20px 80px;
    }
    .z-footer {
        text-align: center;
        margin: 20px 0;
    }
</style>