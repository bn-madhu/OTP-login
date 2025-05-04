import React, { useRef, useState } from 'react'

const OTPInput = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
  }
  const handleClick = (index: number) => {}
  const handleKeyDown = (index: number, e: React.ChangeEvent) => {}
  return (
    <div className='otpInput-container'>
      {otp.map((value: number, index: number) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input:any) => {inputRefs.current[index] = input}}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  )
}

export default OTPInput
