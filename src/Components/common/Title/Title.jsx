import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div>
      <div id='heading'>
        <h3>{subTitle}</h3>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title
