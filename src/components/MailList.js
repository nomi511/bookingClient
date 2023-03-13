import React from 'react'

function MailList() {
  return (
    <div className='ml'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span>Sign up now and we'll send the best deals to you</span>
        <div className="mailListContainer">
            <input type="email" placeholder='Your Email' className="mailInput" />
            <button className="mailBtn">Subscribe</button>
        </div>
    </div>
  )
}

export default MailList