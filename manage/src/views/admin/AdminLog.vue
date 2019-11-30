<template>
    <div>
        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.admin.adminLog"
                style="width: 100%">
            <el-table-column
                    label="ID"
                    width="220"
            >
                <template slot-scope="scope">
                    {{scope.row._id}}
                </template>
            </el-table-column>
            <el-table-column
                    label="日期"
                    width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.loginTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="管理员的名称"
                width="200"
            >
                <template slot-scope="scope">
                    {{scope.row.adminName}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <PageInfo  actions-name="getAdminLog"></PageInfo>
        <!--<div class="toolbar">-->
            <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--:page-count="$store.state.admin.pageSum"-->
                    <!--:current-page="$store.state.admin.pageIndex"-->
                    <!--@current-change="pageIndex=>$store.dispatch('getAdminLog',pageIndex)"-->
                    <!--&gt;-->
            <!--</el-pagination>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "admin-log",
        // methods:{
        //     // currentChange(pageIndex){
        //     //     console.log(pageIndex);
        //     //      this.$store.dispatch("getAdminLog",pageIndex)
        //     // }
        // },
        // async mounted(){
        //     // const data = await this.$store.dispatch("getAdminLog");
        // }
    }
</script>

<style scoped>

</style>