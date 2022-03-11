import './about.css';
import Me from '../../img/me2.jpg'
import {FaMedal} from 'react-icons/fa'
import {MdGroup} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
export default function About(){
    return(
        <section id='about'>
        <h5 className='text-light'>get to know</h5>
        <h2 >about me</h2>
        <div className="continear about">
        <div className="continear-img">
        <div className='img-back'>
        <img src={Me} alt="me"/>
        </div>
        </div>
        <div className="info">
        <div className="about-info">
        <div className="div-box">
            <FaMedal className='icon'/>
        <h3>experience</h3>
        <h5 className='text-light'>3+ years working</h5>
        </div>
        <div className="div-box">
            <MdGroup className='icon'/>
        <h3>client</h3>
        <h5 className='text-light'>300+ worldwide</h5>
        </div>
        <div className="div-box">
            <AiOutlineFundProjectionScreen className='icon'/>
        <h3>prjoect</h3>
        <h5 className='text-light'>80+completed</h5>
        </div>
        </div>
        <div className='about-text'>
        <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, fugiat nobis! Error voluptas odio voluptatibus aut perspiciatis quisquam, maiores commodi, vitae labore, numquam praesentium sapiente doloremque deserunt animi ducimus minus.</p>    
        <a href='#contact' className='btn' >let's talk</a>
        </div>
        </div>        
        </div>
        </section>
    )
    }