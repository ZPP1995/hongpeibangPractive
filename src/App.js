import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom"
import Home from "./views/home"
import {noTabBarRoute} from "./router"
import './App.css';
/*
* Home组件，包含导航
* 其它组件不包含，比如Login*/



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {
              noTabBarRoute.map((v, i) => (
                <Route key={i} path={v.path} exact component={v.component}></Route>
              ))
            }
            <Route path={"/"} component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );


  }
  componentDidMount(){
    
  }

}


export default App;
