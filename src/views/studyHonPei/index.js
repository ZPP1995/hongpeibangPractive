import React, { Component } from 'react'
import "./styled.css"
import RecomendList from "../../components/studyHonpei/recomendList"
import ShowList from "../../components/studyHonpei/showList"
class StudyHopei extends Component {
    constructor() {
        super()
        this.classfyListImg = [
            { imgName: "/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80", title: "技巧百科", path: '/baike' },
            { imgName: "/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80", title: "视频学堂", path: '/university' },
            { imgName: "/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80", title: "新手教程", path: '/lessonSeries' },
            { imgName: "/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80", title: "食谱分类", path: "/classify" },
        ]
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
                    <RecomendList></RecomendList>
                    <ShowList></ShowList>
            </div>
        )
    }

}




export default StudyHopei;
