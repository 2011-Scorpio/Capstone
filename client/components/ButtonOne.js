import React from 'react'

const ButtonOne = props => {
  return (
    <button className="button-one" type="button" href={props.href}>
      {props.text}
    </button>
  )
}

export default ButtonOne
