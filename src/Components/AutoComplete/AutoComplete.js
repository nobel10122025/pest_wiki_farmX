import React from 'react'
import './AutoComplete.css'

function AutoComplete({pestList}) {
    return (
        <div className={`${pestList.length > 0 ? 'show' : ''} wrapper`}>
        <div className='results'>
        <ul>
           {pestList.map((pest)=><li>{pest}</li>)}
        </ul>
      </div>
      </div>
    )
}

export default AutoComplete
