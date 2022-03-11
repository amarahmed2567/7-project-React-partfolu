/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import './Contact.css';
import {MdEmail} from'react-icons/md'
import {IoLogoWhatsapp} from'react-icons/io'
import {BsMessenger} from'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';
export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4cofdoo', 'template_utrdl1u', form.current, 'a0b5BOElZqrKUcbB1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return(
        <section id='contact'>
        <h5 className='text-light'>get in touch</h5>
        <h2>contact me</h2>
        <div className="continear contact">
            <div className="contact-links-boxs">
            <div className="box">
            <MdEmail className='icon'/>
            <h3>email</h3>
            <p className='text-light'>amarahmed2567@gmail.com</p>
            <a href="mailto:amarahmed2567@gmail.com" target="_blank" >send message</a>
            </div>
            <div className="box">
            <IoLogoWhatsapp className='icon'/>
            <h3>Whatsapp</h3>
            <p className='text-light'>+201156802324</p>
            <a href="https://api.whatsapp.com/send?phone=+201156802324" target="_blank" >send message</a>
            </div>
            <div className="box">
            <BsMessenger className='icon'/>
            <h3>Messenger</h3>
            <p className='text-light'>Amar Ahmed</p>
            <a href="https://m.me/100009876752328" target="_blank" >send message</a>
            </div>
            </div>
            <form onSubmit={sendEmail} ref={form} className='contact-from'>
            <input type="text" placeholder='your Name' name='name' required/>
            <input type="email" placeholder='your email'name='email' required/>
            <textarea  rows="10" placeholder='message' name='message' required/>
            <button  type="submit" value="send message" className='btn' >send message</button>
            </form>
        </div>
        </section>  
    )
    }