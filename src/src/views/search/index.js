import React, { Component } from 'react'
import "./styled.css"

export default class QuestionAndAnswer extends Component {
    render() {
        return (
            <div>
                <div className={"hongpei"}>
                    <div className={"hongpei1"}>
                                <div className={"hongpei2"}>
                                    <span  className={"hongpei3"} onClick={()=>{this.props.history.go(-1)}}>
                                        <img className={"hongpei4"} src={"/img/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"} alt=""/>  
                                    </span>
                                    <span className={"hongpei5"}>搜索</span>
                                    <div className={"hongpei6"}>
                                        <div className={"hongpei7"}>
                                            <div className={"hongpei8"}>
                                            <input type="text" className={"hongpei9"} placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"hongpei10"}></div>   
                                </div>

                                <div className={"hongpei11"}>
                                    <div className={"hongpei12"}>热门搜索</div>
                                </div>

                                <div className={"hongpei13"}>
                                    <div className={"hongpei14"}>🔥千层酥</div>
                                    <div className={"hongpei14"}>🔥奶油蛋糕</div>
                                    <div className={"hongpei14"}>🔥曲奇</div>
                                    <div className={"hongpei14"}>🔥戚风蛋糕</div>
                                    <div className={"hongpei14"}>🔥古早味蛋糕</div>
                                    <div className={"hongpei14"}>软欧包</div>
                                    <div className={"hongpei14"}>蛋糕卷</div>
                                    <div className={"hongpei14"}>溶豆</div>
                                    <div className={"hongpei14"}>雪花酥</div>
                                    <div className={"hongpei14"}>面包</div>
                                    <div className={"hongpei14"}>蛋黄酥</div>
                                    <div className={"hongpei14"}>土司</div>
                                    <div className={"hongpei14"}>牛轧糖</div>
                                    <div className={"hongpei14"}>蛋糕抹面</div>
                                    <div className={"hongpei14"}>肉松小贝</div>
                                    <div className={"hongpei14"}>太妃糖</div>
                                    <div className={"hongpei14"}>牛轧饼</div>
                                    <div className={"hongpei14"}>咸奶油蛋糕</div>
                                    <div className={"hongpei14"}>包子</div>
                                    <div className={"hongpei14"}>奶茶</div>
                                </div>

                                <div className={"hongpei15"}>
                                    <div className={"hongpei16"}>
                                        <img  className={"hongpei17"} src={"https://image.hongbeibang.com/FlNyAtoE7VQRWghfLMIzjymlNTI2?48X48&imageView2/1/w/38/h/38"} alt=""/>
                                    </div>
                                    <div className={"hongpei18"}>
                                        <div className={"hongpei19"}>最近搜索</div>
                                    </div>
                                    <div className={"hongpei20"}>
                                        <div className={"hongpei21"}>21</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
        )
    }
}