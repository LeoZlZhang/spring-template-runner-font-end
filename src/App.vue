<template>
    <div class="container_div">
        <keep-alive>
            <router-view name="menu"></router-view>
        </keep-alive>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view name="play_ground"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style scoped>
    #app {
    }

    .container_div {
        min-height: 100vh;
        background-color: rgba(118, 215, 196, 0.01);

    }

</style>
