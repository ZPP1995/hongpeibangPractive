import React, { Component } from 'react'
import "./serchRecipe.css"
import { bindActionCreators } from "redux"
import { connect} from "react-redux"
import SearchList from "../../components/serchRecipe/searchList"
import NoSearchList from "../../components/serchRecipe/noSearchList"
import getMoreRecipeActionCreator from "../../store/actionCreator/getMoreRecipe"

 class SearchRecipe extends Component {
    constructor(){
        super()
        this.state={
            list:["综合排序","做过最多","达人食谱"],
            index:0,
            keyWord:"",
            pageIndex:5
        }
    }
    render() {
        return (
            <div className="serchRecipe">
                {
                    //搜索头
                    <div className="headerCon">
                        <div className="headerCon1">
                            <span className="headerCon2" onClick={() => (this.props.history.go(-1))}>
                                <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /></span>
                            <div className="headerCon5">
                                <span className="headerCon6"><img src="https://image.hongbeibang.com/Fi6tDLktzhDiUQoin--ZelAIFSsr?94X94&imageView2/1/w/80/h/80" alt="" /></span>
                                <input defaultValue={this.props.match.params.keyWord} ></input>
                            </div>
                            <div className="headerCon33">
                                <span className="headerCon3">食谱</span>
                                <span className="headerCon4"> <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" /></span>
                            </div>
                        </div>


                        <div className="searchListCon1">
                            <ul className="searchListCon2">
                            {
                                this.state.list.map((v,i)=>(
                                    <li key={i} className={this.state.index===i?"Active":"noActive"} onClick={this.getListHandle.bind(this,i)}>{v}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                }
                {
                    //搜索结果列表
                 <SearchList ></SearchList> 
                 // <NoSearchList></NoSearchList>
                }
            </div>
        )
    }
    getInfoInit( type="" ){
        const pageIndex = this.state.pageIndex;
        const keyword = this.props.match.params.keyWord;
        this.props.getMoreRecipe.call(this,type,keyword,pageIndex)
    }

    componentDidMount(){ 
        this.getInfoInit("")
     }
    getListHandle(i){
        this.setState({
            index:i
        })
        if(i===0){
            this.getInfoInit("")
        }
        if(i===1){
            this.getInfoInit("dishNum")
        }
        if(i===2){
            this.getInfoInit("master")
        }   
    }

    
}

function mapStateToProps(state) {
    return {
        data:state.getMoreRecipe.data
    }
}


export default connect(mapStateToProps,dispatch=>bindActionCreators(getMoreRecipeActionCreator,dispatch) )(SearchRecipe)  
