<template>
    <div>
        <keep-alive>
            <router-view name="header"></router-view>
        </keep-alive>
        <div class="hero_div">
            <v-button @click="click">123</v-button>
        </div>
        <div class="content_div">
            <v-tabs active-tab-key="1">
                <v-tab-pane tab-key="1" tab="我的">
                    <t-tc-catalog :data="table_data"></t-tc-catalog>
                </v-tab-pane>
                <v-tab-pane tab-key="2" tab="小组">
                    <t-tc-catalog :data="table_data"></t-tc-catalog>
                </v-tab-pane>
                <v-tab-pane tab-key="3" tab="所有">
                    <t-tc-catalog :data="table_data"></t-tc-catalog>
                </v-tab-pane>
                <v-tab-pane tab-key="3" tab="废弃">
                    <t-tc-catalog :data="table_data"></t-tc-catalog>
                </v-tab-pane>
            </v-tabs>
        </div>
    </div>
</template>
<script>
    import TCCatalog from '../assessories/TestCaseCatalog.vue'
    import {redirect403Response} from '../utils/auth_helper'
    export default{
        data(){
            return {
                table_data: [
                    {title: '【QMS】增加团队IV类项目需求占比', project: 'QMS', version: '1.20'},
                    {title: 'SonarQube集成 - FENGKONG', project: 'CI', version: '1.01'},
                    {title: '【docker容器化部署】 - 测试环境创建及各系统访问链接邮件发布提示（师宗强）', project: 'CI', version: '2.0'},
                    {title: '[EE1.3] EE SDK 开发', project: '测试平台', version: '2.0'},
                ],
            }
        },
        methods: {
            click(){
                let vm= this;
                this.$http.get(`${HOST_URL}/v1/data/get_demo`)
                    .then(
                        (response) => {
                            console.log('demo request success', '----', response)
                        },
                        (response) => {
                            console.log('demo request fail', '----', response);
                            redirect403Response(vm, response)
                        });
            }
        },
        components: {
            't-tc-catalog': TCCatalog
        }

    }
</script>
<style scoped>
    .hero_div {
        height: 20px;
    }

    .content_div {
        padding: 0 50px
    }
</style>