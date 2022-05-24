import React from 'react'

function ChangeData() {
  const ChangeDataMemebr = () => {
    console.log("datdt")
  }
  return (
    <div className='boxChange'>
        <div className="inputs">
        <form onSubmit={ChangeDataMemebr}>
          <input
            className="inputs-value"
            type="text"
            placeholder="amount"
            // value={amount}
            // onChange={handleAmount}
          />
          <input
            className="inputs-value"
            type="text"
            placeholder="accountNumber"
            // value={accountNumber}
            // onChange={hanleNumber}
          />
          <input
            className="inputs-value"
            type="text"
            placeholder="createdAt"
            // value={createdAt}
          />
          <input className="btn" type="submit" value=" Add UserBank" />
        </form>
      </div>
    </div>
  )
}

export default ChangeData