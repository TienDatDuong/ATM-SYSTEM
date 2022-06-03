import React from 'react'

function WithdrawBtn({value,setAmount}) {
  return (
    <input
    type="button"
    value={value}
    className="Withdrawal_button"
    onClick={() => setAmount(value)}
  />
  )
}

export default WithdrawBtn