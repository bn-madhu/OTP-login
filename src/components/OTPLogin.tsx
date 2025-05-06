import React, { useState } from 'react'
import Button from './assets/Button'
import OTPInput from './OTPInput';
import PopupModel from './assets/Popup-model';
import { LoginDog } from './assets/icons';

const OTPLogin = () => {

  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPopUpModel, setShowPopUpModel] = useState(false);

  const handelSubmit = () => {
    const regex = /[^0-9]/g;
    if (mobileNumber.length < 10 || regex.test(mobileNumber)) {
      // alert("Invalid Phone Number");
      setShowPopUpModel(true);
      return;
    }
    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  }

  const onOtpSubmit = (otp: string) => {
    console.log("Login Successful", otp);
  };

  return (
    <div className='h-full xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[786px] sm:max-w-[300px] mx-auto'>
      <LoginDog className="w-40 h-40" />
      {/* Enter mobile form area */}
      <div>
        {!showOtpInput ? <>
          <div className='form-control my-4 mx-auto max-w-dvw w-full'>
            <label htmlFor='user-name'>Name</label>
            <input
              type="text"
              name="user-name"
              id='user-name'
              required
              value={userName}
              placeholder='Your name'
              maxLength={10}
              onChange={(e) => setUserName(e.target.value)}
              className='border border-gray-600 p-2 rounded'
            />
          </div>
          <div className='form-control my-4 mx-auto max-w-dvw w-full'>
            <label htmlFor='mobileNum'>Mobile or Email address</label>
            <input
              type="text"
              name="mobileNum"
              id='mobileNum'
              required
              value={mobileNumber}
              placeholder='Enter mobile number'
              maxLength={10}
              onChange={(e) => setMobileNumber(e.target.value)}
              className='border border-gray-600 p-2 rounded'
            />
          </div>
          <Button onClick={handelSubmit}>Submit</Button>
          {showPopUpModel && <PopupModel>
            <p className="model-content text-left mb-4">Please provide the correct Mobile/Phone number</p>
            <Button variant='outline' className='float-left' onClick={() => setShowPopUpModel(true)}>Close</Button>
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
    </div>
  )
}

export default OTPLogin
