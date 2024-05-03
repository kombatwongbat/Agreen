import React from 'react'
import "./HomePage.css"
import { DefaultButton } from '../../index.js'

const hometext = "Through the power of automation, we can create a green house that needs the bare minimum of care but with the guarantee of the plant's survival"

function HomePage() {
  return (
    <div className='homeWrapper'>
      <div className='homeContainer'>
        <div className='homeLeft'>
          <div className='homeTitle'>
            Welcome to A Green <br/> Your One stop Indoor Greenhouse Solution
          </div>
          <div className='homeText'>
            {hometext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='homeRight'>
          <img src={require('./HomePageImage.jpg')} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default HomePage