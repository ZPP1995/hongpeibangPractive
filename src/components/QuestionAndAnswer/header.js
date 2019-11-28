import React from "react";
import './header.css'
// import {Link} from "react-router-dom";


export default class Herder extends React.Component {
    render() {
        return (
            <header className={"App-header"}>
                <div className="s30153804">
                    <span className="s7d4f25eb">
                        提问
                    </span>
                    <span className="s-3613cfc6">
                        <img className="s-6a5cf0dc"
                             src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
                             alt=""/>
                    </span>
                    <div className="s2ca81225">
                        <div className="s60de47cb">
                            <span className="s-3448c132">
                                搜索问题
                            </span>
                            <input className="s-362be723"/>
                        </div>
                    </div>
                </div>
                {/*<div className="s7e1f0f36"></div>*/}
            </header>
        )

    }
}

