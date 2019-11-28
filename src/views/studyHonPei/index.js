import React, {Component} from 'react'
import axios from "axios"
import "./styled.css"
// import { thisTypeAnnotation } from '@babel/types'
export default class TabBar extends Component {
    render() {
        return (
            <div>
                1
                study
            </div>
        )
    }

    componentDidMount() {
        //https://api.hongbeibang.com/education/getCourse?_t=1574739374309&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDA0Mjg0OSwiaWF0IjoxNTc0NjU0MDQ5fQ.ZW5G18SuMYIFetFVBBPfYjAG8O9szzWcEOtbLjPZGwQ&educationCourseId=10461
        axios.get("/img/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50").then(({data}) => {
            console.log(data, 111);
        })
    }
}

