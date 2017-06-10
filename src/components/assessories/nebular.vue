<template>
    <div class="nebular_div" ref="target">
        <div v-for="i in starts" class="start_div"></div>
    </div>
</template>
<script>
    import Velocity from '../utils/velocity.min'
    export default {
        props: {
            starts: {type: Number, required: false, default: 300}
        },
        activated(){
            let r = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
            let screenWidth = window.screen.availWidth;
            let screenHeight = window.screen.availHeight;
            this.$refs.target.childNodes.forEach(node => {
                Velocity(
                    node,
                    {
                        translateY: [() => '+=' + r(screenHeight / 2.5, -screenHeight / 2.5), () => r(screenHeight, 0)],
                        translateX: [() => '+=' + r(screenWidth / 2.75, -screenWidth / 2.75), () => r(screenWidth, 0)],
                        translateZ: [() => '+=' + r(600, -725), () => r(600, -725)],
                        opacity: [() => Math.random(), () => Math.random() + 0.01],
                    },
                    {duration: 10000, loop: true}
                )
            });
        },
        deactivated(){
            this.$refs.target.childNodes.forEach(node => {
                Velocity(node, "stop")
            });

        }
    }
</script>
<style scoped>
    .nebular_div {
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.9);
        perspective: 50px
    }

    .start_div {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgb(41, 182, 246);
    }
</style>