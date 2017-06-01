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

<style>
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
        /*border-radius: 4px;*/
    }

    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
    }
</style>
