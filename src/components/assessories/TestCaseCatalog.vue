<template>
    <div class="ant-table ant-table-large">
        <div class="ant-table-content">
            <div class="ant-table-body">
                <table>
                    <colgroup>
                        <col style="width: 70px">
                        <col v-for="column in columns">
                    </colgroup>
                    <tbody class="ant-table-tbody">
                    <tr v-for="data_row in data" :key="data_row">
                        <td>
                            <t-badge :value="data_row['project']"></t-badge>
                        </td>
                        <td v-for="column in columns">{{data_row[column]}}</td>
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
                columns: ['title']
            }
        },
        components: {
            't-badge': Badge
        }
    }
</script>
<style scoped>

</style>