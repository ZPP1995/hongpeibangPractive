const {upPic} = require("./upPic");
const tools = require("./tools");
const db = require("./db");
module.exports.addShopTypeList = async function (req,res) {
    const results = await upPic(req,"shopTypePic");
    if(results.ok === 1){
        await  db.insertOne("shopTypeList",{
            shopTypeName:results.params.shopTypeName,
            shopTypePic : results.params.shopTypePic,
            createTime:Date.now()
        })
        tools.json(res,1,"添加成功")
    }else{
        tools.json(res);
    }
    // res.json(results);
}
module.exports.getShopTypeList = async function (req,res) {
    // console.log(22222,tokenInfo);
    // tokenInfo.adminName
    let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    const limit = 2;
    const whereObj = {};
    const shopTypeName = req.query.shopTypeName || "";
    if(shopTypeName.length>0)
        whereObj.shopTypeName = new RegExp(shopTypeName);
    const count = await db.count("shopTypeList",whereObj);
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1) pageSum = 1;
    if(pageIndex>pageSum) pageIndex = pageSum;
    if(pageIndex < 1) pageIndex = 1;
    const shopTypeList = await db.find("shopTypeList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        limit,
        skip:(pageIndex - 1) * limit
    })
    res.json({
        ok:1,
        shopTypeList,
        pageSum,
        pageIndex
    })
}
module.exports.AllShopTypeList = async function (req,res) {
    const shopTypeList = await db.find("shopTypeList",{
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        shopTypeList
    })
}
module.exports.getShopTypeById = async function (req,res) {
    const info = await db.findOneById("shopTypeList",req.query.shopTypeId);
    res.json({
        ok:1,
        info
    })
}
module.exports.putShopTypeList = async function (req,res) {
    const {ok,params} = await upPic(req,"shopTypePic");
    console.log(ok,params);
    if(ok === -1){
        tools.json(res);
    }else{
        const $set = {
            shopTypeName:params.shopTypeName,
            createTime:Date.now()
        }
        if(ok === 1){
            $set.shopTypePic = params.shopTypePic
        }

        await db.updateOneById("shopTypeList",params.shopTypeId,{$set});
        res.json({
            ok:1,
            msg:"成功"
        })
    }
    // if(results.ok === 1 || results.ok){
    //     // await  db.insertOne("shopTypeList",{
    //     //     shopTypeName:results.params.shopTypeName,
    //     //     shopTypePic : results.params.shopTypePic,
    //     //     createTime:Date.now()
    //     // })
    //     // tools.json(res,1,"添加成功")
    // }else{
    //     tools.json(res);
    // }
}