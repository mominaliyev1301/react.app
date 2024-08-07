import React from 'react'
import '../src/login.css'
export default function login() {
  return (
    <div className='div1'>
        <div className='div2'>
          <i id='i1' class="fa-regular fa-user"></i>
          <h1 id='h1'>Login</h1>
           <input id='inp1' type="text" placeholder='Username' />
           <input id='inp2' type="text" placeholder='Password' />
           <button id='btn1'>Login</button>
          
          </div>          

    </div>
  )
}
