<template>
    <div class="z-sidebar">
        <div class="logo"></div>
        <span class="brand">{{me.name}}</span>
        <p class="description">{{me.description}}</p>
        <nav>
            <ul>
                <li v-for="tab in tabs" :key="tab.name" @click="toPage(tab.route)">
                    <a helf="#" alt="">{{tab.name}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data () {
        return {
            me: {
                logo: '',
                name: 'Zhu Phon',
                description: 'description'
            },
            tabs: [
                {
                    name: 'home',
                    route: '/home'
                },
                {
                    name: 'articles',
                    route: '/articles'
                },
                {
                    name: 'tags',
                    route: '/tags'
                },
                {
                    name: 'me',
                    route: '/login'
                }
            ]
        }
    },
    methods: {
        toPage (route) {
            this.$router.push(route)
        }
    }
}
</script>
<style>
    .z-sidebar {
        display: block;
        position: relative;
        max-width: 15%;
        flex: 1;
        background-color: #141414;
        overflow: hidden;
        text-align: right;
        padding: 40px;
    }
    .z-sidebar > .logo {
        height: 100px;
        width: 100px;
        margin: auto;
        background-image: url('../assets/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-color: #fafafa;
        z-index: 5;
        position: relative;
        border-radius: 50%;
        margin-right: 0;
    }
    .brand {
        font-size: 2.5rem;
        display: block;
        padding-top: 10px;
        color: #fafafa;
        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        font-weight: 300;
    }
    .description {
        color: #737373;
    }
    .z-sidebar > nav {
        display: block;
    }
    .z-sidebar > nav > ul {
        list-style: none;
    }
    .z-sidebar > nav > ul > li{
        display: block;
        line-height: 1.5em;
        color: #fafafa;
    }
    li > a {
        text-decoration: none;
        color: #fafafa;
    }
</style>


