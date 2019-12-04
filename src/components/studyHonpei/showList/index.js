import React, { Component } from "react"
import "./showList.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
//引入getIndexByWeb  aaction
import getIndexAction from "../../../store/actionCreator/getIndexByWeb"
class ShowList extends Component {
    render() {
        return (
            <div className="showListBox1">
                {
                    this.props.getIndexList.slice(1).map((v, i) => (
                        <div className="showListBox2" key={i}>
                            <div className="showTitle">
                                <div className="showTitle2">
                                    <span className="showTitle3">{v.title}</span>
                                    <span className="showTitle4">查看更多</span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="showImgCon">
                                    <ul className="showImgCon2">
                                        {
                                            v.item.map((chld, n) => (
                                                <li className="showImgCon3" key={n}>
                                                    <div className="showImg">
                                                        <img className="showImg2" src={chld.image} alt="" />
                                                    </div>
                                                    <div className="studyPeple">{chld.buyNum / 1 > 1000 ? "1000+人在学" : chld.buyNum  }</div>
                                                    <div className="showdetail">{chld.shareTitle}</div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )

    }
    componentDidMount() {
        // 1、触发调用接口的异步action 函数getIndexByWeb
        this.props.getIndexByWeb.call(this)
    }
}


function mapStateToProps(state) {
    return {
        getIndexList: state.getIndex,
    }
}




export default connect(mapStateToProps, dispatch => bindActionCreators(getIndexAction, dispatch))(ShowList)

