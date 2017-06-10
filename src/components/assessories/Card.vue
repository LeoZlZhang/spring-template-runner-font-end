<template>
    <div>
        <div class="container_div">
            <div class="header_div"><span>{{title}}</span></div>
            <div class="header-split_div"></div>
        </div>
        <div class="content_div">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            title: String,
        }
    }
</script>
<style scoped>
    .container_div {
        display: flex;
        line-height: 1.5
    }

    .header_div {
        position: absolute;
        top:0;
        left: 0;
        padding: 0 9px 0 0;
        background: white;
        font-size: 16px;
        font-weight: 500;
    }

    .header-split_div {
        border-bottom: 1px solid rgba(229, 229, 229, 0.7);
        width: 100%;
        height: 15px;
    }

    .content_div {
        padding: 10px;
    }
</style>