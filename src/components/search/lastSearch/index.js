import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import searchActionCreator from "../../../store/actionCreator/search"
class LastestSearch extends Component {
    render() {
        return (
           
            <div className={"hongpei15"}>
            <div className={"hongpei16"}>
                <img className={"hongpei17"} src={"https://image.hongbeibang.com/FlNyAtoE7VQRWghfLMIzjymlNTI2?48X48&imageView2/1/w/38/h/38"} alt="" />
            </div>
            <div className={"hongpei18"}>
                <div className={"hongpei19"}>最近搜索</div>
            </div>
            <div className={"hongpei20"}>
                {
                   this.props.lastestSearch.map((v, i) => (
                        <div className={"hongpei21"} key={i}>{v.keyword} </div>
                    ))
                }
            </div>
        </div>
           
        )
    }
    componentDidMount() { 
        // 1、触发调用接口的异步action 函数getSearch
        this.props.getSearch.call(this)
    } 
}

function mapStateToProps(state) {
    console.log(state.search,123);
    return {
            lastestSearch:state.search.lastestSearch,
            //popularSearch:state.search.popularSearch  
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(LastestSearch)