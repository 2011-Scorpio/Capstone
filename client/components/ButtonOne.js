import React from 'react'

const ButtonOne = props => {
  return (
    <button className="button-one" type="button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default ButtonOne
