<template>
    <div @click.stop="">
        <transition name="move-left">
            <div class="container_div" v-if="show">
                <div @click="folder" style="padding: 13px;">
                    <t-icon type="menu-fold" reverse_color></t-icon>
                </div>
                <div class="content_div">
                    <div v-for="item in data">
                        <template v-if="my_roles.indexOf(item.access_role)>=0 ">
                            <router-link tag="div" :to="{name:item.href}">
                                <a class="item_a">
                                    <span class="label_span">{{item.label}}</span>
                                    <span v-if="item.badge" class="badge_span">{{item.badge}}</span>
                                </a>
                            </router-link>
                        </template>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import data from './menu_data'
    import Icon from '../assessories/icon.vue'
    export default{
        data(){
            return {
                data: data,
                my_roles: []
            }
        },
        computed: {
            show(){
                return this.$store.state.show_menu
            },
        },
        methods: {
            folder(){
                this.$store.state.show_menu = false;
            }
        },
        components: {
            't-icon': Icon
        },
        activated(){
            let vm = this;
            this.$http.get('v1/user_profile/authorize/get')
                .then(
                    (response) => this.my_roles = response.body ? response.body : [],
                    () => vm.$message.error("获取用户权限异常")
                );
        },
        mounted() {
            let vm = this;
            window.addEventListener('click', () => {
                vm.$store.state.show_menu = false;
            });
        },
    }
</script>
<style scoped>
    .container_div {
        display: block;
        position: fixed;
        width: 200px;
        height: 100vh;
        top: 0;
        z-index: 99;
        background-color: rgba(61, 69, 77, 0.94);
        box-shadow: 0 0 10px 0 rgba(61, 69, 77, 1);
        transition: left 0.15s ease;
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

    .label_span {
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