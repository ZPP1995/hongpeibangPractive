/*
* 上传图片，并将上传图片的结果（formdata的数据）进行返回
* params:
* {
*   ok:-1,异常  1，成功  2 未上传图片
* }*/
const formidable = require("formidable");
const path = require("path");
// 上传的文件目录
const uploadDir = path.resolve(__dirname,"../upload");
const fs = require("fs");
module.exports.upPic = function (req,picName) {
    const form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.uploadDir = uploadDir;
    form.keepExtensions = true;
    return new Promise((resolve,reject)=>{
        form.parse(req,function (err,params,file) {
            if(err){
                reject({
                    ok:-1,
                    msg:"网络连接错误"
                })
            }else{
                const picInfo = file[picName];
                if(!picInfo){

                        resolve({
                            ok:2,
                            params,
                            msg:"请选择您要上传的图片"
                        })
                }
                else if(picInfo.size <= 0){
                    fs.unlink(picInfo.path,function (err) {
                        resolve({
                            ok:2,
                            params,
                            msg:"请选择您要上传的图片"
                        })
                    })
                }else{
                    const extNameArr = [".png",".gif",".jpg"];
                    const upExtName = path.extname(picInfo.path);
                    if(extNameArr.includes(upExtName)){
                        // 合法
                        params[picName] = Date.now()+upExtName;
                        fs.rename(picInfo.path,uploadDir+"/"+params[picName],function (err) {
                            resolve({
                                ok:1,
                                params,
                                msg:"添加成功"
                            })
                        })
                    }else{
                        fs.unlink(picInfo.path,function (err) {
                            reject({
                                ok:-1,
                                msg:"请选择符合要求的图片：.png,.gif,.jpg"
                            })
                        })
                    }
                }
            }
        })
    })

}