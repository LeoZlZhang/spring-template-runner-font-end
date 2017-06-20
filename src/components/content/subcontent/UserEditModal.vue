<template>
    <div>
        <v-modal :title="ctl.title"
                 :visible="modal_visible"
                 :closable="false"
                 :confirmLoading="loading"
                 @ok="saveUser"
                 @cancel="modal_visible=false">
            <v-form direction="horizontal" :model="user_data" :rules="rules" ref="form">
                <v-form-item label="登陆名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name" has-feedback>
                    <v-input v-model="user_data.name"></v-input>
                </v-form-item>
                <v-form-item label="显示名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="displayName" has-feedback>
                    <v-input v-model="user_data.displayName"></v-input>
                </v-form-item>
                <v-form-item label="邮箱" :label-col="labelCol" :wrapper-col="wrapperCol" prop="email" has-feedback>
                    <v-input v-model="user_data.email"></v-input>
                </v-form-item>
                <v-form-item label="权限" :label-col="labelCol" :wrapper-col="wrapperCol">
                    <v-select multiple :data="authorizesOpts" v-model="user_data.authorizes"></v-select>
                </v-form-item>
            </v-form>
        </v-modal>
    </div>
</template>
<script>
    import Card from '../../assessories/Card.vue'
    import {redirect403Response} from '../../utils/auth_helper'
    export default{
        props: {
            ctl: {
                type: Object,
                required: true,
                default(){
                    return {title: '', show: false, data: {}}
                }
            },
        },
        data(){
            return {
                loading: false,
                user_data: {},
                authorizesOpts: [],
                rules: {
                    name: [{
                        required: true,
                        message: '请输入用户登陆名'
                    }, {
                        validator: (rule, value, callback) => {
                            !value ? callback(new Error('请输入用户登陆名')) :
                                /^[\w.]+$/.test(value) ? callback() : callback(new Error("合法字符包括数字，字母，'_'，'.'"));
                        }
                    }],
                    displayName: [{
                        required: true,
                        message: '请输入用户显示名'
                    }],
                    email: [{
                        required: true,
                        message: '请输入用户邮箱'
                    }, {
                        validator: (rule, value, callback) => {
                            !value ? callback(new Error('请输入用户邮箱')) :
                                /^[\w.]+@[\w.]+$/.test(value) ? callback() : callback(new Error('邮箱格式不合法'));
                        }
                    }],
                },
                labelCol: {span: 6},
                wrapperCol: {span: 12},
            }
        },
        computed: {
            modal_visible: {
                get(){
                    this.loading = false;
                    if (this.ctl.show === true)
                        this.user_data = JSON.parse(JSON.stringify(this.ctl.data));
                    return this.ctl.show;
                },
                set(value){
                    this.ctl.show = value;
                }
            }
        },
        methods: {
            saveUser(){
                let vm = this;
                vm.loading = true;
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.$http.post(`v1/user_profile/save`, vm.user_data)
                            .then(
                                () => {
                                    vm.loading = false;
                                    vm.modal_visible=false;
                                    vm.$emit('success_update');
                                },
                                (response) => {
                                    vm.loading = false;
                                    vm.$message.error("保存用户信息异常", 2);
                                    redirect403Response(vm, response);
                                });
                    }
                });
            }
        },
        components: {
            't-card': Card
        },
        activated(){
            let vm = this;
            this.$http.get(`v1/user_profile/authorizes_options`)
                .then(
                    (response) => {
                        if (response.body)
                            this.authorizesOpts = response.body
                    },
                    (response) => {
                        vm.$message.error("获取权限列表异常", 2);
                        redirect403Response(vm, response);
                    });
        }
    }
</script>
<style scoped>

</style>