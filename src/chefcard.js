import React from 'react'
import src8 from './images/cardimg2.jpg'
import src9 from './images/cardimg3.jpg'
import src10 from './images/cardimg1.jpg'
import { AiFillStar } from "react-icons/ai";
// import lastbanner from './images/last bannerpic.jpg'
const Chefcard = () => {
  return (
 < >  <h2  className='starchef' id='h2'>04.Star<AiFillStar id='AiFillStar'/> Chiefs... </h2>

     <div className='over-container d-flex'>

    <div className='chef-def'>
<div className='chef-1 '>
<img src={src8} alt='src8' id='src8'/>

<div className= ' chefs-1 '>
<AiFillStar id='AiFillStar'/><AiFillStar id='AiFillStar'/><AiFillStar id='AiFillStar'/>
<h3>
   Fathima
</h3>

<p>Hark But is a Continantal Chef. He is the one Of the Best Chief in the World.</p>

<h2>$$$ <span>355932</span></h2></div>
</div>



    </div> 
    <div className='chef-def'>
  
<div className='chef-1 '>
<img src={src9} alt='src9' id='src9'/>


<div className= ' chefs-1 '>
<AiFillStar id='AiFillStar'/> <AiFillStar id='AiFillStar'/> <AiFillStar id='AiFillStar'/>

<h3>
Hark But
</h3>

<p>Hark But is a Continantal Chef. He is the one Of the Best Chief in the World.</p>

<h2>$$$ <span>355932</span></h2></div>
</div>



    </div>
    <div className='chef-def '>
  
<div className='chef-1 '>
<img src={src10} alt='src10' id='src10'/>
<div className= ' chefs-1 '>
<AiFillStar id='AiFillStar'/> <AiFillStar id='AiFillStar'/> <AiFillStar id='AiFillStar'/>
<h3> 
  Victoriya
</h3>

<p>Hark But is a Continantal Chef. He is the one Of the Best Chief in the World.</p>

<h2>$$$ <span>355932</span></h2></div>
</div>



    </div></div></>

  )
}

export default Chefcard