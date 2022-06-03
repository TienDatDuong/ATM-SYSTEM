import React from 'react'

function OtherBtn({value,placeholder,handleOther}) {
  return (
    <input
          type="text"
          value={value}
          placeholder={placeholder}
          className="Withdrawal_button_other"
          onChange={(e) => handleOther(e)}
        />
  )
}

export default OtherBtn