<template>
    <div>
        <div style="margin-bottom: 16px;display: flex;justify-content: flex-end">
            <v-button type="success" style="width: 70px;" @click="newUser" icon="user-add" size="large"></v-button>
        </div>
        <div class="ant-table ant-table-middle" style="overflow: visible">
            <div class="ant-table-content">
                <div class="ant-table-body">
                    <table>
                        <colgroup>
                            <col style="width: 50px">
                            <col>
                            <col style="width: 40px">
                            <col style="width: 80px;">
                        </colgroup>
                        <tbody class="ant-table-tbody">
                        <tr v-for="user in users" :key="users">
                            <td>
                                <img :src="`${root_path}/v1/user_profile/avatar?identity=${user.displayName}`" class="avatar_img"/>
                            </td>
                            <td>
                                <div>
                                    <a>{{user.displayName}}</a><br>
                                    <!--<router-link :to="{ name: 'route_test_case_edit', query: { title: data_row['title'], project: data_row['project'] }}">{{data_row['title']}}</router-link>-->
                                    <p>{{user.email}} </p>
                                </div>
                            </td>
                            <td>
                                <transition name="move-down" mode="out-in">
                                    <div class="anticon anticon-lock locked button_icon text-xxl" v-if="user.locked" @click="unlockUser(user)" key="unlock"></div>
                                    <div class="anticon anticon-unlock  button_icon text-xxl" v-else @click="lockUser(user)" key="lock"></div>
                                </transition>
                            </td>
                            <td style="z-index: 99">
                                <v-popconfirm title="确定删除吗?" @confirm="deleteUser(user)">
                                    <div class="anticon anticon-delete button_icon text-xxl"></div>
                                </v-popconfirm>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <t-modal :ctl="modal_ctl" @success_update="success_update"></t-modal>
    </div>
</template>
<script>
    import Badge from '../../assessories/LetterBadge.vue'
    import {redirect403Response} from '../../utils/auth_helper'
    import SaveUserModal from './UserEditModal.vue'
    export default{
        data(){
            return {
                root_path,
                users: [],
                modal_ctl: {title: '', show: false, data: {}}
            }
        },
        methods: {
            newUser(){
                this.modal_ctl.title = '添加用户';
                this.modal_ctl.data = {};
                this.modal_ctl.show = true;
            },
            success_update(){
                this.loadUser();
            },
            loadUser(){
                let vm = this;
                this.$http.get(`v1/user_profile/users`)
                    .then(
                        (response) => {
                            if (response.body) {
                                this.users = response.body;
                            }
                        },
                        (response) => {
                            vm.$message.error("获取用户异常", 2);
                            redirect403Response(vm, response);
                        });
            },
            lockUser(user){
                let vm = this;
                this.$http.get(`v1/user_profile/lock`, {params: {id: user.id}})
                    .then(
                        () => user.locked = true,
                        (response) => {
                            vm.$message.error("更新用户异常", 2);
                            redirect403Response(vm, response);
                        });

            },
            unlockUser(user){
                let vm = this;
                this.$http.get(`v1/user_profile/unlock`, {params: {id: user.id}})
                    .then(
                        () => user.locked = false,
                        (response) => {
                            vm.$message.error("更新用户异常", 2);
                            redirect403Response(vm, response);
                        });

            },
            deleteUser(user){
                let vm = this;
                this.$http.get(`v1/user_profile/delete`, {params: {id: user.id}})
                    .then(
                        () => this.loadUser(),
                        (response) => {
                            vm.$message.error("删除用户异常", 2);
                            redirect403Response(vm, response);
                        });
            }
        },
        activated(){
            this.loadUser();
        },
        components: {
            't-modal': SaveUserModal
        }
    }
</script>
<style scoped>
    .avatar_img {
        height: 40px;
        border-radius: 50%;
    }

    .button_icon {
        cursor: pointer;
    }

    .locked {
        color: red
    }

    .button_icon:hover {
        color: red
    }
</style>