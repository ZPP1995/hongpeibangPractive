const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const db = require("./module/db");
const tools = require("./module/tools");
const {upPic} = require("./module/upPic");
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.post("/login",async function (req,res) {
    const {adminName,passWord}  = req.body;
    console.log(adminName,passWord)
    const results = await db.findOne("adminList",{
        adminName,
        passWord:tools.enMd5(passWord)
    })
    if(results){
        // 插入管理员登陆日志记录
        await db.insertOne("adminLog",{
            adminId:results._id,
            adminName,
            loginTime:Date.now()
        })
        res.json({
            ok:1,
            adminName,
            token:tools.enCode({
                adminName
            }),
        })
    }else{
       tools.json(res,-1,"账号或密码错误")
    }
});
app.get("/adminLog",async function (req,res) {
    const {ok,info} = tools.deCode(req.headers.authorization);
    // console.log(status);
    if(ok !== 1){
        res.json({
            ok:-2// -2 代表token异常
        })
    }else{
        const adminName = info.adminName;
        let pageIndex = req.query.pageIndex/1;
        let pageSum = 1;
        const limit = 5;
        const count = await db.count("adminLog",{
            adminName
        });
        pageSum = Math.ceil(count/limit);
        if(pageSum < 1) pageSum = 1;
        if(pageIndex>pageSum) pageIndex = pageSum;
        if(pageIndex < 1) pageIndex = 1;

        const adminLog = await db.find("adminLog",{
            whereObj:{
                adminName
            },
            sortObj:{
                loginTime:-1
            },
            limit,
            skip:(pageIndex - 1) * limit
        })
        // setTimeout(()=>{
        res.json({
            ok:1,
            adminLog,
            pageSum,
            pageIndex
        })
        // },2000)
    }


});
/***********************店铺类别*********************************************************/
app.post("/shopTypeList",async function (req,res) {
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
})
app.get("/shopTypeList",async function (req,res) {
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
});
app.get("/AllShopTypeList",async function (req,res) {
    const shopTypeList = await db.find("shopTypeList",{
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        shopTypeList
    })
});
/***********************店铺******************************************************/
// 添加店铺
app.post("/shopList",async function (req,res) {
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
});
// 店铺列表 分页
app.get("/shopList",async function (req,res) {
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
});
app.listen(80,function () {
    console.log("success");
})