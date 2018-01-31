<template>
    <div>
        <main class="container">
            <z-side-bar v-show="showSideBar"></z-side-bar>
            <!-- <v-aside></v-aside> -->
            <div class="content">
                <button @click="showOrHideSideBar" class="z-but">SideBar</button>
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
                showSideBar: true
            }
        },
        components: {
            vAside,
            vHeader,
            zSideBar
        },
        methods: {
            showOrHideSideBar () {
                this.showSideBar = !this.showSideBar
            }
        }
    }
</script>
<style scoped>
    .container {
        /* margin-top: 60px; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
    .content {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        flex: 2;
        display: flex;
        flex-direction: column;
    }
    .z-but {
        width: 100px;
        flex: none;
        position: absolute;
    }
    .main-container {
        padding: 20px 100px;
        border-bottom: 1px solid #ddd;
        flex: auto;
    }
    .z-footer {
        text-align: center;
        margin: 20px 0;
        flex: none;
    }
</style>