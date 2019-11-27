import React, {Component} from 'react'
import {tabBarRoute} from "../../router"
import {
    NavLink,
} from "react-router-dom"
import "./tarber.css"

export default class TabBer extends Component {
    render() {
        return (

            <ul className="tabBar">
                {
                    tabBarRoute[0].children.map((v, i) => (
                        <NavLink exact key={i} to={v.path} activeClassName="actived">
                            <div className="imgCon"><img src={"/img" + v.imgSrc} alt=""/></div>
                            <div>{v.name}</div>
                        </NavLink>

                    ))
                }
            </ul>

        )
    }
}