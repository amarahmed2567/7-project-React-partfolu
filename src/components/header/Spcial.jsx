import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import {AiOutlineDribbble} from 'react-icons/ai';
export default function Spcial() {
    return (
    <div className='header-soial'>
        <a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://www.github.com' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.deibbble.com' target='_blank' rel="noreferrer"><AiOutlineDribbble/></a>
    </div>
    )
}
