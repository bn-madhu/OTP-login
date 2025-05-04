import React, { useState } from 'react'
import Button from './assets/Button'
import OTPInput from './OTPInput';

const OTPLogin = () => {

  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handelSubmit = () => {
    console.log(mobileNumber);
    const regex = /[^0-9]/g;
    if (mobileNumber.length < 10 || regex.test(mobileNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  }

  const onOtpSubmit = (otp:string) => {
    console.log("Login Successful", otp);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold underline">OTP UI</h3>
      {/* Enter mobile form area */}
      {!showOtpInput ? <div className='form-control'>
        <input
          type="text"
          required
          value={mobileNumber}
          placeholder='Enter mobile number'
          maxLength={10}
          onChange={(e) => setMobileNumber(e.target.value)}
          className='border border-gray-600 p-2 rounded-[8px]'
        />
        <Button onClick={handelSubmit}>Submit</Button>
      </div>
        :
        <div className="otp-form">
          Enter OTP sent to {mobileNumber}
          <OTPInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      }
      {/* If Mobile number is validated show otp */}
    </div>
  )
}

export default OTPLogin
