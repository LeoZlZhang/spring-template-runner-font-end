<template>
    <v-icon :type="type" class="folder_icon" :style="{color: reverse_color?'rgba(255,255,255,0.5)':'color: rgba(0,0,0,0.5)'}"></v-icon>
</template>
<script>
    export default{
        props:{
            type:String,
            reverse_color: Boolean
        }
    }
</script>
<style scoped>
    .folder_icon {
        font-size: 25px;
        cursor: pointer
    }
</style>