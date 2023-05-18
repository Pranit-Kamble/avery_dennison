import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer_container'>
        <div className='footer_box'>
            <div style={{fontSize:'19px',textAlign:'center',color:'#FFFFFF'}}>Best solutions from</div>
            <div className='footer_icon'></div>
        </div>
        <div style={{fontSize:'20px',color:'#FFFFFF'}} className='footer_box'>
            <div>DOL Max Overlaminate Films</div>
            <div>why us</div>
            <div>Enquire now</div>
        </div>
        <div style={{gap:'0px',color:'#727272'}} className='footer_box'>
            <p>Avery Dennison Overlaminate </p>
            <p>Avery Dennison Overlaminate Films</p>
             <p>Avery Dennison Digital Overlaminate Films </p>
            <p>Avery Dennison DOL Max</p>
        </div>
        <div style={{gap:'0px',color:'#727272'}} className='footer_box'>
        <p>Overlaminate </p>
        <p>Overlaminate Films</p> 
        <p>Digital Overlaminate Films</p>
        </div>
    </div>
    <div style={{textAlign:'center'}} className='copywrite'>
    © 2023 Avery Dennison Label Packaging Material. All rights reserved.
    </div>
    </>
  )
}

export default Footer