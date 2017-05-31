<template>
    <div class="head_div">
        <div class="head-title_div">
            <span class="head-title-text_span">{{text}}</span>
        </div>
    </div>
</template>
<script>
    import MenuData from '../sider_menu/menu_data'
    export default {
        data(){
            return {
                menus:{}
            }
        },
        computed: {
            text(){
                return this.menus[this.$route.name].label;
            }
        },
        created(){
            MenuData.forEach(item=> this.menus[item.href] = item)
        }
    }
</script>
<style scoped>
    .head_div {
        height: 51px;
        background-color: rgb(250, 250, 250);
        border-bottom: 1px solid rgb(229, 229, 229);
        display: flex;
        padding: 0 50px;
    }

    .head-title_div {
        width: 150px;
        float: left;
        display: block;
    }

    .head-title-text_span {
        letter-spacing: 1.2px;
        font-size: 15px;
        line-height: 50px;
    }
</style>