import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface OtpInputProps {
  length: number;
  onOtpSubmit: (otp: string) => void;
}

function OtpInput({ length, onOtpSubmit }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {};
  const handleClick = (index: number) => {};
  const handleKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ) => {};

  return (
    <div>
      {otp.map((value: string, index: number) => {
        return (
          <input
            key={index}
            type="text"
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={value}
            onChange={(c) => handleChange(index, c)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="size-12 border rounded-sm mx-2"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
