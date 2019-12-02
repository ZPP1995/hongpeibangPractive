import React from "react";
import "./home.css"
import { Route,} from "react-router-dom"
import { tabBarRoute } from "../../router"
import TabBer from  "../../components/tarber/index"
export default class Home extends React.Component {
    render() {
        return (
            <div>
        
                {
                    tabBarRoute[0].children.map((v, i) => (
                        <Route exact key={i} path={v.path}  component={v.component}></Route>
                    ))
                }
                
                <TabBer></TabBer>
            </div>
        )
    }
    
}