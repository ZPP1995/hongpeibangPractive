import React from 'react'
import store from '../../store'
import actionUniver from '../../store/actionCreator/university' 
import './public.css'
import {
  connect
}from 'react-redux'
import {
    withRouter
} from 'react-router-dom'
 class Public extends React.Component {
    render() {
        return (     
         <div className='pumain'>
         {
             this.props.data.map((v,i)=>(  
                 <div className='puimg' key={i} onClick={()=>this.props.history.push({pathname:'/lesson',state:{educationCourseId:v.educationCourseId,clientId:v.clientId}})}>
                 <img src={v.verticalImages[0]}/>
                 <span>{v.buyNum >1000?'1000+'+'在学':v.buyNum+'在学'}</span>
                 <p>{v.shareTitle}</p>
                 </div>
             ))
         }
         </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state,766666)
  return{
    data:state.publi
  }
}
function mapDispatchToProps(dispatch){
      return {
        getPublics(id){
          dispatch(actionUniver.getPublic(id))
        }
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Public))