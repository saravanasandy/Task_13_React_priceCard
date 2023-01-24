import React from 'react'

const Images = () => {
  return (
    <div className='card'>
        <img src='./images/jogging.png' alt='logo' className='card--image'/>
        <div className='card--stats'>
            <img src='./images/white-star.png' alt='star' className='card--star'/>
            <img src='./images/gold-star.png' alt='star' className='card--star'/>
            <span>5.0</span>
            <span className='grey'>(6) .</span>
            <span className='grey'>USA</span>
        </div>
        <p>life Lesson with kathie Zafree</p>
        <p><strong>From $136 </strong> / person</p>

    </div>
  )
}

export default Images