import React from 'react'
import './videoLesson.css'
import store from '../../store'
import actionUniver from '../../store/actionCreator/videoLesson'
import {
  connect
}from 'react-redux'
import {
  withRouter
} from 'react-router-dom'
 class VideoLesson extends React.Component {
   render(){
       return(
         
         <div>
         <div className='videos'>
         <div className='videoLesson' data-reactid=".2dger9dep1u.1.0.2">
         <video className="video" poster={this.props.info.image} src={this.props.info.playURL2} data-reactid=".2dger9dep1u.1.0.2.0" controls autoPlay='autoplay' playsInline="playsinline" webkit-playsinline="webkit-playsinline" controlsList="nodownload">
         <source src={this.props.info.playURL2} type="video/mp4">
         </source>
         </video>
         </div>
         <p>{this.props.info.shareTitle}</p>
         <div className='buyNum'>
         <img src='https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54'/>
         <div><p>{this.props.info.buyNum>1000 ?'1000+' : this.props.info.buyNum}</p><span>人在学</span></div>
         </div>
         </div>
         <ul className='videoul'>
         <li>永久回看</li>
         <li>报名即学</li>
         <li>自营课程</li>
         <li>高效学习体验</li>
         <li>分步骤学</li>
         <li>唯一品类</li>
         <li>图片下载</li>
         <li>工具材料参考</li>
         <img className='videoimg' src='https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8'/>
         </ul>
        <div className='videomain'>
        <div className='studentWork'>
        <p>学员作业</p>
        <p>查看更多</p>
         </div>
        <div className='workimg'>
        {
          // console.log(this.props.workimg.splice(0,4),565656)
          (this.props.workimg.slice(0,4)).map((v)=>(
             <img src={v.image[0]} key={v.clientId}/>
          ))
        }
       
        </div>   
        </div>
        <div className='willStudent'>
        {
           
          // console.log( this.props.info. clientImage.introduces[0].introduce teacherIntroduce)
     
          this.props.info.introduces.map((v)=>(
           <div key={v.educationCourseSummaryExtendId} className='willTitle'>{v.title}
          <div dangerouslySetInnerHTML = {{__html:v.introduce}} className='introduce' data-reactid=".wjgl0clc3e.1.0.7.2:0.$0.1">
          </div> 
          </div>
          ))
          
        }
        </div>
        <div className='Tutor'>
        <p>导师介绍</p>
        <div className='Tutorimg'>
        <img src={this.props.info. clientImage}/>
        <p>{this.props.info.clientName}</p>
        </div>
        <div dangerouslySetInnerHTML = {{__html:this.props.info.teacherIntroduce}} className='teacherTuor'></div>
        </div>
        <div className='OtherCourses'>
           <div className='Otherheader'>
              <p>导师的其它课程</p>
              <p>查看更多</p>
              </div>
          <div className='Otherhidden'>
            <div className='Othermain'>
         
            <div className='Otherimg'>
              
               {
                 this.props.teacher.map((v)=>(
                
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
        <div className='school'>
        <img src='https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242'/>
        <div className='schoolIntroduction'>烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</div>
        <div className='product'>
        <div>
        <img src='https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116'/>
        <p>蛋糕</p>
        </div>
        <div>
        <img src='https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116'/>
        <p>甜点</p>
        </div>
        <div>
       <img src='https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116'/>
         <p>面包</p>
        </div>
        <div>
        <img src='https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116'/>
       <p>中式点心</p>
        </div>
        </div>
        </div>
        <div className='nav'>
        <div>
        <img src='https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640'/>
        <p>更多课程</p>
        </div>
        <div>
        <img src='https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640'/>
        <p>咨询</p>
        </div>
        <div>
        <p>￥9.9 &nbsp;购买本课程</p>
        </div>
        </div>
         </div>
       )
   }
    componentDidMount(){
      // console.log(this.props.location,888999)
      this.props.getVideoLessons(this.props.location.state.educationCourseId)
      this.props.getWorkImgs(this.props.location.state.educationCourseId)
      this.props.getTeachers(this.props.location.state.clientId)
    }
 }
 function mapStateToProps(state){
    console.log(state,766666)
  return{
    info:state.videolesson,
    workimg:state.workImg,
    teacher:state.teacher
  }
}
function mapDispatchToProps(dispatch){
      return {
        getVideoLessons(id){
          dispatch(actionUniver.getVideoLesson(id))
        },
        getWorkImgs(id){
          dispatch(actionUniver.getWorkImg(id))
        },
        getTeachers(id){
          dispatch(actionUniver.getTeacher(id))
        }
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VideoLesson))