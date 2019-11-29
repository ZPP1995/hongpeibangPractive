module.exports = {
    devServer:{
        open:true,
        port:8082,
        host:"127.0.0.1",
        // 设置代理服务器
        proxy:{
            // http://127.0.0.1:8082/ele/login
            // 规则：以/ele 开头的地址会使用该规则
            "/ele":{
                target:"http://127.0.0.1",// 设置你要访问的服务器 http://127.0.0.1/ele/login
                changeOrigin:true,// 开启代理
                pathRewrite:{
                    // 将 以/ele开头的这一部分给去除掉。（用空字符替换/ele）http://127.0.0.1/login
                    "^/ele":""
                }
            }
        }
    }
}