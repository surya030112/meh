import React,{useState} from 'react'
import './work.css'
import dr from '../images/Group 101.png'
import mini from '../images/mini.png'
import Websites from './Websites'
import m1 from '../images/30cbec3fba7206e8cc8c88e2f7b00129-removebg-preview 2 (1) 3 (1).png'
import m2 from '../images/Group 102.png'
import block from '../images/Group 103.png'
import heart from '../images/PIXEL HEART.png'
import Footer from './Footer'

const Work = () => {

  return (
    <>
      <div className='work1'>
      <div style={{marginTop:"30px"}}>
        <div style={{marginBottom:"30px",marginLeft:"100px"}}>
            <div>
                <div className='web'>WEB DESIGN</div>
            </div>
            <div className='grandma'>
                <div>Websites so userfeirndly, Even</div>
                <div>your Grandma can't get lost</div>
            </div>
        </div>
        <div className='dragon'>
            <img src={dr} alt="" height={220} width={300}/>
        </div>
      </div>
      <div className='cards' style={{display:"flex",flexDirection:"row"}}>
        <div className='card'>
            <div className='c1'>
                <div className='post1' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn1'>VIEW</button></div>
            </div>
        </div>
        <div className='card'>
            <div className='c2'>
                <div className='post2' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn1'>VIEW</button></div>
            </div>
        </div>
      </div>
      </div>
      <div className='work2'>
      <div className='win2'>
      <div className='flashes' style={{display:"flex",flexDirection:"row"}}>
        <div className='flash'>
            <div className='crd1'>
                <div className='poster1' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn2'>VIEW</button></div>
            </div>
        </div>
        <div className='flash'>
            <div className='crd2'>
                <div className='poster2' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn2'>VIEW</button></div>
            </div>
        </div>
      </div>
      <div style={{marginTop:"30px"}}>
        <div style={{marginBottom:"30px",marginLeft:"100px"}}>
            <div>
                <div className='int'>INTERACTIVE</div>
                <div className='desig'>DESIGN</div>
            </div>
            <div className='grandma1'>
                <div>Interactivity with a side of whimsy-</div>
                <div>because boring is already taken</div>
            </div>
        </div>
        <div className='minion'>
            <img src={mini} alt="" width={250}/>
        </div>
      </div>
      </div>
      </div>
      <div className='work3'>
        <div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{margin:"100px",marginLeft:"50px",marginBottom:"50px",marginRight:"0px"}}>
              <div className='br'>BRANDING</div>
              <div className='craft'>Crafting brands that leave an</div>
              <div className='impress'>impression as unforgettable as</div>
              <div className='ex'>your ex</div>
            </div>
            <div>
              <div style={{marginTop:"20px"}}><img src={block} alt="" height={250} width={200} /></div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginTop:"30px",justifyContent:"space-between"}}>
            <div style={{marginTop:"60px"}}><img src={m1} alt="" height={60} /></div>
            <div ><img src={m2} alt="" height={120} width={190}/></div>
          </div>
        </div>
        <div>
          <div className='brandings' style={{display:"flex",flexDirection:"row"}}>
          <div className='brand'>
            <div className='brd1'>
                <div className='brand1' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn1'>VIEW</button></div>
            </div>
          </div>
          <div className='brand'>
            <div className='brd2'>
                <div className='brand2' style={{width:"250px",height:"160px"}}></div>
                <div style={{display:"flex",justifyContent:"center"}}><button className='btn1'>VIEW</button></div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='work4'>
        <div className='win4'>
          <div>
            <div className='cloths' style={{display:"flex",flexDirection:"row"}}>
              <div className='cloth'>
                <div className='cl1'>
                  <div className='cloth1' style={{width:"250px",height:"160px"}}></div>
                  <div style={{display:"flex",justifyContent:"center"}}><button className='btn2'>VIEW</button></div>
                </div>
              </div>
              <div className='cloth'>
                <div className='cl2'>
                  <div className='cloth2' style={{width:"250px",height:"160px"}}></div>
                  <div style={{display:"flex",justifyContent:"center"}}><button className='btn2'>VIEW</button></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop:"20px"}}>
              <div className='print'>PRINT</div>
              <div className='trauma'>Creating print materials that stay in</div>
              <div className='trauma1'>your memory like your trauma.</div>
            </div>
            <div>
              <img src={heart} alt="" height={200} width={300} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Work