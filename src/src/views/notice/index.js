import React from "react";
import  './notice.css'


export default class Notice extends React.Component{
    render(){
        return (
            <div>
                <div className={"tiaokuan"}>
                    <span className={"jiantou"}>
                        <img onClick={()=>{this.props.history.push("/login")}} className={"imgt1"} src={"https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"} alt=""/>
                    </span>
                    <ul className={"tiaokuan1"}>烘焙帮</ul>
                    <div className={"tiaokuan2"}></div>
                </div>

                <div className={"neirong"}>
                    <div className={"neirong1"}>
                        <p className={"p1"}>
                            <span className={"p2"}></span>
                        </p>
                        <article className={"acticle"} >
                            <section className={"section1"}>
                                <section className={"section2"}>
                                    <section className={"section3"}>
                                        <span className={"span"}></span>
                                        <span className={"span1"}></span>
                                    </section>
                                </section>
                                
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}