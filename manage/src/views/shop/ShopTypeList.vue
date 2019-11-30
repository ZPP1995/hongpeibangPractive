<template>
    <div>
        <div class="toolbar">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="店铺类别名称">
                    <el-input v-model="shopTypeName"  placeholder="店铺类别名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getShopTypeList',{shopTypeName})">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="visible=true">添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>


        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.shop.shopTypeList"
                style="width: 100%">
            <el-table-column
                    label="ID"
                    width="250"
            >
                <template slot-scope="scope">
                    {{scope.row._id}}
                </template>
            </el-table-column>
            <el-table-column
                    label="上传的时间"
                    width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="店铺类别名称"
                    width="200"
            >
                <template slot-scope="scope">
                    {{scope.row.shopTypeName}}
                </template>
            </el-table-column>





            <el-table-column
                label="店铺类别图片"
            >
                <template slot-scope="scope">
                    <!--<img :src="'http://127.0.0.1/'+scope.row.shopTypePic" alt="">-->
                    <img :src="'/ele/'+scope.row.shopTypePic" alt="">
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="$router.push({name:'shopList',params:{shopTypeId:scope.row._id}})">查看该类别下的店铺</el-button>
                    <el-button size="mini" type="success" @click="shopTypeId=scope.row._id;shopListVisible=true">添加店铺</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>




        <!--在pageinfo组件当中执行action:getShopTypeList,并将query的值进行传递。-->
        <PageInfo :query="{shopTypeName}" actions-name="getShopTypeList"></PageInfo>

        <ShopListDialog :shopTypeId="shopTypeId" v-if="shopListVisible" :shop-list-visible.sync="shopListVisible"></ShopListDialog>



        <!--<ShopTypeDialog ref="shopTypeDialog"></ShopTypeDialog>-->
        <ShopTypeDialog v-if="visible"  :visible.sync="visible"></ShopTypeDialog>


    </div>
</template>

<script>
    export default {
        name: "shop-type-list",
        data(){
            return {
                visible:false,
                shopTypeId:"",
                shopListVisible:false,
                shopTypeName:""
            }
        }
    }
</script>

<style scoped>

</style>