<template>
    <div class="toolbar">
        <el-form :inline="true"  class="demo-form-inline">
            <el-form-item label="店铺类别名称">
                <el-input  placeholder="店铺类别名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="dialogFormVisible=true">添加店铺类别</el-button>
            </el-form-item>
        </el-form>



        <el-dialog title="添加店铺类别" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="店铺类别名称:" label-width="120px">
                    <el-input style="width:240px;" v-model="shopTypeForm.shopTypeName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺类别图片:" label-width="120px">
                    <el-upload
                            ref="upload"
                            name = "shopTypePic"
                            class="upload-demo"
                            :data="shopTypeForm"
                            :on-success="success"
                            action="/ele/shopTypeList"
                            :auto-upload="false"
                            :limit="1"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addShopType">提  交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "shop-type-list",
        data(){
            return {
                dialogFormVisible:false,
                shopTypeForm:{
                    shopTypeName:""
                }
            }
        },
        methods:{
            addShopType(){
                this.$refs.upload.submit();
            },
            success(response){
                console.log(response);
                this.dialogFormVisible=false;
            }
        }
    }
</script>

<style scoped>

</style>