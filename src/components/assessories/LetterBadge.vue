<template>
    <v-tooltip :content="value" placement="right" :delay="700">
        <div class="container_div"
             :class="{container_div_small:size==='small'||size!=='large',container_div_large:size==='large'}"
             :style="style_background">{{badge}}
        </div>
    </v-tooltip>
</template>
<script>
    import {hashString} from '../utils/tuils'
    export default{
        props: {
            size: {
                type: String,
                required: false,
                default: 'small'
            },
            value: {
                type: String,
                required: true,
                default: 'badge'
            }
        },
        computed: {
            style_background(){
                let num = (hashString(this.value) % 0xffffff);
                if (num === 0) {
                    num = 0x000001;
                }
                else {
                    while (num < 0x0fffff)
                        num = num << 4;
                }

                let hexStr = num.toString(16);
                let n1 = parseInt(hexStr.substring(0, 2), 16);
                let n2 = parseInt(hexStr.substring(2, 4), 16);
                let n3 = parseInt(hexStr.substring(4, 6), 16);
                return {
                    backgroundColor: `rgba(${n1},${n2},${n3},0.1)`
                }
            },
            badge(){

                return this.value ? this.value.substring(0, 1).toUpperCase() : '';
            }
        }
    }
</script>
<style scoped>
    .container_div_small {
        height: 40px;
        width: 40px;
        line-height: 40px;
        font-size: 16px;
    }

    .container_div_large {
        height: 80px;
        width: 80px;
        line-height: 80px;
        font-size: 34px;
    }

    .container_div {
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        font-weight: 500
    }
</style>