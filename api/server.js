const express = require("express");
const db = require("./module/db");
const app = express();
app.get("/test",function (req,res) {
    res.json({
        ok:2
    })
})
app.get("/goodsList",async function (req,res) {
    const goodsList = await db.find("goodsList",{
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:3,
        goodsList
    })
})
app.get("/goodsInfo/:goodsId",async function (req,res) {
    const goodsId = req.params.goodsId;
    const goodsInfo = await db.findOneById("goodsList",goodsId);
    res.json({
        ok:1,
        goodsInfo
    })
})
app.get("/joinCar",async function (req,res) {
    /*思路：
    *   1、接收参数 userName goodsId
    *   2、查看库存是否充足
    *       1、不充足
    *           返回，库存不足
    *       2、充足
    *           1、库存减1
    *           2、查看该用户购物车内是否有该商品
    *               1、有
    *                   购买数量加1
    *               2、无*
    *                   插入一条记录*/
    setTimeout(async ()=>{
        const {userName,goodsId} = req.query;
        const goodsInfo = await db.findOneById("goodsList",goodsId);
        if(goodsInfo.goodsStore>0){
            //库存减1
            await db.updateOneById("goodsList",goodsId,{$inc:{goodsStore:-1}});
            const carInfo = await db.findOne("carList",{userName,goodsId:goodsInfo._id});
            if(carInfo){
                // 购物车数量加1
                await db.updateOne("carList",{_id:carInfo._id},{$inc:{buyNum:1}});
                res.json({
                    ok:1,
                    msg:"加入购物车成功"
                })
            }else{
                await db.insertOne("carList",{
                    goodsId:goodsInfo._id,
                    buyNum:1,
                    goodsName:goodsInfo.goodsName,
                    goodsPrice:goodsInfo.goodsPrice,
                    userName
                })
                res.json({
                    ok:1,
                    msg:"加入购物车成功"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"库存不足"
            })
        }
    },1000)

})
app.get("/carList",async function (req,res) {
    const userName = req.query.userName;
    const carList = await db.find("carList",{
        whereObj:{
            userName
        }
    });
    res.json({
        ok:1,
        carList
    })
})
app.post("/register",async function(req,res){
    // console.log(req.query)
    // res.json({
    //     ok:1
    // })
    const phoneNumber = req.query.phoneNumber
    console.log(phoneNumber)
    const phone1 = await db.find("phoneList",{
        whereObj:{
            phoneNumber
        }
    })
    if(phone1){
        res.json({
            ok:1
        })
    }else{
        await db.insertOne("phoneList",{
            whereObj:{
                phone
            }
        })
        res.json({
            ok:2,
            phoneList
        })
    }
})


app.listen(80,function () {
    console.log("success");
})