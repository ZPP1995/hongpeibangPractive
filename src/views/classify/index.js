import React, { Component } from 'react'
import './classify.css'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getRecommend, getClassify } from "../../store/actionCreator/getRecommend"
class Classify extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            flag: true
        }
    }
    render() {
        return (
            <div className="classifyCon">
                <div className="headerCon">
                    <div className="headerCon1">
                        <span className="headerCon2" onClick={() => (this.props.history.go(-1))}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /></span>
                        <div className="headerCon5">
                            <input placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" onClick={() => { this.props.history.push("/search") }}></input>
                        </div>
                    </div>
                </div>

                <div className="parent">
                    <div className="left">
                        <ul>
                            {
                                <li onClick={this.recommendGet.bind(this)}>{this.props.name}</li>   
                            }
                            {
                                this.props.classify.map((v, i) => (
                                    <li key={i} onClick={this.changeIndex.bind(this, i)}>{v.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="right">


                    {  //热门分类
                            <div style={{display: this.state.flag?"block":"none"}}>
                                <div className="titleHot"> <span>{this.props.name}</span></div>
                                <div className="listCon">

                                    <ul>
                                    {
                                    this.props.classifys.map((v, n) => (
                                        <li key={n}>
                                            <div className="imgas"><img src={v.image} alt="" /></div>
                                            <div className="titleClass"><span>{v.name}</span></div>
                                        </li> 
                                        ))
                                  
                                    } 
                                    </ul>
                                </div>
                            </div>
                       }
                    
                        {
                            // 所有分类
                            this.props.list.map((v, n) => (
                                <div key={n} style={{display: this.state.flag?"none":"block"}}>
                                    <div className="titleHot"> <span>{v.name}</span></div>
                                    <div className="listCon">
                                        <ul>
                                        
                                        {
                                        v.list.map((item,index)=>(
                                            <li key={index}>
                                                <div className="imgas"><img src={item.image} alt="" /></div>
                                                <div className="titleClass"><span>{item.name}</span></div>
                                            </li> 
                                        ))
                                        } 
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.actions.getRecommend.call(this)
        this.props.actions.getClassify.call(this)

    }

    recommendGet(){
        this.setState({
            flag:true
        })
        this.props.actions.getRecommend.call(this)
    }

    changeIndex(i) {
        this.setState({
            index: i
        })
        this.setState({
            flag:false
        })
        this.props.actions.getClassify.call(this, i)
    }
}



function mapStateToProps(state) {
    return {
        classifys: state.getRecommend.classifys,
        name: state.getRecommend.name,


        classify: state.getClassify.classify,
        list: state.getClassify.list,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getRecommend: bindActionCreators(getRecommend, dispatch),
            getClassify: bindActionCreators(getClassify, dispatch),
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Classify)