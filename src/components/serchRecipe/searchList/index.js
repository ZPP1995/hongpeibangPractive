import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import "./searchList.css"
import getMoreRecipeActionCreator from "../../../store/actionCreator/getMoreRecipe"
class SearcShList extends Component {

    render() {
        console.log(this.props.getMoreRecip, 11);
        return (
            <div className="searchListCon">
                {
                    this.props.getMoreRecip.map((v, i) => (
                        <div className="searchListCon3" key={i}>
                            <div className="searchListCon4">
                                <div className="searchListCon5"><img src={"/img/"+v.coverImage.substring(29)} alt="" />
                                    <div className="searchListCon6">视频</div>
                                </div>
                            </div>
                            <div className="searchListConRight">
                                <div className="searchListCon7">{v.title}</div>
                                <div className="searchListCon8">1000+人学过</div>
                                <div className="searchListCon9">
                                    <span className="searchListCon10">视频学习更简单</span>
                                </div>
                                <div className="searchListCon11"><span>不再显示</span></div>
                            </div>
                        </div>

                    ))
                }

            </div>
        )
    }
    componentDidMount() {
        this.props.getMoreRecipe.call(this)
    }

}

function mapStateToProps(state) {
    return {
        getMoreRecip: state.getMoreRecipe.data
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(getMoreRecipeActionCreator, dispatch))(withRouter(SearcShList))