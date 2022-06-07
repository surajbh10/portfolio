import React from 'react'

export const ContentSide = () => {
  return (
    <div className='content'>
    <h4 style={{ color: '#fcfc', letterSpacing: '2px', fontSize: '20px' }}>Hello, my name is</h4>
    <h1 style={{ color: 'white', margin: '20px 0px 20px', fontize: '75px' }}>Suraj <span style={{ color:'red'}}>Bhujel</span></h1>
    <h3 style={{ color: 'white', marginBottom: '50px', fontize: '25px' }}>I'am a Web Developer.</h3>
    <form className="newslatter">
        <label>
         <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
        </label>
        <input type="submit" name="Submit" value="Lets Talk"/>
</form>
    </div>
        
    
  )
}
