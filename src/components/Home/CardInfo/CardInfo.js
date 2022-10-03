import React from 'react'

export default function CardInfo(props) {
  return (
    <div id='home-information-card-icon'>
      <div className='icon-information-home'>
        {props.children}
      </div>
      <div className='home-information-card-text'>
        <div className='home-information-card-title'>
          {props.tituloInfo}
        </div>
        <div className='home-information-card-desccription'>
          {props.descriptionInfo}
        </div>
      </div>
    </div>
  )
}
