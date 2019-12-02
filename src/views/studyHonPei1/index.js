import React, { Component } from 'react'
import "./styled.css"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import recomendActionCreator from "../../store/actionCreator/recomend"
class StudyHopei extends Component {
  constructor() {
    super()
    this.classfyListImg = [
      { imgName: "/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80", title: "技巧百科", path: '/baike' },
      { imgName: "/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80", title: "视频学堂", path: '/university' },
      { imgName: "/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80", title: "新手教程", path: '/lessonSeries' },
      { imgName: "/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80", title: "食谱分类", path: "/classify" },
    ]
    this.state = {}
  }
  render() {
    return (
      <div className={"shipu"}>
        <p className={"shipu2"}>烘焙帮，是佛山市烘焙帮信息技术有限公司开发的一款面向家庭烘焙爱好者的App。主要为烘焙爱好者提供烘焙指导，烘焙学习、交流、展示等服务。通过建立运营团队和授予粉丝副帮主、长老、堂主、香主等头衔发动粉丝自行管理等办法，解答粉丝在烘焙中遇到的各种问题，发起：“越烘焙、越优雅”“堂主帮帮秀”“烘焙之星”“烘焙猜猜猜”等系列活动，激起粉丝对烘焙的热爱，提高其烘焙技能。</p>
        <div className={"shipu3"}>
          <span className={"shipu4"}>
            <img className={"shipu5"} src={"/img/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48"} alt=""></img>
          </span>
          <span className={"shipu6"}>
            <img className={"shipu7"} src={"/img/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"} alt=""></img>
            <div className={"shipu8"}>2</div>
          </span>
          <div className={"shipu9"}>
            <div className={"shipu10"} onClick={() => {
              this.props.history.push("/search")
            }}>
              <span className={"shipu11"}>
                <img className={"shipu12"} src={"/img/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42"} alt="" />
              </span>
              <span className={"shipu13"}>搜索食谱/食材，烘焙/家常菜一应俱全</span>
            </div>
          </div>
        </div>
        <div className={"shipu14"}>
          <div className={"shipu15"}>
            {
              this.classfyListImg.map((v, i) => (
                <div className={"shipu16"} key={i} onClick={() => { this.props.history.push({ pathname: v.path }) }}>
                  <div className={"shipu17"}>
                    <img className={"shipu18"} src={"/img" + v.imgName} alt="" />
                  </div>
                  <div className={"shipu19"}>{v.title}</div>
                </div>
              ))
            }
          </div>
        </div>

        {
          //推荐课程
          <div className="tuijian">
            <div className="tuijiantitle">
              <p className="tuijiantitle1">推荐课程</p>
            </div>
            <div className="tuijianD">
              <ul className="tuijianDa">
                {
                  //https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50 
                  this.props.recommendList.map((v) => (
                    <li className="tuijiain_kuai" key={v.contentId}>
                      <div className="positongImg">
                        <img src={"/img/" + v.coverImage.substring(30)} alt="" />
                        <span>{v.buyNum / 1 > 1000 ? "1000+人在学" : ""}</span>
                      </div>
                      <p>{v.coverTitle}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

        }
        {
          //零食伴手礼
          <div className="tuijian">
            <div className="tuijiantitle">
              <p className="tuijiantitle1">零食伴手礼</p>
              <p className="findMore" >查看全部</p>
            </div>
            <div className="tuijianD">
              <ul className="tuijianDa">
                {
                  //https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50 
                  this.props.recommendList.map((v) => (
                    <li className="tuijiain_kuai" key={v.contentId}>
                      <div className="positongImg">
                        <img src={"/img/" + v.coverImage.substring(30)} alt="" />
                        <span>{v.buyNum / 1 > 1000 ? "1000+人在学" : ""}</span>
                      </div>
                      <p>{v.coverTitle}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

        }
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

// function mapDispatchToProps(dispatch) {
//   return {
//     // 获得推荐数据
//     getRecomend(dispatch) {
//       const _t = '1574910269042'
//       const csrfToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ'
//       const type = '3'
//       const pageSize = '10'
//       dispatch(() => {
//         this.$axios.get("/rec/recommend/getRandContent?_t=" + _t + "&csrfToken=" + csrfToken + "&type=" + type + "&pageSize=" + pageSize)
//           .then(({ data }) => {
//             console.log(data.data, 333);
//             dispatch({
//               type: "GET_RECOMEND",
//               payload:
//               {
//                 recommendList: data.data
//               }
//             })
//           })
//       })
//     }
//   }
// }
export default connect(mapStateToProps, dispatch => bindActionCreators(recomendActionCreator, dispatch))(StudyHopei);

