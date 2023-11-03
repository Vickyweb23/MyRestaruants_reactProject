import React from 'react'

import imgone from './images/food1.jpg'
import img2 from './images/food2.jpg'
import img3 from './images/food3.jpg'
import img4 from './images/food1.1.jpg'
import img5 from './images/food5.jpg'
import img6 from './images/food6.jpg'
import img7 from './images/food7.jpg'
import img8 from './images/food8.jpg'
import img9 from './images/food2.jpg'
import img10 from './images/food13.jpg'
import img11 from './images/food12.jpg'
import img12 from './images/food17.jpg'
import img13 from './images/food18.jpg'
import img14 from './images/food19.jpg'
import img15 from './images/food13.jpg'
import img16 from './images/food19.jpg'
// import img17 from './images/food2.jpg'


function Fotter() {
  return (

    <>
    <h2  className="products" id="h2">05.Ours Products</h2>
    <div Col lg={1} className=" fotter lg-4" id="fotter">
        
<img src={imgone} alt='imgone' />

<img src={img2} alt='img2'/>

<img src={img3} alt='img3'/>
<img src={img4} alt='img4f'/>


   </div>
   <div className='fotter' id="fotter1">
   <img src={img5} alt='img5f'/>
<img src={img6} alt='img6'/>
<img src={img7} alt='img7'/>
<img src={img8} alt='img8'/>
   </div>

   <div className='fotter' id="fotter2">

   <img src={img9} alt='img9'/>
<img src={img10} alt='img10'/>
<img src={img11} alt='img11'/>
<img src={img12} alt='img12'/>
   </div>

   <div className='fotter' id="fotter3">

   <img src={img13} alt='img13'/>
<img src={img14} alt='img14'/>
<img src={img15} alt='img15'/>
<img src={img16} alt='img16'/>
   </div>

  </>
  )
}

export default Fotter