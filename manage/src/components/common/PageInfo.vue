<template>
    <div class="toolbar">

        <el-pagination
                background
                layout="prev, pager, next"
                :page-count="$store.state.pageSum"
                :current-page="$store.state.pageIndex"
                @current-change="pageIndex=>$store.dispatch(actionsName,{
                    ...{pageIndex},
                    ...query
                })"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "page-info",
        props:{
           actionsName:{
               type:String,
               default:""
           },
            // 将你要搜索条件放至到该query对象。 shopTypeName
            query:{
               type:Object,
                // 注意，对象或数组必须要是一个工厂模式。
                default:()=>{return {}}
            }
        },
        mounted(){
            console.log(999999,this.query);
            this.$store.dispatch(this.actionsName,this.query);
        }
    }
</script>

<style scoped>

</style>