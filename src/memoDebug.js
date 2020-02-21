import React from 'react'
import PureDebug from './PureDebug'



export default (FunctionalComponent) => {
  return React.memo((props) => {
    return (
      <PureDebug {...props}>
        <FunctionalComponent {...props} />
      </PureDebug>
    )
  })
}