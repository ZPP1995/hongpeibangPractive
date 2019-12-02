import React from 'react'
import './university.css'
import Swipe from '../../components/university/swipe'
import Recommend from '../../components/university/recommend'
import Public from '../../components/university/public'
import store from '../../store'
import actionUniver from '../../store/actionCreator/university' 
  export default class University extends React.Component{
    render() {
        return (
            <div className='vimains'>
             <div className='videoCenter'>
             <div className='box'>
             <ul>
             <li className='activeLi'>推荐
             <p className='activeP'></p>
             </li>
             <li categoryid='10163'>蛋糕</li>
             <li categoryid='10164'>面包吐司</li>
             <li categoryid='10162'>甜品点心</li>
             <li categoryid='10166'>中式点心</li>
             <li categoryid='10173'>面食</li>
             <li categoryid='10180'>其它</li>
             </ul>
             </div>
             <img src='https://image.hongbeibang.com/FnrqUc_5_kAF72ooW4xubuH07P-S?imageView2/1/w/640/h/640'/>
          </div>
          <div className='universityShow'>
          <Swipe></Swipe>
          <Recommend></Recommend>
          </div>
            <div className='universityHidden'>
              <Public data={this.props.state}></Public>
            </div>
           </div>
           
        )
    }
    initSwipe(info){
      return info
    }
    componentDidMount(){
      const li=document.querySelectorAll('li')
      const p=document.querySelector('.activeP')
      const show=document.querySelector('.universityShow')
      const hidden=document.querySelector('.universityHidden')
       for(let i=0;i<li.length;i++){
           const _this=this
           li[i].setAttribute("index",i)
           li[i].onclick=function(){   
               for(let h=0;h<li.length;h++) {
                   li[h].setAttribute('class','')
               }
            this.setAttribute("class","activeLi")
            this.appendChild(p)
            if(i===0){
              show.style.display='block'
              hidden.style.display='none'
              store.dispatch(actionUniver.getUniversity()) 

            }else{
                 show.style.display='none'
                 hidden.style.display='block'
                 const id=this.getAttribute('categoryid')
                //  hidden.setAttribute('categoryid',id)
                store.dispatch(actionUniver.getPublic(id))
                //  _this.props.getPublics(id)
            }
           }
       }
    }
}
