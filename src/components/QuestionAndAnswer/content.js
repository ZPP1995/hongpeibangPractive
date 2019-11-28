import React from "react";
import './content.css';
import axios from "axios";

export default class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            questionList:[]
        }
    }
    render(){
        console.log(this.state.questionList)

        return (
            <content className="s-41d1d672">
                <div className={"s-45b3ab02"}>
                    {
                        // this.props.info.map(v=>(
                        //     <div key={v.id}>{v.questionTitle}</div>
                        // ))
                    }
                    <span>精华问答</span>
                </div>
                <div className="s-45b3ab02 active">
                    <span>最新问题</span>
                    {/*<div className="s9b31ec9"></div>*/}
                </div>
                <div className="s-45b3ab02">
                    <span>最热问题</span>
                </div>
            </content>
        )
    }
    componentDidMount(){
        // 调取数据
        axios.get("https://api.hongbeibang.com/question/getNew?_t=1574862533365&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0MDEzMCwiaWF0IjoxNTc0NjUxMzMwfQ.Xf23GwY9lPuGIJy-eGh1VGrfdmxJXqDwaT00YmZLCU8&pageIndex=0&pageSize=10")
            .then(({data})=>{

                this.setState({
                    questionList:data.data.content.data
                })

            })

    }
}


