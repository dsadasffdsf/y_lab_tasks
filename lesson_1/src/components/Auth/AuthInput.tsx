import React, { memo, useCallback, useRef } from 'react';

interface AuthInput {
  title: string;
  placeholder: string;
  onChange: (value: string) => void;
  error: string;
}

const AuthInput = memo(({ title, placeholder, onChange, error }: AuthInput) => {
  const inputRef = useRef(null);
  const handleChange = useCallback(() => {
    onChange(inputRef.current.value);
  }, [onChange]);
  console.log('rerender');

  return (
    <>
      <div className="h-[100px]">
        <h4>{title}</h4>
        <div className="border-b-2 border-solid border-[#adadad]">
          <input
            className="authInput focus:outline-none focus:shadow-nonet"
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        {error ? <div className="text-red-600 text-sm mt-1">{error}</div> : ''}
      </div>
    </>
  );
});

export default AuthInput;
