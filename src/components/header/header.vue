<template>
    <div class="head_div">
        <div class="pull-left">
            <div @click.stop="unfolder" class="pull-left head-icon-container_div">
                <t-icon type="menu-unfold"></t-icon>
            </div>
            <span class="head-title-text_span">{{text}}</span>
        </div>
        <div class="pull-right">
            <div style="display: flex;">
                <div @click.stop="" class="head-avatar-container_div">
                    <v-tooltip :content="`Welcome ${userDspName}`" placement="bottom">
                        <img :src="`${root_path}/v1/user_profile/avatar/get?identity=${userDspName}`" class="head-avatar_img"/>
                    </v-tooltip>
                </div>
                <div @click.stop="logout" class="head-icon-container_div">
                    <t-icon type="logout"></t-icon>
                </div>
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
                root_path,
                menus: {},
                userDspName: ''
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
                if (debug) {
                    vm.$router.push({name: 'route_login'})
                } else {
                    this.$http.post(`logout`)
                        .then(
                            (response) => vm.$router.push({name: 'route_login'}),
                            () => vm.$message.error("登出系统异常"));
                }
            }
        },
        components: {
            't-icon': Icon
        },
        activated(){
            let vm = this;
            this.$http.get(`v1/user_profile/dspName/get`)
                .then(
                    (response) => this.userDspName = response.bodyText ? response.bodyText : '',
                    () => vm.$message.error("获取用户权限异常")
                );
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

    .head-icon-container_div {
        padding: 13px;
    }

    .head-title-text_span {
        letter-spacing: 2px;
        font-size: 18px;
        font-weight: 500;
        line-height: 50px;
    }

    .head-avatar-container_div {
        margin: 10px 5px 0;
        cursor: pointer;
    }

    .head-avatar_img {
        height: 28px;
        border-radius: 50%
    }


</style>