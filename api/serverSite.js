const express = require("express");
const tools = require("./module/tools");
const db = require("./module/db");
const bodyParser = require("body-parser");
const mongdb = require("mongodb")
const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname+"/upload"));
// app.use(express.static(__dirname+"/upload"))
// send?phoneId=xxxx
app.get("/send",async function (req,res) {
    /*
    1、接收参数phoneId
    2、判断之前是否发送过短信
        1、发送过
            判断上次发送的时间是否到期。
            1、到期了
                发送，更新该条记录的短信验证码以及发送时间。
            2、未到期
                返回未到期异常
        2、未发送
            直接发送
    */
    const phoneId = req.query.phoneNumber;
    // const mima = req.query.mima
    // console.log(0,mima)
    const code = tools.getRandom(100000,999999);
    // 根据手机号查找之前是否发送过短信
    const info = await db.findOne("phoneList",{phoneId})
    if(info){
        //测试需要   将时间缩短为1s可以发送一次！！！！！！！！！
        if(Date.now()-info.sendTime>1000){
            await db.updateOne("phoneList",{phoneId},{
                $set:{
                    code,
                    sendTime:Date.now()
                }
            })
            res.json({
                ok:1,
                code,
                msg:"发送成功"
            })
        }else{
            tools.json(res,-1,"时间未过期还差"+Number.parseInt((1000-Date.now()+info.sendTime)/1000)+"秒")
        }
    }else{
        // console.log(1,mima)
        await db.insertOne("phoneList",{
            phoneId,
            code,
            // mima,
            sendTime:Date.now()
        })    
        res.json({
            ok:1,
            // mima,
            code,
            msg:"发送成功"
        })
    }
});
app.get("/zhuce",async function(req,res){
    const mima = req.query.mima
    const phoneId = req.query.phoneNumber;

    console.log(mima)
    const info = await db.insertOne("phone",{
        mima,
        phoneId
    })
  
    if(!info){
        res.json({
            ok:1,
            mima,
            phoneId,       
            msg:"成功"
        }) 
    }else{
        res.json({
            ok:2,
            msg:"重复",
            mima,
            phoneId      

        })
    }
})

app.get("/denglu",async function(req,res){
    const phoneId = req.query.zhanghao
    const mima = req.query.password
    const info = await db.findOne("phone",{
        phoneId,
        mima
    })
    if(info){
        res.json({
            ok:1,
            mima,
            phoneId,       
            msg:"成功"
        }) 
    }else{
        res.json({
            ok:2,
            msg:"重复",
            mima,
            phoneId      
        })
    }


})
app.post("/login",async function (req,res) {
    /*
    * 1、接收参数  phoneId code
    * 2、根据参数去短信集合当中进行查找
    *   1、找到数据
    *         1、判断用户是否存在
    *            1、存在
    *               更新最后登陆时间
    *            2、不存在
    *               创建一个用户。
    *   2、未找到数据
    *       请输入正确的验证码*/
    //坑1：code是字符串   在数据库中是数字  要转类型
    const phoneId = req.body.phoneId;
    const code = req.body.code - 0  //转为数字类型
    // console.log(1111111,code,phoneId,req.body)
    const info = await db.findOne("phoneList",{
        phoneId,
        code
        // 判断发送时间是否有效
    })
    if(info){
        // Date,now()-info.sendTime<1000*60*30  //有效期30分钟
        if(Date.now()-info.sendTime>1000*60*30){
            res.json({ok:-1,msg:"验证码已过期"})
        }
        else{
            const user = await db.findOne("userList",{
                phoneId
            })
            const token =  await  tools.enCode({phoneId})
            if(user){
                await db.updateOne("userList",{phoneId},{$set:{lastTime:Date.now()}});
                res.json({
                    ok:1,
                    token,
                    msg:"登陆成功"
                })
            }else{
                await db.insertOne("userList",{phoneId,regTime:Date.now(),gold:1000,lastTime:Date.now()});
                res.json({
                    ok:1,
                    token,
                    msg:"登陆成功"
                })
            }
        }
    }
    else{
        tools.json(res,-1,"请输入正确的验证码")
    }
})
//模糊搜索商店列表
//验证token
app.all("*",function (req,res,next) {
    const {ok,info} = tools.deCode(req.headers.authorization);
    tokenInfo = info;
    if(ok !== 1){
        res.json({
            ok:-2// -2 代表token异常
        })
    }else {
        next();
    }
})
app.get("/search",async function (req,res) {
    const keyword = req.query.keyword;
    const shopList = await db.find("shopList",{
        whereObj:{
            shopName:new RegExp(keyword)
        },
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        shopList
    })
});
//获得商铺类型  列表
app.get("/shopTypeList",async function (req,res) {
    const limit = (req.query.limit || 60)/1;
    const results = await db.find("shopTypeList",{
        sortObj:{
            createTime:-1
        },
        limit
    });
    res.json({
        ok:1,
        shopTypeList:tools.changeArr(results)
    })

})
//     获得商铺列表   推荐商铺  分页
app.get("/shopList",async function (req,res) {
    //加搜索条件
    const whereObj = {isTop:true}
    let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    const limit = 7;
    const count = await db.count("shopList",whereObj);
    pageSum = Math.ceil(count/limit)

    if(pageSum < 1) pageSum = 1;
    if(pageIndex>pageSum) pageIndex = pageSum;
    if(pageIndex < 1) pageIndex = 1;

    const shopList = await db.find("shopList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        limit,
        skip:(pageIndex-1)*limit
    })
    res.json({
        ok:1,
        shopList,
        pageIndex,
        pageSum
    })
})
// app.get("/shopList",async function (req,res) {
//     const limit = (req.query.limit || 60)/1;
//     const results = await db.find("shopList",{
//         sortObj:{
//             createTime:-1
//         },
//         limit
//     });
//     res.json({
//         ok:1,
//         shopList:results
//     })
// })
//   获得商铺列表 通过商铺类型id
app.get("/shopListById",async function (req,res) {
    const shopList = await db.find('shopList',{
        whereObj:{
            shopTypeId:mongdb.ObjectId(req.query.shopTypeId)
        },
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,shopList
    })
})
//  获得商品类型列表  通过商铺id
app.get("/goodsTypeListById",async function (req,res) {
        // console.log(1111,req.query.shopId)
    const goodsTypeList = await db.find('goodsTypeList',{
        whereObj:{
            shopId:mongdb.ObjectId(req.query.shopId)
        },
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,goodsTypeList
    })
})
//      获得商品列表   通过商品类别id
app.get("/goodsList",async function (req,res) {
    const goodsList = await db.find('goodsList',{
        whereObj:{
            goodsTypeId:mongdb.ObjectId(req.query.goodsTypeId)
        },
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,goodsList
    })
})
app.listen(8087,function () {
    console.log("success");
})