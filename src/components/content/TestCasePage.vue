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
                    <v-button type="ghost" icon="save" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="lock" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="ghost" icon="download" size="large" style="width: 60px; margin: 0 5px"></v-button>
                    <v-button type="danger" icon="delete" size="large" style="width: 60px; margin: 0 5px"></v-button>
                </v-col>
            </v-row>
        </v-affix>
        <v-row>
            <v-col span="15" offset="1">
                <t-card title="Details">
                    <v-col span="12">
                        <v-row class="field_row"><span>Project: {{project}}</span></v-row>
                        <v-row class="field_row"><span>Plan:</span></v-row>
                    </v-col>
                    <v-col span="12">
                        <v-row class="field_row"><span>Marks:</span></v-row>
                    </v-col>
                </t-card>
            </v-col>

            <v-col span="6" offset="1">
                <t-card title="Info">
                    <v-row class="field_row"><span>Creator:</span></v-row>
                    <v-row class="field_row"><span>Assignee:</span></v-row>
                    <v-row class="field_row"><span>Created Date:</span></v-row>
                    <v-row class="field_row"><span>Update Date:</span></v-row>
                </t-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col span="22" offset="1">
                <t-card title="Preconditions"></t-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col span="22" offset="1">
                <t-card title="Steps"></t-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col span="22" offset="1">
                <t-card title="History"></t-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import Card from '../assessories/Card.vue'
    import Badge from '../assessories/LetterBadge.vue'
    export default{
        data(){
            return {
                title: '',
                project: '',
            }
        },
        components: {
            't-card': Card,
            't-badge': Badge
        },
        activated(){
            console.log(this.$route);
            this.title = this.$route.query.title;
            this.project = this.$route.query.project;
        },
        deactivated(){
            let vm=this;
            setTimeout(()=>{vm.title='';vm.project=''},500);
        }
    }
</script>
<style scoped>
    .hero_row {
        height: 15vh;
    }

    .field_row {
        line-height: 1.5;
        margin: 0 10px;
        padding: 5px 0;
    }
</style>