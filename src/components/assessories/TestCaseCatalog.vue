<template>
    <div class="ant-table ant-table-large">
        <div class="ant-table-content">
            <div class="ant-table-body">
                <table>
                    <colgroup>
                        <col style="width: 70px">
                        <col>
                    </colgroup>
                    <tbody class="ant-table-tbody">
                    <tr v-for="data_row in data" :key="data_row">
                        <td>
                            <t-badge :value="data_row['project']"></t-badge>
                        </td>
                        <td><router-link :to="{ name: 'route_test_case_edit', query: { title: data_row['title'], project: data_row['project'] }}">{{data_row['title']}}</router-link></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import Badge from './LetterBadge.vue'

    export default{
        props: {
            data: Array,
        },
        data(){
            return {
            }
        },
        components: {
            't-badge': Badge,
        }
    }
</script>
<style scoped>

</style>