const proxy =require('http-proxy-middleware')
module.exports=function(app){
// 
////tarBer图片https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50 
    app.use('/img',proxy({
        target:'https://image.hongbeibang.com',
        changeOrigin:true,
        pathRewrite:{
            "^/img":""
       }
    }))
}
