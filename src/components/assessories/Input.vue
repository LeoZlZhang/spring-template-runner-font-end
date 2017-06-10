<template>
    <div>
        <input :value="value" :style="{width:`${ctl_width}px`}" @input="input"/>
    </div>
</template>
<script>
    export default{
        props: {
            value: String
        },
        data(){
            return {
                ctl_width: 0
            }
        },
        methods: {
            input(e){
                this.$emit('input', e.target.value)
            },
            resize(){
                this.ctl_width = this.$el.clientWidth;
            }
        },
        mounted(){
            this.resize();
            window.addEventListener('resize', this.resize)
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.resize)
        }
    }
</script>
<style scoped>
    input {
        padding: 0 6px;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: border 0.15s ease;
        outline: none;
    }

    input:focus {
        border: 1px solid rgba(33, 150, 243, 0.6);
        box-shadow: 0 0 3px 0 rgba(33, 150, 243, 0.6);
    }

    input:hover {
        border: 1px solid rgba(33, 150, 243, 0.6);
        box-shadow: 0 0 3px 0 rgba(33, 150, 243, 0.6);
    }
</style>