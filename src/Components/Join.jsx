import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef} from 'react'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_r0tbnmr', 'template_bqe4hs8', form.current, {
            publicKey: 'MUC8DPeZk6RZYW7r9PoV6',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  
  
    return (


    <div className="Join" id="join-us">

        <div className="left-j">

            <hr/>

            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>

            <div>
                <span>Your body</span>
                <span className='stroke-text'>With us</span>
            </div>

            </div>


        <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type='text' name='user_email' placeholder='Enter your email address'/>
                <button className='btn btn-j'>Join Now</button>

            </form>
        </div>

    </div>
    

  )
}

export default Join