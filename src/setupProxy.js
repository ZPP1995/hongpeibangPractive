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
// 推荐：https://api.hongbeibang.com/recommend/getRandContent?_t=1574924570567&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ&type=3&pageSize=10
    app.use('/rec',proxy({
        target:'https://api.hongbeibang.com',
        changeOrigin:true,
        pathRewrite:{
            "^/rec":""
       }
    }))
}
