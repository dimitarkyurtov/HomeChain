import React from 'react'
import Link from 'next/link'

export default function EstateView(props) {


  return (
    <div>
        <div className='item'>EstateView</div>
        <button onClick={() => props.setActiveTab('View', props.id)} className='button is-primary'>
            Detailed view
        </button>
    </div>
  )
}
