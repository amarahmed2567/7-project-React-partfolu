import './Testimonials.css';
import prson1 from'../../img/prson (1).jpg';
import prson2 from'../../img/prson (2).jpg';
import prson3 from'../../img/prson (3).jpg';
import prson4 from'../../img/prson (4).jpg';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[{
    id:1,
    img:prson1,
    Name:"salwa ahmed"
},
{
    id:2,
    img:prson2,
    Name:"rana dev"
},{
    id:3,
    img:prson3,
    Name:"yasuo leg"
},
{
    id:4,
    img:prson4,
    Name:"jone UI"
}
]
const myarray=data.map(({id,img,Name})=>{
    return(
        <SwiperSlide className="Testimonials-box" key={id}>
        <div className='img-back-rev'><img src={img} alt="img :(" /></div>
        <h3>{Name}</h3>
        <p className='text-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit ipsum velit eaque dolorem doloribus cum id cumque ex quasi! Quibusdam ea laboriosam accusantium quis nesciunt perferendis deserunt necessitatibus quasi.</p>
        </SwiperSlide>
    )
})
    export default function Testimonials(){
        
    return(
        <section id='Testimonials'>
            <h5 className='text-light'>reviwe for clinets</h5>
            <h2>Testimonials</h2>
        <Swiper className="continear Testimonials" 
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
        >
            {myarray}
        </Swiper>
        </section>
    )
    }