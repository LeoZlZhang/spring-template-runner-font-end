<template>
    <div>
        <textarea :style="{width:`${ctl_width}px`}" @input="input" :placeholder="placeholder" ref="ta"></textarea>
    </div>
</template>
<script>
    let decorate_text_area = (element, text) => {
        element.innerHTML = text;
        element.style.height = '5px';
        let newHeight = Math.min(Math.max(element.scrollHeight + 5, 40), 300);
        element.style.height = newHeight + 'px';
    };

    export default{
        props: {
            value: String,
            placeholder: String
        },
        data(){
            return {
                ctl_width: 0,
            }
        },
        methods: {
            input(e){
                decorate_text_area(e.target, e.target.value);
                this.$emit('input', e.target.value)
            },
            resize(){
                this.ctl_width = this.$el.clientWidth;
            },
        },
        mounted(){
            this.resize();
            window.addEventListener('resize', this.resize);
            let vm = this;
            setTimeout(() => decorate_text_area(vm.$refs['ta'], vm.value), 50)
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.resize);
        }
    }
</script>
<style scoped>
    textarea {
        padding: 0 6px;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: border 0.15s ease;
        outline: none;
        resize: none;
    }

    textarea:focus {
        border: 1px solid rgba(33, 150, 243, 0.6);
        box-shadow: 0 0 3px 0 rgba(33, 150, 243, 0.6);
    }

    textarea:hover {
        border: 1px solid rgba(33, 150, 243, 0.6);
        box-shadow: 0 0 3px 0 rgba(33, 150, 243, 0.6);
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
    }

    ::-webkit-input-placeholder {
        color: rgba(178, 186, 187, 1);
    }
</style>