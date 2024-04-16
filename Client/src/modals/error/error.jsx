import React from 'react'
import "./error.css"


function Error(props) {
  return (
    <div id="error_modal">
        <div className="err_mess">
            <p>{props.mess}</p>
            <button onClick={props.toggleErr} className="err_btn">okay</button>
        </div>
    </div>
  )
}

export default Error