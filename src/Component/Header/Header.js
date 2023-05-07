import React from 'react'
import "./Header.css"
export default function Header() {
  return (
  <section className="h-wrapper padding">
    <div className="h-container">
        <span className='Blure'></span>
        <a className='a' href=''>
        <img src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc76eed0142.jpg"  style={{width:50}}alt="LOGO" />Property Exchange</a>
        
 
        <div className="h_menu">
            <a href="">Residents</a>
            <a href="">Our Value</a>
            <a href="">Get Started</a>
            <button className='button'>
               Contact
            </button>
        

        </div>

    </div>
  </section>
  )
}
