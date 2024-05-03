import React from 'react'
import "./DesignPage.css"


const designtext = "Through the use of 3D printing, the group was able to create a lightweight but sturdy product. Furthermore, with the use of magnates the group was able to create an expandable greenhouse and expand you growing operation."
function DesignPage() {
  return (
    <div className='designWrapper'>
     <div className='designContainer'>
     <div className='designLeft'>
     <img src={require("./DesignPageImage.jpg")} alt=""></img>
        </div>
      <div className='designRight'>
        <div className='designTitle'>
            Lightweight,<br/>3D Printed,<br/>Expandable
        </div>
        <div className='designText'>
            {designtext}
            </div>
    
           

          </div>

      
     </div>
    </div>
    )
  }
  
  export default DesignPage