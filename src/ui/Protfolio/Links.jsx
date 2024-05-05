import React from 'react'

function Links({ink, img, name}) {
  return (
    <div className='wrapper relative flex  h-32 w-full bg-white justify-between items-center'>
        <div>
            <h2>01</h2>
        </div>
        <div className='hoverImg  w-20 absolute '>
            <img src={img} alt="not found" />
        </div>
        <div className='projectName'>
           <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Links;