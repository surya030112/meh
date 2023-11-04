import React from 'react'
import './footer.css'
import img from '../images/icon.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='menu4'>
      <div className='end'>
      <div className='footer1'>
        <div className='f1in1'>
          <div><img src={img} alt="" height={30} width={40}/></div>
          <div style={{marginLeft:"5px"}}><div className='endlorem'>LOREM</div><div className='endlorem'>IPSUM</div></div>
        </div>
        <div className='f1in2' style={{fontFamily:"Poppins",fontSize:"13px"}}>
          <div>Turning 'Lorem Ipsum' into</div>
          <div>'Lorem Awesum' since your birth</div>
        </div>
      </div>
      <div style={{margin:"20px",fontFamily:"Poppins"}} >
        <div>Drop us a line at</div>
        <div style={{fontSize:"11px",marginTop:"10px"}}><u>loremipsum@gmail.com</u></div>
      </div>
      <div style={{margin:"20px",fontFamily:"Poppins"}}>
        <div>Give us a shout at</div>
        <div style={{fontSize:"12px",marginTop:"10px"}}>+91 123-456-7890</div>
      </div>
      <div style={{margin:"20px"}}>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
          <div><div className='rec'><InstagramIcon/></div></div>
          <div><div className='rec'><LinkedInIcon/></div></div>
          <div><div className='rec'><WhatsAppIcon/></div></div>
          <div><div className='rec'><MailOutlineIcon/></div></div>
        </div>
        <div style={{fontFamily:"Poppins",marginTop:"50px",fontSize:"12px"}}>lorem ipsum 2023 all rights reserved</div>
      </div>
      </div>
    </div>
  )
}

export default Footer