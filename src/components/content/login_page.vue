<template>
    <div style="overflow: hidden">
        <t-nebular></t-nebular>
        <div class="login-container_div">
            <div class="login-form_div">
                <div>
                    <img src="../../assets/logo.png" style="height: 40px;margin: 30px auto;display: block"/>
                </div>
                <v-form direction="horizontal">
                    <v-form-item required>
                        <v-input placeholder="用户名" style="opacity: 0.9" v-model="username">
                            <v-icon type="user" slot="before"></v-icon>
                        </v-input>
                    </v-form-item>
                    <v-form-item required>
                        <v-input placeholder="密码" type="password" style="opacity: 0.9" v-model="password">
                            <v-icon type="lock" slot="before"></v-icon>
                        </v-input>
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
                login_fail: false
            }
        },
        methods: {
            login_submit(){
                let vm = this;
                this.$http.post(`${HOST_URL}/login?username=${this.username}&password=${this.password}`)
                    .then(
                        (response) => {
                            response.body.success ? redirectAfterLoginSuccess(vm) : vm.login_fail = true;
                        },
                        () => {
                            vm.login_fail = true;
                        });
            }
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
        /*justify-content: center;*/
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