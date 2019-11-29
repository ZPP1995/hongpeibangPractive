<template>
    <!--<el-dialog title="添加店铺" :visible.sync="dialogFormVisible">-->
    <el-dialog title="添加店铺" :visible="shopListVisible" @update:visible="bol=>$emit('update:shop-list-visible',bol)">
        <el-form >
            <el-form-item label="店铺名称" label-width="120px">
                <el-input v-model="shopListForm.shopName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺类别" label-width="120px">
                <el-select v-model="shopListForm.shopTypeId" placeholder="请选择">
                    <el-option
                            v-for="item in $store.state.shop.allShopTypeList"
                            :key="item._id"
                            :label="item.shopTypeName"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="店铺图片:" label-width="120px">
                <el-upload
                        ref="upload"
                        name = "shopPic"
                        class="upload-demo"
                        :data="shopListForm"
                        :on-success="success"
                        action="/ele/shopList"
                        :auto-upload="false"
                        :limit="1"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item label="是否推荐" label-width="120px">
                <el-radio v-model="shopListForm.isTop" :label="true">是</el-radio>
                <el-radio v-model="shopListForm.isTop" :label="false">否</el-radio>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:shop-list-visible',false)">取 消</el-button>
            <el-button type="primary" @click="submitForm">提  交</el-button>
        </div>
    </el-dialog>

</template>

<script>
    export default {
        name: "shop-list-dialog",
        props:["shopListVisible","shopTypeId"],
        methods:{
            // 提交完成以后
            success(res){
                if(res.ok === 1){
                    if(this.$route.name === "shopList"){
                        this.$store.dispatch("getShopList")
                    }else{
                        this.$router.push("/shopList")
                    }

                    this.$emit('update:shop-list-visible',false);
                }else{
                    alert(res.msg);
                }
            },
            submitForm(){
                this.$refs.upload.submit();

            }
        },
        data(){
            return {
                shopListForm:{
                    shopName:"",
                    shopTypeId:"",
                    isTop:false
                }
                // dialogFormVisible:false
            }
        },
        created(){
            if(this.shopTypeId){
                this.shopListForm.shopTypeId = this.shopTypeId
            }
        },
        mounted() {
            this.$store.dispatch("getShopList");
            if(this.$store.state.shop.allShopTypeList.length<1)
                this.$store.dispatch("getAllShopTypeList");
        }
    }
</script>

<style scoped>

</style>