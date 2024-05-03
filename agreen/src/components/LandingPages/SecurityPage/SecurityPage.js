import React from 'react'
import "./SecurityPage.css"


const securitytext = "With modern day tecchnology, many people are worried about the potential security risk when using device with cloud service. We understand the concern. Thus we had created the ground breaking technology with the top of the line security including our own server to protect our customer. "
function SecurityPage() {
  return (
    <div className='securityWrapper'>
     <div className='securityContainer'>
     <div className='securityLeft'>
     <img src={require("./SecurityPageImage.png")} alt=""></img>
        </div>
      <div className='securityRight'>
        <div className='securityTitle'>
          Save and Secure
        </div>
        <div className='securityText'>
            {securitytext}
            </div>
    
           

          </div>

      
     </div>
    </div>
    )
  }
  
  export default SecurityPage