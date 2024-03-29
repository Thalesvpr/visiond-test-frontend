import React, { useState, useRef, useEffect } from 'react';

interface AutoTextAreaProps {
  placehoder: string;
  onBlur: (value: string) => void;
  className?: string
}

const AutoTextArea: React.FC<AutoTextAreaProps> = ({ placehoder, onBlur , className}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState('auto');

  const [value, setValue ] = useState('');

  const handleBlur = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onBlur(event.target.value)
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value)
    //   console.log(value.split("\n").length)
    if (textareaRef.current) {
        setHeight('fit-content')
        setHeight(`${textareaRef.current.scrollHeight}px`);
    
    }
  };

  return (
    <div className={' p-4 '+className}>
            <textarea
      ref={textareaRef}
      placeholder={placehoder}
      className=" w-full border-none bg-transparent resize-none focus:outline-none"
    //   style={{ height }}
    style={{ height: value.split("\n").length - 1 > 0? Math.max(35, (value.split("\n").length) * 24) + "px" : 'auto'}}

      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      
    />
    </div>
  );
};

export default  AutoTextArea
