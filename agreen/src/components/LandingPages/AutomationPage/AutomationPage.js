import React from 'react'
import "./AutomationPage.css"
import { DefaultButton } from '../../index.js'

const automationtext = "Through the use of IOT, every aspect of the greenhouse you own can be adjusted automatically with the help of all the sensors intergrated into the planting pot. If you want to specifically want to have manual control on the greenhouse, it can be controlled by you on the phone anywhere in the world."

function AutomationPage() {
  return (
    <div className='automationWrapper'>
      <div className='automationContainer'>
        <div className='automationLeft'>
          <div className='automationTitle'>
            Fully Automated Adjustments <br/> All Day Monitoring
          </div>
          <div className='automationText'>
            {automationtext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='automationRight'>
        <img src={require("./AutomationPageImage.png")} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default AutomationPage