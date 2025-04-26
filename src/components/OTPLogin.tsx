import React, { useState } from 'react'
import Button from './assets/Button'

const OTPLogin = () => {

    const [mobileNumber, setMobileNumber] = useState("");

    const handelSubmit = () => {
        console.log(mobileNumber);
    }
  return (
    <div>
      <h3 className="text-3xl font-bold underline">OTP UI</h3>
      {/* Enter mobile form area */}
        {(mobileNumber.length < 10) ? <div className='form-control'>
            <input 
              type="text"
              required
              placeholder='Enter mobile number'
              maxLength={10}
              onChange={(e)=>setMobileNumber(e.target.value)}
              className='border border-gray-600 p-2 rounded-[8px]'
            />
            <Button onClick={handelSubmit}>Submit</Button>
        </div> 
        : 
        <div className="otp-form">
            Enter otp
        </div>
        }
      {/* If Mobile number is validated show otp */}
    </div>
  )
}

export default OTPLogin
