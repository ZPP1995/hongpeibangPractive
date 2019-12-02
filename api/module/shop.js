const mongodb = require("mongodb");
const {upPic} = require("./upPic");
const tools = require("./tools");
const db = require("./db");
module.exports.addShopList = async function (req,res) {
    const {ok,params} = await upPic(req,"shopPic");
    if(ok === 1){
        // console.log(results.params);
        // 根据店铺类别ID,获得店铺类别信息。
        const shopTypeList = await db.findOneById("shopTypeList",params.shopTypeId);
        await  db.insertOne("shopList",{
            shopName:params.shopName,
            shopTypeId:shopTypeList._id,
            shopTypeName:shopTypeList.shopTypeName,
            shopPic:params.shopPic,
            isTop:params.isTop==="true",
            createTime:Date.now()
        })
        tools.json(res,1,"添加成功")
    }else{
        tools.json(res);
    }
};
module.exports.getShopList = async function (req,res) {
    let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    const limit = 2;
    const whereObj = {};
    if(req.query.shopTypeId.length > 0){
        whereObj.shopTypeId = mongodb.ObjectId(req.query.shopTypeId);
    }
    const count = await db.count("shopList",whereObj);
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1) pageSum = 1;
    if(pageIndex>pageSum) pageIndex = pageSum;
    if(pageIndex < 1) pageIndex = 1;
    const shopList = await db.find("shopList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        limit,
        skip:(pageIndex - 1) * limit
    })
    res.json({
        ok:1,
        shopList,
        pageSum,
        pageIndex
    })
};
module.exports.shopListByTypeId = async function (req,res) {
    const shopList = await db.find("shopList",{
        whereObj:{
            shopTypeId:mongodb.ObjectId(req.params.shopTypeId)
        },
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        shopList
    })
};
