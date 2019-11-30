import React, { Component } from 'react'
import './Login.css'
export default class index extends Component {
    render() {
        return (
            <div>
                <img className="img1" onClick={()=>{this.props.history.push("/")}} src="https://image.hongbeibang.com/FlqyNFosCk9hhyBMoPkej9xbh_Yf?imageView2/1/w/50/h/50" alt=""/>
                <div className={"login"}>
                    <p>登录</p>
                </div>
                <img className={"img2"} src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" alt=""/> 
                <div className={"denglu"}>
                    <div className={"weixin"}>使用微信登录</div>
                </div>
                <div className={"qita"} onClick={()=>{this.props.history.push("/loginPhone")}}>其他方式登录</div>
                <div className={"qita1"}>
                    <span className={"tongyi"}>登录即代表阅读并同意</span>
                    <span className={"fuwu"} onClick={()=>{this.props.history.push("/notice/10001")}}>服务条款</span>
                </div>
            </div>
        )
    }
}
