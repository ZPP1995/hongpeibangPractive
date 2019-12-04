import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
import searchActionCreator from "../../../store/actionCreator/search"
class HotSearch extends Component {

    render() {
        return (
            <div>
                <div className={"hongpei11"}>
                    <div className={"hongpei12"}>热门搜索</div>
                </div>
                <div className={"hongpei13"}>
                    { 
                        this.props.popularSearch.map((v, i) => (
                            <div className={"hongpei14"} key={i} 
                            keyword={v.keyword}
                            onClick={this.getkeyValue.bind(this)}>{v.keyword}</div>
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

    getkeyValue(e){
        const keyWord = e.target.textContent
        
        //子传父时  子组件（通过this.props.事件名(参数)的方式向父组件传递参数）
        this.props.getkeyHandle(keyWord)
        this.props.history.push({pathname:"/search/recipe/"+keyWord})
    }
}

function mapStateToProps(state) {
    console.log(state.search,123);
    return {
           // lastestSearch:state.search.lastestSearch,
            popularSearch:state.search.popularSearch  
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(withRouter(HotSearch))