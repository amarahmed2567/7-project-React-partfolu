/* eslint-disable jsx-a11y/alt-text */
import './heder.css';
import Cdn from './cdn';
import Spcial from './Spcial'
import Me from '../../img/me.png'
export default function Header(){
    return(
        <header id='home'>
        <div className='continear heade-continear'>
        <h5>hello i'm</h5>
        <h1>hajia bintu</h1>
        <h5 className='text-light'>fullstack developer</h5>
        <Cdn/>
        <img className='me-img' src={Me}/>

        <Spcial/>
        <a href='#contact' className='scroll-down' >scroll down</a>
        </div>
        </header>
    )
    }