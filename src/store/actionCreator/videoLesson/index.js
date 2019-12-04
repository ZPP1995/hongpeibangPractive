import axios from 'axios'
export default {
    getVideoLesson(educationCourseId){
        // console.log(educationCourseId,99999)
        return (dispatch)=>{
            axios.get('https://api.hongbeibang.com/education/getCourse',{
                params:{
                    educationCourseId
                }
            }).then(({data})=>{
                // console.log(data,88888)
                dispatch({
                    type:'GET_VIDEOLESSON',
                    payload:{
                        data
                    }
                })
            })
        }
    },
    getWorkImg(educationCourseId){
        // console.log(educationCourseId,99999)
        return (dispatch)=>{
            axios.get('https://api.hongbeibang.com/dish/getOutstandingCourseContent',{
                params:{
                     educationCourseId
                }
            }).then(({data})=>{
               console.log(data,888889999)
               dispatch({
                   type:'GET_WORKIMG',
                   payload:{
                       data:data.content.data
                   }
               })
            })
        }
    },
    getTeacher(clientId,pageIndex=0,pageSize=10){
        return (dispatch)=>{
            axios.get('https://api.hongbeibang.com/course/getClientOtherCourse',{
                params:{
                    pageIndex,
                    pageSize,
                    clientId
                }
            }).then(({data})=>{
                 console.log(data,88888)
                dispatch({
                   type:'GET_TEACHER',
                   payload:{
                       data:data.data
                   }
               })
            })
        }
    }
}