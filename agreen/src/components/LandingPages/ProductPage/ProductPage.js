import React from 'react'
import "./ProductPage.css"
import { DefaultButton } from '../../index.js'

const producttext = "When completing market research the team have found that the market for automated greenhouse are overpriced with little function. Thus the group had created this ground breaking new product and made sure that the market has a new competitor and we belive our product can dominate the market. "

function ProductPage() {
  return (
    <div className='productWrapper'>
      <div className='productContainer'>
        <div className='productLeft'>
          <div className='productTitle'>
            Cheaper <br/>and Better
          </div>
          <div className='productText'>
            {producttext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='productRight'>
        <img src={require("./ProductPageImage.jpg")} alt=""></img>
        </div>
        </div>
      </div>
  )
}

export default ProductPage