import React from "react";
import axios from 'axios'
// import {
//     connect
// } from 'react-redux'
import {
    NavLink,
    Route
} from "react-router-dom"
import './loginPhone.css'

export default class loginPhone extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         List:"none"
    //     }
    // }
    render(){
        return (
            <div>
                <div className={"title"}>
                    <span className={"quxiao"} onClick={()=>{this.props.history.push("/")}}>取消</span>
                    <div className={"denglu111"}>登录</div>
                </div>
                <div className={"kong"}></div>
                <div className={"kon1"}></div>

                <div className={"phone"}>
                    <div className={"phone1"}>
                        <img className={"img-1"} src={"https://image.hongbeibang.com/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50"} />
                    </div>
                    <div className={"phone2"}>
                        <span className={"num"}>+86</span>
                        <div className={"sanjiao"}>
                            <img className={"img-2"} src={"https://image.hongbeibang.com/FvouzJLfDehM1NfR7u-51rBxkxxu?20X20&imageView2/1/w/20/h/20"} />
                        </div>
                    </div>
                    <div className={"phone3"}>
                    <input className={"input1"}  type="text" placeholder="输入手机账号" ref={"zhanghao"}></input>
                    </div>
                </div>

                <div className={"mima"}>
                    <div className={"mima1"}>
                        <img className={"img-3"} src={"https://image.hongbeibang.com/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50"} />
                    </div>
                    <div className={"mima2"}>
                        <input className={"input2"}  type="password" placeholder="输入密码"/>
                    </div>
                </div>

                <div className={"wangji"}>忘记密码？</div>

                <div className={"dl"} onClick={this.login.bind(this)}>登录</div>

                <div className={"disanfang"}>第三方帐号登录</div>

                <div className={"tubiao"}>
                    <div className={"wei"}>
                        <img className={"img-4"} src={"https://image.hongbeibang.com/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140"} />
                    </div>
                    <div className={"qq"}>
                        <img className={"img-5"} src={"https://image.hongbeibang.com/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140"} />
                    </div>
                </div>

                <div className={"kuaizhuce"} onClick={()=>{this.props.history.push("/register")}}>快速注册</div>

                <div className={"tishi"} ref={"shi"}>
                    <div className={"tishi2"}></div>
                    <div className={"tishi1"}>
                        <div className={"tishi3"}>提示</div>
                        <div className={"tishi4"}>
                            <div className={"tishi5"}>
                                <p className={"tishi6"}>请输入密码</p>
                            </div>
                        </div>
                        <div className={"tishi7"}>
                            <div className={"tishi8"} onClick={this.addHandler.bind(this)}>确定</div>
                        </div>
                    </div>
                </div>

                <div className={"tishi9"} ref={"ti"}>
                    <div className={"tishi10"}></div>
                    <div className={"tishi11"}>
                        <div className={"tishi12"}>提示</div>
                        <div className={"tishi13"}>
                            <div className={"tishi14"}>
                                <p className={"tishi15"}>请正确输入11位手机号码</p>
                            </div>
                        </div>
                        <div className={"tishi16"}>
                            <div className={"tishi17"} onClick={this.Handler.bind(this)}>确定</div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }

    addHandler(){
        console.log(1)
        this.refs.shi.style.display = "none"
    }
    Handler(){
        this.refs.ti.style.display = "none"
    }
    login(){
        if(this.refs.zhanghao.value.length === 11){
            console.log(111)
            this.refs.shi.style.display = "block"
        }else{
            console.log(222)
            this.refs.ti.style.display = "block"
        }
    }
   componentDidMount(){
    
       
   }
  
}
// function mapStateToProps(state) {
//     return {

//     }
// }
// function mapDispatchToProps(dispatch){
//     return {
//         addHadnler(){
//             this.refs.tishi.style.display = "none"
//         },
//         login(){
//             this.refs.tishi.style.display = "block"
//         }
//     }
// }

//  connect(mapStateToProps,mapDispatchToProps)(loginPhone)