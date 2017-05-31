<template>
    <div class="container_div">
        <div class="content_div">
            <div v-for="item in data">
                <router-link tag="div" :to="{name:item.href}">
                    <a class="item_a">
                        <span class="label_span">{{item.label}}</span>
                        <span v-if="item.badge" class="badge_span">{{item.badge}}</span>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import data from './menu_data'
    export default{
        data(){
            return {
                data: data
            }
        },
    }
</script>
<style scoped>
    .container_div {
        position: fixed;
        width: 200px;
        height: 100vh;
        top: 0;
        left: -199px;
        padding: 50px 0;
        z-index: 99;
        background-color: rgba(61, 69, 77, 0.94);
        box-shadow: 0 0 10px 0 rgba(61, 69, 77, 1);
        transition: left 0.15s ease;
    }

    .container_div:hover {
        left: -1px;
    }

    .content_div {
        display: block;
    }

    .item_a {
        display: block;
        color: #b9bbbe;
        font-size: 14px;
        line-height: 30px;
        padding: 10px 27px;
        background: transparent;
        transition: background, color 0.15s ease;
        outline: none;
        text-decoration: none;
    }

    .item_a:focus {
        color: #fff;
        background: #383f45;
    }

    .item_a:hover {
        background: #383f45;
    }

    .label_span{
        letter-spacing: 1px;
    }

    .badge_span {
        font-size: 12px;
        background-color: #383f45;
        border-radius: 10px;
        padding: 0 4px;
        float: right
    }

</style>