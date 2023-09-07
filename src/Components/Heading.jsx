import React from 'react'

const Heading = ({heading , comment}) => {
  return (
    <><h1 className='heading'>{`{ ${heading} }`}</h1><span className='h1-span'>{comment}</span></>
  )
}

export default Heading