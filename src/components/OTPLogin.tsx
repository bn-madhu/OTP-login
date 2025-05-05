import React, { useState } from 'react'
import Button from './assets/Button'
import OTPInput from './OTPInput';
import PopupModel from './assets/Popup-model';

const OTPLogin = () => {

  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handelSubmit = () => {
    const regex = /[^0-9]/g;
    if (mobileNumber.length < 10 || regex.test(mobileNumber)) {
      // alert("Invalid Phone Number");
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
    <div className='w-screen h-full text-center'>
      <h3 className="text-3xl font-bold underline">OTP UI</h3>
      {/* Enter mobile form area */}
      {!showOtpInput ? <>
        <div className='form-control flex items-center justify-center gap-4 my-4 mx-auto max-w-dvw w-full'>
          <input
            type="text"
            required
            value={mobileNumber}
            placeholder='Enter mobile number'
            maxLength={10}
            onChange={(e) => setMobileNumber(e.target.value)}
            className='border border-gray-600 p-2 rounded'
          />
          <Button onClick={handelSubmit}>Submit</Button>
        </div>
        {true && <PopupModel>
          <div className="model-content text-left">Please provide the correct Mobile/Phone number</div>
          </PopupModel>}
      </>
        :
        <div className="otp-form">
          {/* If Mobile number is validated show otp */}
          Enter OTP sent to {mobileNumber}
          <OTPInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      }
    </div>
  )
}

export default OTPLogin
