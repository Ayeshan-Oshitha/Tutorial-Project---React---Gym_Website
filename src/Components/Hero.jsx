import React from 'react'
import './Hero.css'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import calories from '../assets/calories.png'

import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type:'spring', duration:3}
  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero" id='hero'>

      <div className="blur hero-blur"></div>

        <div className="left-h">

            <Header />

            {/* the best ad */}

            <div className="the-best-ad">
              
            <motion.div
              initial={{left: mobile? "160px" : "238px"}}
              whileInView={{left:'8px'}}
              // transition={transition} is also correct, but the transisiton is bit different
              transition={{...transition, type:'tween'}}

            
            ></motion.div>

              <span>the best fitness club in the town</span>

            </div>

            {/* Hero Heading */}

            <div className="hero-text">

              <div>
                <span className='stroke-text'> Shape </span>
                <span> Your </span>
              </div>

              <div>
                <span> Ideal body </span>
              </div>


              <div >
                <span>
                In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
              </div>
           
           
           
            </div>



            {/* figures */}

            <div className="figures">

              <div>
                <span> 
                    <NumberCounter end={140} start={100} delay='4' preFix="+" />
                </span>
                <span>Expert Coaches </span>
              </div>
                    
              <div>
                <span>
                    <NumberCounter end={978} start={940} delay='4' preFix="+" />
                </span>
                <span>Members Joined</span>
              </div>

              <div>
                <span>
                    <NumberCounter end={50} start={10} delay='4' preFix="+" />
                </span>
                <span>fitness programms</span>
              </div>


            </div>


            {/* hero buttons */}

            <div className="hero-buttons">

              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>

        </div>





        <div className="right-h">


          {/* hero buttons */}

          <button className="btn">Join Now</button>

          <motion.div className="heart-rate"
             initial={{right:'-1rem'}}
             whileInView={{right:'4rem'}}
            transition={transition} 
>
            <img src={heart} alt="Heart Icon"/>
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
        </div>

        {/* hero images */}

        <motion.img src={hero_image} alt="" className='hero-image'/>

        <motion.img src={hero_image_back} alt="" className='hero-image-back'
           initial={{right:'11rem'}}
           whileInView={{right:'20rem'}}
          transition={transition} />


       {/* calories */}
       <motion.div className="calories"
         initial={{right:'37rem'}}
         whileInView={{right:'28rem'}}
        transition={transition} >
            <img src={calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>

       </motion.div>

    </div>
  )
}

export default Hero