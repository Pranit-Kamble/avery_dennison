import React, { useEffect } from 'react'
import './App.css'
import Footer from './Componets/Footer/Footer'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const handleclose=()=>{
    document.getElementsByClassName('pop')[0].style.visibility='hidden'
  }
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementsByTagName('form')[0].style.visibility='visible'
    },2000)
  })
  const handleclick=()=>{
    document.getElementsByTagName('form')[0].style.visibility='visible'
  }
  const handlesubmit=()=>{
    document.getElementsByClassName('pop')[0].style.visibility='visible'
    const inputs = document.querySelectorAll('input')
    console.log(inputs)
    inputs.forEach(element => {
      element.value=''
    });

    document.getElementsByTagName('form')[0].style.visibility='hidden'
  }
  return (
    <>
    <div className='home_container'>
      <div className='card card1'>
        <div className='text'>
          <div className='logo'></div>
          <div className='section1'>Take your graphics protection to the next level with DOL Max overlaminates</div>
          <div className='section2'>Pair with MPI 1105 wrapping film for ramped up protection</div>
          <div className='section3'>
          <div className='icon_text'>
          <div className='icon1'>
            <div className='logo1'></div>
          </div>
          <div className='section4_text'>Maximum Durability</div>
          </div>
          <div className='icon_text'>
          <div className='icon1'>
            <div className='logo1 logo2'></div>
          </div>
          <div className='section4_text'>Enhanced Appearance</div>
          </div>
          <div className='icon_text'>
          <div className='icon1'>
            <div className='logo1 logo3'></div>
          </div>
          <div className='section4_text'>High Gloss Finish </div>
          </div>
          
          </div>
          

        </div>
      </div>
      <div className='card card2'>
        <div className='text2'>
          <h1>DOL Max Overlaminate Films</h1>
          <p style={{marginTop:'5px'}}>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
          <h3 style={{marginTop:'25px'}}>Features & Benefits:</h3>
          <ul>
            <li style={{marginTop:'25px'}}>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
            <li style={{marginTop:'25px'}}>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
            <li style={{marginTop:'25px'}}>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
          </ul>
          <a onClick={handleclick} href='#form'><button className='inquire_btn'>Inquire now <FontAwesomeIcon icon={faArrowRight} size='l' /></button></a>
        </div>
      </div>
      <div className='card card3'>
        <div className='card4'></div>
        <div className='why_section'>
          <h1>Why us?</h1>
          <div className='why_container'>
          <div className='icon1 icon2'>
            <div className='logo1 logo4'></div>
          </div>
          <div className='why_text'>
            <h4>Quality Products</h4>
            <p>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
          </div>
          </div>
          <div className='why_container'>
          <div className='icon1 icon2'>
            <div className='logo1 logo5'></div>
          </div>
          <div className='why_text'>
            <h4>Multiple Options</h4>
            <p>We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</p>
          </div>
          </div>
          <div className='why_container'>
          <div className='icon1 icon2'>
            <div className='logo1 logo6'></div>
          </div>
          <div className='why_text'>
            <h4>Expertise and Support</h4>
            <p>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</p>
          </div>
          </div>
          <div className='why_container'>
          <div className='icon1 icon2'>
            <div className='logo1 logo7'></div>
          </div>
          <div className='why_text'>
            <h4>Durability Assurance</h4>
            <p>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
          </div>
          </div>
        <a onClick={handleclick} href='#form'><button className='callback_btn'>Request a call back <FontAwesomeIcon icon={faArrowRight} size='l' /></button></a>
        </div>
      </div>
      <form  action='#' onSubmit={handlesubmit} id='form'>
        <div >
        <h2>Connect with us</h2>
        <div>for outstanding protective overlaminates</div>
        </div>
        <div className='input_container'>
          <div className='input_text'>
          <label>First Name</label>
          <input required type='text'></input>
          </div>
          <div className='input_text'>
          <label>Last Name</label>
          <input required type='text'></input>
          </div>
          <div className='input_text'>
          <label>Email</label>
          <input required type='email'></input>
          </div>
          <div className='input_text'>
          <label>Contact Number</label>
          <input required type='number'></input>
          </div>
          <div className='input_text'>
          <label>Company</label>
          <input required type='text'></input>
          </div>
          <div className='input_text'>
          <label>State</label>
          <select style={{width:'167px'}}>
            <option>California</option>
          </select>
          </div>
        </div>
        <div  className='input_text'>
          <label>How would you describe yourself?</label>
          <select >
            <option>Installer</option>
          </select>
        </div>
        <div  className='input_text'>
          <label>Preffered Distributor:</label>
          <select >
            <option>Aerotect</option>
          </select>
        </div>
        <div className='input_text'>
          <label>Additional information</label>
          <textarea ></textarea>
        </div>
        <div  className='input_text' style={{flexDirection:'row',gap:'10px'}}>
          <input required type='checkbox'></input>
          <p>I'd like to receive promotions, product information and service offers from Avery Dennison.</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
        <button  className='submit_btn'>Submit <FontAwesomeIcon icon={faArrowRight} size='l' /></button>
        </div>
      </form>
    <div className='pop'>
      <h1>Thank You For Your Responce</h1>
      <button onClick={handleclose} className='close_btn'>Close</button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default App