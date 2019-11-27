import React from "react";
import  './register.css'
import {
    NavLink,
    Route
} from "react-router-dom"

export default class Register extends React.Component{
    render(){
        return (
            <div className={"wai"}>
                <div  className={"wai1"}>
                    <div>
                        <div className={"yanzheng"}>
                            <span className={"yanzheng1"} onClick={()=>{this.props.history.push("/")}}>取消</span>
                            <ul className={"yanzheng3"}>手机验证</ul>
                            <div className={"yanzheng4"}></div>
                        </div>
                        <div className={"yanzheng5"}>
                            <div className={"yanzheng6"}>请确保你的手机畅通，能接受验证码信息</div>
                            <div className={"yanzheng7"}>
                                <span className={"yanzheng8"}>+86</span>
                                <div className={"yanzheng9"}>
                                    <img className={"yanzheng10"} src={"https://image.hongbeibang.com/FvouzJLfDehM1NfR7u-51rBxkxxu?20X20&imageView2/1/w/20/h/20"}></img>
                                </div>
                            </div>
                            <div className="yanzheng11">
                                <input className={"yanzheng12"} placeholder="请输入手机号" type="text"></input>
                            </div>
                            <div className={"yanzheng13"}>
                                <img className={"yanzheng14"} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAMAAACd646MAAAAP1BMVEUAAAAQQBuDs45nl3KEtI9EdE8nVzKOvpkJORQpWTSCso0JORSOvpkqWjWayqVPf1qn17KSwp07a0ax4byl1bBpcQyiAAAAAXRSTlMAQObYZgAAAYRJREFUeJzsl/FuhCAMxmlMLiFGzrPv/66LIliQagu4ZMt9/whM+bVfOWDmq692AQDEzkf2zVTB8FoZHxFlmpSUbfaIeSaTaBXx7DEdDABDqjQ+AvGMgBnHOkqymshg8dmQSY4BsKFhssa+KKo5pArWWpMXJoE0gcKM1lxA2tIxBhLzSAPySBoEqW3xh0leYL5TUpIEkn4xEdAXyb96fALZvKf51iC0uRCzuNgl9t0w8h9EaRaS5wUjSXnwD2SCLu4Hx4PZL7LRYVgpDhGDR7hbArvfZ9BRuWw5MruUz8Q5h6GPiOf1Aryir3BXIkfaePWiIQcb6V0VR6N0SUFxz2lmxE0/9aXDPpNijko9dkzTxUAafSEZkDtVFXrfU5oOlY3xvqNsySz8n2cJRRLKsrCUeZZQRGrM5D+r6w2VY4hvqC3RiBmV9+VVr5Zobk+PnfGSU84MlFJox2opGicCw2opNU6oGRWZ/Em50uDQmeEKFH8f7EkpDXKMX/jfn7sd/QQAAP//mDEGEnSysesAAAAASUVORK5CYII="}></img>
                                <div className={"yanzheng15"}>换一张</div>
                            </div>
                            <div className={"yanzheng16"}>
                            <input className={"yanzheng17"} type="text" placeholder="请输入验证码" onKeyUp={this.addKey.bind(this)} ref={"yanzhengma"} />
                            </div>
                        </div>
                        <div className={"yanzheng18"} ref={"xiayi"} onClick={this.addNext.bind(this)}>下一步</div>
                    </div>    
                </div>

                <div className={"yanzheng19"} ref={"tishi"}>
                    <div className={"yanzheng20"}></div>
                    <div className={"yanzheng21"}>
                        <div className={"yanzheng22"}>提示</div>
                        <div>
                            <div className={"yanzheng23"}>
                                <p className={"yanzheng24"}>所输入号码不正确，请输入11位手机号码</p>
                            </div>
                        </div>
                        <div className={"yanzheng25"}>
                            <div className={"yanzheng26"} onClick={this.addXiao.bind(this)}>确定</div>
                        </div>
                    </div>
                </div>

                <div className={"yanzheng27"} ref={"tishi1"}>
                    <div className={"yanzheng28"}></div>
                    <div className={"yanzheng29"}>
                        <div className={"yanzheng30"}>提示</div>
                        <div>
                            <div className={"yanzheng31"}>
                                <p className={"yanzheng32"}>验证码错误！请重试!</p>
                            </div>
                        </div>
                        <div className={"yanzheng33"}>
                            <div className={"yanzheng34"} >确定</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
   
    addXiao(){
        this.refs.tishi.style.display = "none"
    }
    addKey(e){
        if(e.target.value.length === 4 ){
           this.refs.xiayi.style.opacity = 1
           
        }else{
            this.refs.xiayi.style.opacity = 0.5 
            this.refs.tishi.style.display = "none"
        }
        
    }
    addNext(){
        if(this.refs.yanzhengma.value.length === 4 ){
            this.refs.tishi.style.display = "block"
         }else{
             this.refs.tishi.style.display = "none"
         }
        
    }
        
}
   
