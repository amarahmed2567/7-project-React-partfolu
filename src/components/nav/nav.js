import './nav.css';
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcTemplate} from 'react-icons/fc'
import {MdRateReview} from 'react-icons/md'
import {AiFillContacts} from 'react-icons/ai'
export default function Nav(){
    return(
        <nav>
        <a href='#home'><AiFillHome/></a>
        <a href='#about'><FcAbout/></a>
        <a href='#Portfolio'><FcTemplate/></a>
        <a href='#Testimonials'><MdRateReview/></a>
        <a href='#contact'><AiFillContacts/></a>
        </nav>
    )
    }