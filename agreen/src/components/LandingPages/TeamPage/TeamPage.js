import React from 'react'
import "./TeamPage.css"
import { DefaultButton } from '../../index.js'

const teamtext = "We are a team of university engineering student with speciality in multiple discipline. During a 12 week period, we have designed and created this project out of love for planting and the love of creating a better future"

function TeamPage() {
  return (
    <div className='TeamWrapper'>
      <div className='TeamContainer'>
        <div className='TeamLeft'>
          <div className='TeamTitle'>
            The Team
          </div>
          <div className='TeamText'>
            {teamtext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='TeamRight'>
          <img src={require('./TeamPageImage.jpg')} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default TeamPage