import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import recomendActionCreator from "../../../store/actionCreator/recomend"
class RecomRmendList extends Component {
  render() {
    return (
      <div className="showListBox2" >
        <div className="showTitle">
          <div className="showTitle2">
            <span className="showTitle3">推荐课程</span>
          </div>
        </div>
        <div className="box">
          <div className="showImgCon">
            <ul className="showImgCon2">
              {
                this.props.recommendList.map((v, i) => (
                  <li className="showImgCon3" key={v.contentId}>
                    <div className="showImg">
                      <img className="showImg2" src={v.coverImage} alt="" />
                    </div>
                    <div className="studyPeple">{v.buyNum / 1 > 1000 ? "1000+人在学" : v.buyNum}</div>
                    <div className="showdetail">{v.coverTitle}</div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }
  componentDidMount() {
    //执行getRecomend （推荐课程）
    this.props.getRecomend.call(this)
  }
}

const mapStateToProps = ((state, props) => {
  return {
    recommendList: state.recomend.recommendList
  }
})

export default connect(mapStateToProps, dispatch => bindActionCreators(recomendActionCreator, dispatch))(RecomRmendList);

