import React, { Component } from 'react'
import "./styled.css"

import HotSearch from "../../components/search/hotSearch"
import LastestSearch from "../../components/search/lastSearch"

export default  class QuestionAndAnswer extends Component {
    constructor(props) {
        super(props)
       this.state={
       }
    }
    render() {
        return (

            <div className={"hongpei"}>
                <div className={"hongpei1"}>
                    {
                        //搜索头
                    }
                    <div className="hongpei2">
                        <div className="hongpei3" onClick={() => (this.props.history.go(-1))}> <img src={"/img/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"} alt="" /></div>
                        <div className="hongpei4"><input placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" ref={"keyword"} /></div>
                        <div className="hongpei5" onClick={this.searchKeyWord.bind(this)}>搜索</div>
                    </div>
                    {
                        //热门搜索
                     <HotSearch></HotSearch>
                    }
                    {
                        //最近搜索
                        <LastestSearch></LastestSearch>
                    }


                    
                </div>
            </div>
        )
    }
    
    searchKeyWord() {
        // //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
        // this.state.nearSearchList.push(this.refs.keyword.value);
        // this.setState({
        //     nearSearchList:this.state.nearSearchList
        // })  
        // localStorage.nearSearchList= JSON.stringify(this.state.nearSearchList)
        // this.refs.keyword.value=""


    }
}

