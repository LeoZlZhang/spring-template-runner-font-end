<template>
    <div>
        <keep-alive>
            <router-view name="header"></router-view>
        </keep-alive>
        <div class="content_div">
            <v-tabs active-tab-key="1">
                <v-tab-pane tab-key="1" tab="用户">
                    <div>
                        <t-user-catalog></t-user-catalog>
                    </div>
                </v-tab-pane>
                <v-tab-pane tab-key="2" tab="团队">
                </v-tab-pane>
            </v-tabs>
        </div>
    </div>
</template>
<script>
    import UserCatalog from './subcontent/UserCatalog.vue'
    export default{
        data(){
            return {}
        },
        components: {
            't-user-catalog': UserCatalog
        }
    }
</script>
<style scoped>

    .content_div {
        margin-top: 20px;
        padding: 0 50px
    }
</style>