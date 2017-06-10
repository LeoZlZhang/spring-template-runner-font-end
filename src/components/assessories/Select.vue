<template>
    <div>
        <div class="select_div" @click.stop="focus" v-if="!multiple">
            <span v-if="value">{{value}}</span>
            <span class="placeholder_span" v-else>这个坑里没萝卜...</span>
        </div>
        <div class="select_div" @click.stop="focus" v-else>
            <template v-if="value && value instanceof Array && value.length>0">
                <div class="select-item_div" v-for="(item, index) in value">
                    <span>{{item}}</span>
                    <div @click.stop="remove(index)">
                        <v-icon type="close"></v-icon>
                    </div>
                </div>
            </template>
            <span class="placeholder_span" v-else>这个坑里没萝卜...</span>
        </div>
        <transition name="slide-up">
            <div class="menu_div" :style="{width:`${$el?$el.clientWidth:0}px`}" v-show="ctl_drop_down">
                <div class="menu-item_div" v-for="item in options" :key="item" @click="selecting(item)">{{item}}</div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        props: {
            value: [Number, String, Array],
            multiple: {type: Boolean, required: false, default: false},
            options: {
                type: Array, require: false, default: () => {
                    return []
                }
            },
        },
        data(){
            return {
                ctl_drop_down: false,
                ctl_menu_width: 0
            }
        },
        methods: {
            focus(){
                this.ctl_drop_down = !this.ctl_drop_down;
            },
            remove(index){
                let rtnArray = JSON.parse(JSON.stringify(this.value));
                rtnArray.splice(index, 1);
                this.$emit('input', rtnArray)
            },
            selecting(item){
                this.ctl_drop_down = false;
                if (this.multiple && this.value instanceof Array) {
                    let rtnArray = JSON.parse(JSON.stringify(this.value));
                    rtnArray.push(item);
                    this.$emit('input', rtnArray)
                } else {
                    this.$emit('input', item)
                }
            }
        },
        mounted() {
            let vm = this;
            window.addEventListener('click', () => {
                vm.ctl_drop_down = false
            });
        },
    }
</script>
<style scoped>
    .select_div {
        display: flex;
        flex-wrap: wrap;
        padding: 0 6px;
        line-height: 26px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: border 0.15s ease;
    }

    .select_div:hover {
        border: 1px solid rgba(33, 150, 243, 0.6);
        box-shadow: 0 0 3px 0 rgba(33, 150, 243, 0.6);
    }

    .select-item_div {
        display: flex;
        background-color: rgba(207, 216, 220, 0.3);
        margin: 1px 2px;
        padding: 0 3px;
        border-radius: 5px
    }

    .menu_div {
        display: block;
        max-height: 170px;
        margin-top: 5px;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgba(189, 195, 199, 1);
        background: white;
        overflow: auto;
        position: absolute;
        z-index: 99;
    }

    .menu-item_div {
        padding: 8px 7px;
        cursor: pointer;
        transition: background 0.15s linear;
    }

    .menu-item_div:hover {
        background: rgba(33, 150, 243, 0.07);
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

    .placeholder_span {
        color: rgba(178, 186, 187, 1);
    }

</style>