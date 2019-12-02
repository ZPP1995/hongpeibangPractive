import React from "react";
import axios from 'axios'
import './loginPhone.css'
export default class loginPhone extends React.Component{
    constructor(){
        super();
        this.state={
            user:""
        }
    }
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
                        <img className={"img-1"} src={"https://image.hongbeibang.com/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50"} alt=""/>
                    </div>
                    <div className={"phone2"}>
                        <span className={"num"}>+86</span>
                        <div className={"sanjiao"}>
                            <img className={"img-2"} src={"https://image.hongbeibang.com/FvouzJLfDehM1NfR7u-51rBxkxxu?20X20&imageView2/1/w/20/h/20"} alt=""/>
                        </div>
                    </div>
                    <div className={"phone3"}>
                    <input className={"input1"}  type="text" placeholder="输入手机账号" ref={"name"}></input>
                    </div>
                </div>

                <div className={"mima"}>
                    <div className={"mima1"}>
                        <img className={"img-3"} src={"https://image.hongbeibang.com/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50"} alt=""/>
                    </div>
                    <div className={"mima2"}>
                        <input className={"input2"} ref={"password"} type="password" placeholder="输入密码" onKeyUp={this.deng.bind(this)} />
                    </div>
                </div>

                <div className={"wangji"}>忘记密码？</div>

                <div className={"dl"} ref={"deng"} onClick={this.login.bind(this)} >登录</div>

                <div className={"disanfang"}>第三方帐号登录</div>

                <div className={"tubiao"}>
                    <div className={"wei"}>
                        <img className={"img-4"} src={"https://image.hongbeibang.com/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140"} alt=""/>
                    </div>
                    <div className={"qq"}>
                        <img className={"img-5"} src={"https://image.hongbeibang.com/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140"} alt=""/>
                    </div>
                </div>

                <div className={"kuaizhuce"} onClick={()=>{this.props.history.push("/register")}}>快速注册</div>

                <div className={"tishi"} ref={"shi"}>
                    <div className={"tishi2"}></div>
                    <div className={"tishi1"}>
                        <div className={"tishi3"}>提示</div>
                        <div className={"tishi4"}>
                            <div className={"tishi5"}>
                                <p className={"tishi6"}>密码budui</p>
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
                                <p className={"tishi15"}>手机号："{this.state.user}"未注册或者密码错误</p>
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
        this.refs.shi.style.display = "none"
    }
    Handler(){
        this.refs.ti.style.display = "none"
    }
    async login(){
        const data = await axios.get("/ll/denglu",{
            params:{
                zhanghao:this.refs.name.value,
                password:this.refs.password.value
            }
        })
        console.log(data)

        if(this.refs.name.value === data.phoneId && this.refs.password.value === data.mima){
           
            if(data.ok === 1){
                this.props.history.push("/")
            }
            // this.refs.shi.style.display = "block"
        }
        if(data.ok===2){
            this.getgeng()
            this.refs.ti.style.display = "block"           
        }
       
        
    }
    getgeng(){
        console.log(11)
        this.setState({
            user:this.refs.name.value
        })
    }
    deng(e){
        if(e.target.value.length>5 && this.refs.name.value.length === 11 ){
            console.log(111)
            this.refs.deng.style.opacity = 1
        }else{
            this.refs.deng.style.opacity = 0.5
        }
    }
    componentDidUpdate(){
        
    }
}

