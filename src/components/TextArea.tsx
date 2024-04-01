import React, { useState, useRef, useEffect } from 'react';

interface AutoTextAreaProps {
  placehoder: string;
  onBlur: (value: string) => void;
  className?: string;
  value?: string; 
}

const AutoTextArea: React.FC<AutoTextAreaProps> = ({ placehoder, onBlur , className, value}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState('auto');

  const [val, setValue ] = useState('');

  useEffect(() => {
    const initValue = async () => {
      setValue(value!);
    };

    initValue();
  }, []);

  const handleBlur = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onBlur(event.target.value)
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log (val.length > event.target.value.length)

      setValue(event.target.value)

    if (textareaRef.current) {
        setHeight(`${textareaRef.current.scrollHeight}px`);
    
    }
  };


  return (
    <div className={' p-4 '+className}>
            <textarea
      ref={textareaRef}
      placeholder={placehoder}
      className=" w-full border-none bg-transparent resize-none focus:outline-none"
      style={{ height } }
    // style={{ height: val.split("\n").length - 1 > 0? Math.max(35, (val.split("\n").length) * 24) + "px" : 'auto'}}

      value={val}
      onChange={handleChange}
      onBlur={handleBlur}
      
    />
    </div>
  );
};

export default  AutoTextArea
