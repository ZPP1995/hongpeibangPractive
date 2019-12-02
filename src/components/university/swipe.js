import React from 'react'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
export default class Recommend extends React.Component {
    render() {
        return (
    <div className="swiper-container" >
    <div className="swiper-wrapper" >
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FiPvrx5_vvx4npvCnT_4F-_TFeDc?1380X700&imageView2/1/w/750/h/380'/></div>
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FsJ28pZslxAeALcNdnHivJ7TsGoP?1380X700&imageView2/1/w/750/h/380'/></div>
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FrwHp8v7yDZGyZgq4zuuXgbBzfC6?1380X700&imageView2/1/w/750/h/380'/></div>
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FiXqR3SqmO-FD6xb2yv4unoP9IJN?1380X700&imageView2/1/w/750/h/380'/></div>
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FkummozcGZ3UDkOk29-VDNzHUagX?1380X700&imageView2/1/w/750/h/380'/></div>
    <div className="swiper-slide"><img src='https://image.hongbeibang.com/FiRkev5sjJHxCTa57AOJzSFbeNzP?1380X700&imageView2/1/w/750/h/380'/></div>
    </div>
    <div className="swiper-pagination"></div>
    </div>
        )
    }
    componentDidMount(){
    new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                disableOnInteraction : false,
                delay:1000,
            },
            speed:500,
            slidesPerView: 1,
            loop : true,
        });
    }
}