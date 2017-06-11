<template>
    <div class="head_div">
        <div class="pull-left">
            <div @click.stop="unfolder" style="margin: 0 20px;float: left">
                <t-icon type="menu-unfold"></t-icon>
            </div>
            <span class="head-title-text_span">{{text}}</span>
        </div>
        <div class="pull-right">
            <div @click.stop="logout" style="margin-right: 20px">
                <t-icon type="logout"></t-icon>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuData from '../sider_menu/menu_data'
    import Icon from '../assessories/icon.vue'
    export default {
        data(){
            return {
                menus: {}
            }
        },
        computed: {
            text(){
                if (this.menus[this.$route.name]) {
                    return this.menus[this.$route.name].label;
                }
            }
        },
        methods: {
            unfolder(){
                this.$store.state.show_menu = true;
            },
            logout(){
                let vm = this;
                this.$http.post(`logout`)
                    .then(
                        (response) => {
//                            auth_status.authenticated = false;
                            vm.$router.push({name: 'route_login'})
                        },
                        () => {
//                            auth_status.authenticated = false;
                        });
            }
        },
        components: {
            't-icon': Icon
        },
        created(){
            MenuData.forEach(item => this.menus[item.href] = item)
        }
    }
</script>
<style scoped>
    .head_div {
        height: 51px;
        background-color: rgb(250, 250, 250);
        border-bottom: 1px solid rgb(229, 229, 229);
    }

    .head-title-text_span {
        letter-spacing: 2px;
        font-size: 18px;
        font-weight: 500;
        line-height: 50px;
    }
</style>