<template>
    <div style="overflow: hidden">
        <t-nebular></t-nebular>
        <div class="login-container_div">
            <div class="login-form_div">
                <div>
                    <img src="../../assets/logo.png" style="height: 40px;margin: 30px auto;display: block"/>
                </div>
                <v-form direction="horizontal">
                    <v-form-item>
                        <span class="ant-input-wrapper ant-input-group" style="opacity: 0.9">
                            <span class="ant-input-group-addon"><i class="anticon anticon-user"></i> </span>
                            <input type="text" class="ant-input" placeholder="用户名" v-model="username" @keyup.enter="login_submit"/>
                        </span>
                    </v-form-item>
                    <v-form-item required>
                        <span class="ant-input-wrapper ant-input-group" style="opacity: 0.9">
                            <span class="ant-input-group-addon"><i class="anticon anticon-lock"></i> </span>
                            <input type="password" class="ant-input" placeholder="密码" v-model="password" @keyup.enter="login_submit"/>
                        </span>
                    </v-form-item>
                    <v-form-item>
                        <v-button type="default" style="width: 100%;opacity: 0.9"
                                  icon="login"
                                  @click="login_submit">
                        </v-button>
                    </v-form-item>
                </v-form>
            </div>
        </div>
    </div>
</template>
<script>
    import Nebular from '../assessories/nebular.vue'
    import {redirectAfterLoginSuccess} from '../utils/auth_helper'
    export default{
        data(){
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login_submit(){
                let vm = this;
                if (debug) {
                    vm.$store.state.authorizes = ['ROLE_ADMIN'];
                    redirectAfterLoginSuccess(vm);
                } else {
                    this.$http.post(`login?username=${this.username}&password=${this.password}`)
                        .then(
                            (response) => {
                                if (response.body.success) {
                                    redirectAfterLoginSuccess(vm);
                                } else if (response.body.reason) {
                                    vm.$message.error(response.body.reason === 'bad' ? '用户名或密码错误' :
                                        response.body.reason === 'disabled' ? '未激活用户' :
                                            response.body.reason === 'locked' ? '用户被锁定' : '未知原因', 2)
                                }
                            },
                            () => {
                                vm.$message.error("请求异常", 2)
                            });
                }
            },
        },
        components: {
            't-nebular': Nebular
        }
    }

</script>
<style scoped>
    .login-container_div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .login-form_div {
        margin: auto auto;
        padding: 5px 20px;
        width: 348px;
        background-color: rgba(224, 224, 224, 0.07);
        box-shadow: 0 0 10px 0 rgba(224, 224, 224, 0.05);
        border-radius: 8px;
        transition: background, box-shadow 0.15s ease;
    }

    .login-form_div:hover {
        background-color: rgba(224, 224, 224, 0.2);
        box-shadow: 0 0 10px 0 rgba(224, 224, 224, 0.15);
    }
</style>