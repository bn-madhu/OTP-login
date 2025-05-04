import React, { useEffect, useRef, useState } from 'react'

const OTPInput = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if(inputRefs.current[index + 1] && index < length-1 && value){
      inputRefs.current[index+1].focus();
    }

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
  }
  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  }
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
