import React from 'react'
import './menu.css'
import cr1 from '../images/pngwing-2@2x.png'
import cr2 from '../images/pngwing-3@2x.png'
import star from '../images/star.png'
import mini from '../images/30cbec3fba7206e8cc8c88e2f7b00129-removebg-preview 2 (1) 3.png'
import t1 from '../images/background@2x.png'
import dr from '../images/Group 100.png'
// import img from '../images/icon.png'
import pro from '../images/problem.png'
import Footer from './Footer'

// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import girl from '../images/rectangle-1072@2x.png'


const Menu = () => {
  return (
    <>
    <div className='menu'>
        <div className='m1'>
            <div>
            <h4 className='h4'>WE'RE<br /> GOOD. </h4> <h4 className='just'> JUST ASK </h4> <h4 className='mom'> YOUR MOM.
            </h4>
            </div>
            <div className='star'>
            <div className='s1'> <p>WEB</p></div>
            <div className='s1' ><img src={star} alt=""  height={15} width={15} style={{marginTop:5.5}}/> <p>INTERACTIVE</p></div>
            <div className='s1'><img src={star} alt=""  height={15} width={15} style={{marginTop:5.5}}/> <p>BRANDING</p></div>
            <div className='s1'><img src={star} alt=""  height={15} width={15} style={{marginTop:5.5}}/> <p>PRINT</p></div>
            </div>
            <div class="wegot">
            <p class ="wegot1" style={{ fontFamily:'Poppins', fontWeight:'bold'}}>IT'S WHAT WE LOVE TO DO. <br />
            SO RELAX, WE'VE GOT THIS</p>
            </div>

        </div>
        <div className='m2'>
            <img src={cr1} alt="" height={110} width={170}/>
            <img src={cr2} alt="" height={50} width={70}/>
        </div>
    </div>
    <div className='profile'>
        <div className='p1'><img src={t1} alt="" height={170} width={100} /></div>
        <div className='p2'><img src={mini} alt="" height={60} width={70}/></div>
        <div className='p3'><img src={mini} alt="" height={60} width={70}/></div>
        <div className='p4'><img src={dr} alt="" height={200} width={230}/></div>
        <div className='p5'><img src={t1} alt="" height={170} width={100} /></div>
    </div>
    <div className='menu2'>
        <div className='level'><div><h3 style={{marginTop:"20px"}}>LEVEL 1 : THE DEETS</h3></div></div>
        <div className='description'>
          <div className='part1'>
            <div className='pzl'>
              <div style={{marginTop:"100px"}}><h2 className='head'>DO</h2> <h2 className='head' >WE</h2><h2 className='head' style={{marginTop:"60px"}}>WHAT</h2></div>
              <div><img src={pro} alt="" /></div>
            </div>
            <div className='cont'>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div style={{fontWeight:"bold"}}>Just Kidding..</div>
              <div> At Lorem Ipsum, we're not your average design wizards; we're the quirky crew with a knack for turning chaos into creative gold.Join our offbeat odyssey to transform your wildest ideas into design wonders.</div>
            </div>
          </div>
          <div className='part2'>
          <div className='dis' style={{marginBottom:"20px"}}>WE MAKE YOUR PROBLEMS DISAPPEAR</div>
          </div>
        </div>
    </div>
    <div className='menu3'>
      <div className='dis'>LEVEL 2: THE THREE MUSKETEERS</div>
      <div className='girls'>
        <div className='card1'>
          <div className='g1'>
            <div className='f1'  style={{width:"200px", height:"220px"}}></div>
            <div className='name' style={{textAlign:'center'}}>Comical</div>
          </div>
        </div>
        <div className='card2'>
          <div className='g2'>
          <div className='f2'  style={{width:"200px", height:"220px"}}></div>
            <div className='name' style={{textAlign:'center'}}>Fabulas</div>
          </div>
        </div>
        <div className='card3'>
          <div className='g3'>
          <div className='f3'  style={{width:"200px", height:"220px"}}></div>
            <div className='name' style={{textAlign:'center'}}>Organized</div>
          </div>
        </div>
      </div>
      <div className='creators'>
        <div className='n1'>SURYA PRAKASH</div>
        <div className='n1'>SNEHA S</div>
        <div className='n1'>PRAVEEN SA</div>
      </div>
      <div className='dis'>THE MORTALS WHO MAKE IT HAPPEN</div>
    </div>
    {/* <div className='menu4'>
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
    </div> */}
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Menu