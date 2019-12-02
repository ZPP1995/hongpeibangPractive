import React, {Fragment} from 'react';
import './content.css';
import axios from "axios";

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            questionList: [],
            essenceList: [],
            hotList: [],
            index: 1
        }
    }

    render() {
        // console.log(this.state.questionList);
        return (
            <div>
                {/* 选项卡 */}
                <div className={"s-41d1d672"}>
                    <div className={"s-45b3ab02"} onClick={() => {
                        this.setState({
                            index: 0
                        })
                    }}>
                        <span>
                            精华问答
                            <div className={"s9b31ec9"}
                                 style={{display: this.state.index === 0 ? "block" : "none"}}></div>
                        </span>
                    </div>

                    <div className={"s-45b3ab02"} onClick={() => {
                        this.setState({
                            index: 1
                        })
                    }}>
                        <span>
                            最新问题
                            <div className={"s9b31ec9"}
                                 style={{display: this.state.index === 1 ? "block" : "none"}}></div>
                        </span>
                    </div>

                    <div className={"s-45b3ab02"} onClick={() => {
                        this.setState({
                            index: 2
                        })
                    }}>
                        <span>
                            最热问题
                            <div className={"s9b31ec9 active"}
                                 style={{display: this.state.index === 2 ? "block" : "none"}}></div>
                        </span>
                    </div>
                </div>
                {/* 渲染数据 */}
                <div className={"s7e642914"}
                     style={{display: this.state.index === 0 ? "block" : "none", color: "pink"}}>
                    {
                        this.state.essenceList.map(v => (
                            <Fragment key={v.contentId}>
                                <div className={"s3f974129"}>
                                    <div className={"s1ada1931"}>
                                        <div className={"s-1c89ddc8"}>
                                            <img className={"s33fa2c34"} src={v.clientImage} alt=""/>
                                        </div>
                                    </div>
                                    <div className={"s7ff11e8"}>
                                        <div className={"s40f553a6"}>
                                            {v.clientName}
                                        </div>
                                    </div>
                                    <a href="./" className={"s4d160f27 s-10c3e034"}>
                                        <div className={"s6770689d"}>
                                            {v.coverTitle}
                                        </div>
                                        <div className={"s1e896763"}>
                                            {v.coverSummary}
                                        </div>
                                    </a>
                                    <div className={"s-5ef2df7a"}>
                                        {v.hotNum}个赞
                                    </div>
                                </div>
                            </Fragment>
                        ))
                    }
                    <div style={{height: "50px"}}></div>
                </div>


                <div className={"s7e642914"}
                     style={{display: this.state.index === 1 ? "block" : "none", color: "pink"}}>
                    {
                        this.state.questionList.map(v => (
                            <Fragment key={v.contentId}>
                                <div className={"sdc142e7"}>
                                    <a href="./" className={"s4d160f27 s-56778ed8"}>{v.coverTitle}</a>
                                    <div className={"s-2b78cff9"}>
                                        <img className={"s-50de6f1"} src={v.recipe.image} alt=""/>
                                        <div className={"s-7d70dc01"}>
                                            <div className={"s283a4a93"}>{v.recipe.title}</div>
                                            <div className={"s-2bbb6e1"}>作者：{v.recipe.clientName}</div>
                                        </div>
                                    </div>
                                    <div className={"s-1eedf3fc"}>
                                        <div className={"s-3d62d9e6"}>
                                            <img className={"s-34f4f4a1"}
                                                 src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"
                                                 alt=""/>
                                        </div>
                                        <div className={"s69f32260"}>{"写答案"}</div>
                                    </div>
                                    <div className={"s-5faed799 none"}>{v.answerNum}个回答</div>
                                </div>
                            </Fragment>
                        ))
                    }
                    {/*<div style={{height: "50px"}}></div>*/}
                </div>


                <div className={"s7e642914"}
                     style={{display: this.state.index === 2 ? "block" : "none", color: "pink"}}>
                    {
                        this.state.hotList.map(v => (
                            <Fragment key={v.contentId}>
                                <div className={"sdc142e7"}>
                                    <a href="./" className={"s4d160f27 s-56778ed8"}>{v.coverTitle}</a>
                                    <div className={"s-2b78cff9"}>
                                        <img className={"s-50de6f1"} src={v.recipe.image} alt=""/>
                                        <div className={"s-7d70dc01"}>
                                            <div className={"s283a4a93"}>{v.recipe.title}</div>
                                            <div className={"s-2bbb6e1"}>作者：{v.recipe.clientName}</div>
                                        </div>
                                    </div>
                                    <div className={"s-1eedf3fc"}>
                                        <div className={"s-3d62d9e6"}>
                                            <img className={"s-34f4f4a1"}
                                                 src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"
                                                 alt=""/>
                                        </div>
                                        <div className={"s69f32260"}>{"写答案"}</div>
                                    </div>
                                    <div className={"s-5faed799 none"}>{v.answerNum}个回答</div>
                                </div>
                            </Fragment>
                        ))
                    }
                    <div style={{height: "50px"}}></div>
                </div>


            </div>
        )
    }

    componentDidMount() {
        // const pageSize=10;
        // const pageIndex=0;
        // if(pageSize>=10){
        //     this.state.pageIndex++;
        // }
        // 调取数据
        // 最新问题
        axios.get("https://api.hongbeibang.com/question/getNew?_t=1574862533365&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0MDEzMCwiaWF0IjoxNTc0NjUxMzMwfQ.Xf23GwY9lPuGIJy-eGh1VGrfdmxJXqDwaT00YmZLCU8&", {
            params: {
                pageIndex: 0,
                pageSize: 10
            }
        }).then(({data}) => {
            // console.log(data.content.data)
            this.setState({
                questionList: data.content.data
            })
        })
        // 精华问题
        axios.get("https://api.hongbeibang.com/question/getEssence?_t=1575025477981&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0MDEzMCwiaWF0IjoxNTc0NjUxMzMwfQ.Xf23GwY9lPuGIJy-eGh1VGrfdmxJXqDwaT00YmZLCU8&", {
            params: {
                pageIndex: 0,
                pageSize: 10
            }
        }).then(({data}) => {
            // console.log(data.content.data)
            this.setState({
                essenceList: data.content.data
            })
        })
        // 最热问题
        axios.get("https://api.hongbeibang.com/question/getHot?_t=1575025594525&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0MDEzMCwiaWF0IjoxNTc0NjUxMzMwfQ.Xf23GwY9lPuGIJy-eGh1VGrfdmxJXqDwaT00YmZLCU8&", {
            params: {
                pageIndex: 0,
                pageSize: 10
            }
        }).then(({data}) => {
            // console.log(data.content.data)
            this.setState({
                hotList: data.content.data
            })
        })
    }
}