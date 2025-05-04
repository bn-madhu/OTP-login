import React, { useEffect, useRef, useState } from 'react'

interface OTPInputProps {
  length?: number;
  onOtpSubmit: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  useEffect(()=>{
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  },[])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combainedOTP = newOtp.join("");
    if(combainedOTP.length === length) onOtpSubmit(combainedOTP);

    if(value && inputRefs.current[index] && index < length -1){
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

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
