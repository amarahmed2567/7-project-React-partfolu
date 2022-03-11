/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Cv from'../../img/cv.pdf'

export default function Cdn() {
    return (
    <div className='cdn'>
        <a href={Cv} className='btn btn-ligt' download="cv" target="_blank" rel="noreferrer">download CV</a>
        <a  href='#contact' className='btn '>let's talk</a>
    </div>
    )
}
