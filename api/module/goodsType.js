const db = require("./db");
module.exports.addGoodsTypeList = async function (req,res) {
    // 根据店铺的ID，查找店铺的信息
    const {shopTypeId,shopTypeName,_id,shopName} = await db.findOneById("shopList",req.body.shopId)
    await db.insertOne("goodsTypeList",{
        shopTypeId,
        shopTypeName,
        shopId:_id,
        shopName,
        goodsTypeName:req.body.goodsTypeName,
        createTime:Date.now()
    })
    res.json({
        ok:1,
        msg:"插入成功"
    })
}