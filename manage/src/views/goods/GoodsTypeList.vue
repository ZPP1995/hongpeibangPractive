<template>
    <div>
        <div class="toolbar">
            <el-button type="success" @click="goodsTypeVisible=true">添加商品类别</el-button>
        </div>
        <GoodsTypeDialog v-if="goodsTypeVisible" :visible.sync="goodsTypeVisible"></GoodsTypeDialog>
    </div>
</template>

<script>
    export default {
        name: "goods-type-list",
        data(){
            return {
                goodsTypeVisible:false
            }
        }
    }
</script>

<style scoped>

</style>