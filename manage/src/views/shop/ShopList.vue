<template>
    <div>
        <div class="toolbar">

            <el-select v-model="shopTypeId" @change="$store.dispatch('getShopList',{shopTypeId})" placeholder="请选择店铺类别">
                <el-option
                        v-for="item in $store.state.shop.allShopTypeList"
                        :key="item._id"
                        :label="item.shopTypeName"
                        :value="item._id">
                </el-option>
            </el-select>

            <el-button type="success" @click="visible=true;">添加店铺类别</el-button>
            <el-button type="success" @click="shopListVisible=true;">添加店铺</el-button>
        </div>

        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.shop.shopList"
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
                    label="是否推荐"
                    width="200"
            >
                <template slot-scope="scope">
                    {{scope.row.isTop?"是":"否"}}
                </template>
            </el-table-column>

            <el-table-column
                    label="店铺名称"
                    width="200"
            >
                <template slot-scope="scope">
                    {{scope.row.shopName}}
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
                    label="店铺图片"
            >
                <template slot-scope="scope">
                    <!--<img :src="'http://127.0.0.1/'+scope.row.shopTypePic" alt="">-->
                    <img :src="'/ele/'+scope.row.shopPic" alt="">
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="goodsTypeVisible=true;shopId=scope.row._id;shopTypeId=scope.row.shopTypeId" type="success">添加商品类别</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>



        <PageInfo :query="{shopTypeId}" actions-name="getShopList"></PageInfo>

        <GoodsTypeDialog :shopId="shopId"  :shopTypeId="shopTypeId" v-if="goodsTypeVisible" :visible.sync = "goodsTypeVisible"></GoodsTypeDialog>

        <ShopTypeDialog v-if="visible" :visible.sync="visible"></ShopTypeDialog>

        <!--<ShopListDialog :shop-list-visible="shopListVisible" @update:shop-list-visible="fn"></ShopListDialog>-->
        <ShopListDialog v-if="shopListVisible" :shop-list-visible.sync="shopListVisible"></ShopListDialog>




    </div>
</template>

<script>
    export default {
        name: "shop-list",
        methods:{
            fn(bol){
                this.shopListVisible = bol;
                console.log(111111111,bol);
            }
        },
        data(){
            return {
                goodsTypeVisible:false,
                visible:false,
                shopListVisible:false,
                shopTypeId:"",
                shopId:"",
            }
        },
        created(){
            console.log(this.$route.params.shopTypeId);
            if(this.$route.params.shopTypeId)
                this.shopTypeId =this.$route.params.shopTypeId
        },
        mounted(){

            if(this.$store.state.shop.allShopTypeList.length<1)
                this.$store.dispatch("getAllShopTypeList")
        }
    }
</script>

<style scoped>

</style>