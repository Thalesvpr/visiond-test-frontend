import React from "react";
import { FaXmark } from "react-icons/fa6";

interface Props {
    data: string[] | undefined;
    selectedOption?: string | undefined;
    onChange: (value: string) => void;
    onDelete?:(index: number) => void;
}

const OptionsComponent: React.FC<Props> = ({ data, selectedOption, onChange, onDelete}) => {
    const handleOptionChange = (option: string) => {
        onChange(option);
    };

    const handleOnDelete = (index: number) => {
        onDelete!(index);
    };

    return (
        <ul className="m-4">
            {data?.map((option, index) => (
                <li key={option} className="flex">
                    <input
                        className="mr-4"
                        type="radio"
                        name="options"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                    />
                    <p>{option}</p>
                    { onDelete &&
                        <button onClick={() => handleOnDelete(index)} className=" text-zinc-300 font-normal p-1 ml-4 rounded-full">
                    <FaXmark/>
                    </button>}
                </li>
            ))}
        </ul>
    );
};

export default OptionsComponent;
