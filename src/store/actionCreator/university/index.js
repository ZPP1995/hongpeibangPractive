import axios from 'axios'
export default {
    getUniversity(){
      return  (dispatch)=>{
          axios.get('/rec/education/getIndexByWeb').then(({data})=>{
            //   console.log(data)
               dispatch({
             type:'GET_UNIVERSITY',
             payload:{
                 data
             }
         })
          })
        
      }
    },
    getPublic(id){
        return (dispatch)=>{
            // console.log(id,999999)
        axios.get('https://api.hongbeibang.com/index/getIndexItem',{params:{categoryId:id}}).then(({data})=>{
            //   console.log(data,1111111)
               dispatch({
             type:'GET_PUBLIC',
             payload:{
                 data
             }
         })
          })
    }
},
getSwiper(){
         return (dispatch)=>{
        axios.get('https://api.hongbeibang.com/education/getIndexByWeb').then(({data})=>{
            //   console.log(data,1111111)
               dispatch({
             type:'GET_SWIPER',
             payload:{
                 data
             }
         })
          })
    }
}
}