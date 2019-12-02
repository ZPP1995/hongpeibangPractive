import React, { Component } from 'react'
import axios from "axios"
import './recommend.css'
import store from '../../store'
import actionUniver from '../../store/actionCreator/university'
import {
  connect
}from 'react-redux'
 class Recommend extends Component {
    render() {
        return (
        <div>
            {
              this.props.state.splice(1).map((v,i)=>(
              <div key={v.categoryId}>
              <div className='reheader'>
              <p>{v.title}</p>
              <p>查看更多</p>
              </div>
                   <div className='rehidden'>
                   <div className='remain'>
                   <div className='reimg'>
               {
                 v.item.map((v,i)=>(
                   <div key={v.contentId}>
                   <img src={v.image}/>
                   <span>{v.buyNum >1000?'1000+'+'在学':v.buyNum+'在学'}</span>
                   <p>{v.title}</p>
                   </div>
                 ))
               }
                   </div>
                   </div>
                   </div>
               </div>
              ))   
            }
            
        </div>  
        )
    }
    componentDidMount(){
      this.props.getUniver()
    }
}

function mapStateToProps(state){
  return{
     state:state.university
  }
}

function mapDispatchToProps(dispatch){
      return {
        getUniver(){
          
          dispatch(actionUniver.getUniversity())
        }
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Recommend)