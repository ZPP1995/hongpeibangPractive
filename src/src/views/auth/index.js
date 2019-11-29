import React, { Component } from 'react'
import "./auth.css"
import axios from 'axios'

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            num:"60"
        }
    }
    render() {
        return (
            <div>
                <div className={"zuihou"}>
                    <div className={"zuihou1"}>
                        <div>
                            <div>
                                <div className={"zuihou2"}>
                                    <span className={"zuihou3"} onClick={()=>{this.props.history.push("/register")}}>取消</span>
                                    <ul className={"zuihou4"}>手机验证</ul>
                                    <div className={"zuihou5"}></div>
                                </div>
                                
                                <div>
                                    <div className={"zuihou6"}>
                                        <div className={"zuihou7"}>
                                            <div className={"zuihou8"}>短信验证码已发送，请填写验证码</div>
                                            <div className={"zuihou9"}>{this.props.location.state.id}</div>
                                        </div>
                                        <div className={"zuihou10"} ref={"jishi"} onClick={this.addJishi.bind(this)}>重发验证码</div>
                                        <div className={"zuihou17"} ref={"jishi1"}>{this.state.num}秒以后重新获取</div>
                                        <div className={"zuihou11"}>
                                            <input className={"zuihou12"} type="text" ref={"duanxin"} placeholder="请输入短信验证码" defaultValue={this.props.location.state.code}></input>
                                        </div>
                                        <div className={"zuihou13"}>不少于6位</div>
                                        <div className={"zuihou14"}>
                                            <input className={"zuihou15"} type="password" ref={"shuru"} onKeyUp={this.addUp.bind(this)}  placeholder="设置密码" />
                                        </div>
                                        <div className={"zuihou16"} ref={"wancheng"} onClick={this.addWancheng.bind(this)}>完成</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"zuihou18"}>
                            <div className={"zuihou19"}></div>
                            <div className={"zuihou20"}>
                                <div className={"zuihou21"}>提示</div>
                                <div>
                                    <div className={"zuihou22"}>
                                        <p className={"zuihou23"}>注册成功</p>
                                    </div>
                                </div>
                                <div className={"zuihou24"}>
                                    <div className={"zuihou25"} >确定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    async addWancheng(){
        console.log(this.props.location.state.code)
        if(this.refs.shuru.value.length > 5){
            const data = await axios.get("/ll/zhuce",{
                params:{
                    mima:this.refs.shuru.value,
                    phoneNumber:this.props.location.state.phoneNumber 
                }
            })
            console.log(data)
        this.props.history.push("/loginPhone")
        }
    }
    addUp(){
        if(this.refs.shuru.value.length > 5 && this.refs.duanxin.value.length ===  6){
            console.log(1)
            this.refs.wancheng.style.opacity = 1
        }else{
            this.refs.wancheng.style.opacity = 0.5
        }
    }
    async addJishi(){      
        const data = await axios.get("/ll/send")
        console.log(data)
        this.refs.duanxin.value = data.data.code
        this.refs.jishi.style.display = "none"
        this.refs.jishi1.style.display = "block"
        var num1=59
       let s = setInterval( ()=>{
            this.setState({
                num:(num1--)
            },()=>{
                if(num1 === 0){
                    clearInterval(s)
                    this.refs.jishi.style.display = "block"
                    this.refs.jishi1.style.display = "none"
                }
            })          
        }, 1000);
        console.log(num1,"oooo")
    }
}
