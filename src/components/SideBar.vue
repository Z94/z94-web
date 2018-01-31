<template>
    <div class="z-sidebar">
        <div class="logo"></div>
        <span class="brand">ZhuPhon</span>
        <p class="description">description</p>
        <nav>
            <ul>
                <li class="">home</li>
                <li class="">home</li>
                <li class="">home</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleOpen () {

        },
        handleClose () {

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
        color: #141414;
        overflow: hidden;
        text-align: right;
    }
    .brand {
        font-size: 1.5em;
        display: inline-block;
        color: #2c3e50;
        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        font-weight: 500;
        vertical-align: middle;
    }
</style>


