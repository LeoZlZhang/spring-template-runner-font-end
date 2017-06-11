<template>
    <div>
        <v-row type="flex" justify="space-around" style="margin: 50px 0">
            <div style="display: block;">
                <t-badge size="large" :value="project" style="display: flex;justify-content:center"></t-badge>
                <h1>{{title}}</h1>
            </div>
        </v-row>
        <v-affix>
            <v-row type="flex" justify="space-around">
                <v-col>
                    <v-button type="ghost" icon="save" size="large" style="width: 60px; margin: 0 5px" @click="click"></v-button>
                    <v-button type="ghost" icon="arrow-left" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="lock" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="download" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="upload" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="danger" icon="delete" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="reload" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="rocket" size="large" style="width: 60px; margin: 0 5px"></v-button>
                </v-col>
            </v-row>
        </v-affix>
        <v-row>
            <v-col span="15" offset="1">
                <t-card title="Details">
                    <v-row>
                        <v-row class="field_row">
                            <v-col span="3">Title: </v-col>
                            <v-col span="20">
                                <t-input v-model="title" style="display: block"></t-input>
                            </v-col>
                        </v-row>
                        <v-row class="field_row">
                            <v-col span="3">Project: </v-col>
                            <v-col span="20">
                                <t-select :options="options_project" v-model="project"></t-select>
                            </v-col>
                        </v-row>
                        <v-row class="field_row">
                            <v-col span="3">Plan: </v-col>
                            <v-col span="20">
                                <t-select :options="options_project" v-model="project"></t-select>
                            </v-col>
                        </v-row>
                        <v-row class="field_row">
                            <v-col span="3">Marks: </v-col>
                            <v-col span="20">
                                <t-select :options="options_project" v-model="projects" multiple></t-select>
                            </v-col>
                        </v-row>
                    </v-row>
                </t-card>
            </v-col>

            <v-col span="6" offset="1">
                <t-card title="Info">
                    <v-row class="field_row">
                        <v-col span="6">Creator:</v-col>
                        <v-col span="17" offset="1">
                            <span>leo zhang</span>
                        </v-col>
                    </v-row>
                    <v-row class="field_row">
                        <v-col span="6">Assignee:</v-col>
                        <v-col span="17" offset="1">
                            <span>leo zhang</span>
                        </v-col>
                    </v-row>
                    <v-row class="field_row">
                        <v-col span="6">Created Date:</v-col>
                        <v-col span="17" offset="1">
                            <span>2017-11-01</span>
                        </v-col>
                    </v-row>
                    <v-row class="field_row">
                        <v-col span="6">Update Date:</v-col>
                        <v-col span="17" offset="1">
                            <span>2017-11-01</span>
                        </v-col>
                    </v-row>
                    <v-row class="field_row">
                        <v-col span="6">Version:</v-col>
                        <v-col span="17" offset="1">
                            <span>56</span>
                        </v-col>
                    </v-row>
                </t-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col span="15" offset="1">
                <v-row>
                    <t-card title="Preconditions">
                        <div>
                            <v-row>
                                <v-col span="11" class="field_col">
                                    <t-textarea v-model="text" placeholder="步骤描述..."></t-textarea>
                                </v-col>
                                <v-col span="10" class="field_col">
                                    <t-textarea v-model="text" placeholder="期望结果..."></t-textarea>
                                </v-col>
                                <v-col span="1" class="field_col">
                                    <v-button icon="api" size="small"></v-button>
                                </v-col>
                            </v-row>
                        </div>

                    </t-card>
                </v-row>
                <v-row>
                    <t-card title="Steps">
                        <v-row>
                            <v-col span="11" class="field_col">
                                <t-textarea v-model="text" placeholder="步骤描述..."></t-textarea>
                            </v-col>
                            <v-col span="10" class="field_col">
                                <t-textarea v-model="text" placeholder="期望结果..."></t-textarea>
                            </v-col>
                            <v-col span="1" class="field_col">
                                <v-button icon="api" size="small"></v-button>
                            </v-col>
                            <v-col span="2" class="field_col">
                                <v-button icon="plus" size="small" type="success"></v-button>
                                <v-button icon="minus" size="small" type="error"></v-button>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col span="11" class="field_col">
                                <t-textarea v-model="text" placeholder="步骤描述..."></t-textarea>
                            </v-col>
                            <v-col span="10" class="field_col">
                                <t-textarea v-model="text" placeholder="期望结果..."></t-textarea>
                            </v-col>
                            <v-col span="1" class="field_col">
                                <v-button icon="api" size="small" type="primary"></v-button>
                            </v-col>
                            <v-col span="2" class="field_col">
                                <v-button icon="plus" size="small" type="success"></v-button>
                                <v-button icon="minus" size="small" type="error"></v-button>
                            </v-col>
                        </v-row>
                    </t-card>
                </v-row>
            </v-col>

            <v-col span="6" offset="1">
                <t-card title="Version">
                    <v-row class="version-item_row version-selected_row">
                        <v-col span="3"><span>56</span></v-col>
                        <v-col span="9"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="6"><span>Leo zhang</span></v-col>
                    </v-row>
                    <v-row class="version-item_row">
                        <v-col span="3"><span>55</span></v-col>
                        <v-col span="9"><span>2017-09-01 10:10:01</span></v-col>
                        <v-col span="6"><span>Tony shao</span></v-col>
                    </v-row>
                    <v-row class="version-item_row">
                        <v-col span="3"><span>54</span></v-col>
                        <v-col span="9"><span>2017-08-01 16:55:34</span></v-col>
                        <v-col span="6"><span>Jerry huang</span></v-col>
                    </v-row>
                </t-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col span="22" offset="1">
                <t-card title="History">
                    <v-row>
                        <v-col span="4"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="1"><span>V56</span></v-col>
                        <v-col span="1"><span style="color: green;font-weight: bold">Pass</span></v-col>
                        <v-col span="4"><span>Leo Zhang</span></v-col>
                        <v-col span="4"><span>Plan1</span></v-col>
                    </v-row>
                    <v-row>
                        <v-col span="4"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="1"><span>V56</span></v-col>
                        <v-col span="1"><span style="color: red;font-weight: bold">Fail</span></v-col>
                    </v-row>
                    <v-row>
                        <v-col span="4"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="1"><span>V56</span></v-col>
                        <v-col span="1"><span style="color: green;font-weight: bold">Pass</span></v-col>
                    </v-row>
                    <v-row>
                        <v-col span="4"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="1"><span>V56</span></v-col>
                        <v-col span="1"><span style="color: green;font-weight: bold">Pass</span></v-col>
                    </v-row>
                    <v-row>
                        <v-col span="4"><span>2017-10-01 17:00:01</span></v-col>
                        <v-col span="1"><span>V56</span></v-col>
                        <v-col span="1"><span style="color: green;font-weight: bold">Pass</span></v-col>
                    </v-row>
                </t-card>
            </v-col>
        </v-row>


    </div>
</template>
<script>
    import Card from '../assessories/Card.vue'
    import Badge from '../assessories/LetterBadge.vue'
    import Select from '../assessories/Select.vue'
    import Input from '../assessories/Input.vue'
    import TextArea from '../assessories/Textarea.vue'
    import {redirect403Response} from '../utils/auth_helper'
    export default{
        data(){
            return {
                title: '',
                project: '',
                projects: [],
                options_project: ['lady', '小强', '小明', 'lady', '小强', '小明', 'lady', '小强', '小明'],
                options_project_b: [{
                    value: '1',
                    label: 'lady'
                }, {
                    value: '2',
                    label: '小强',
                    disabled: true
                }, {
                    value: '3',
                    label: '小明'
                }],
                text: ''
            }
        },
        methods:{
            click(){
                let vm= this;
                this.$http.get(`v1/data/get_demo`)
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
            't-card': Card,
            't-badge': Badge,
            't-select': Select,
            't-input': Input,
            't-textarea': TextArea,
        },
        activated(){
            this.title = this.$route.query.title;
            this.project = this.$route.query.project;
        },
        deactivated(){
            let vm = this;
            setTimeout(() => {
                vm.title = '';
                vm.project = ''
            }, 500);
        }
    }
</script>
<style scoped>
    .hero_row {
        height: 15vh;
    }

    .field_row {
        padding: 5px 0;
        line-height: 28px;
        word-wrap: break-word;
    }

    .field_col {
        padding: 0 2px;
        display: block;
    }

    .version-item_row {
        margin: 5px 0;
        padding: 1px 5px;
        cursor: pointer;
    }

    .version-selected_row {
        /*border: 1px solid rgba(33, 150, 243, 0.6);*/
        /*box-shadow: inset 0 0 3px 0 rgba(33, 150, 243, 1);*/
        background-color: rgba(33, 150, 243, 0.3);
        border-radius: 5px;
    }
</style>