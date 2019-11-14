import React from 'react'

function MsgTime(props) {
  const mystyle = {
    textAlign: 'center',
    fontSize: '12px',
    color: '#aaaaaa',
    lineHeight: '30px'
  }
  return (
    <p style={mystyle}>- - - - - {props.time} - - - - -</p>
  )
}

export default MsgTime