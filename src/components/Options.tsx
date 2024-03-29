import React from "react";

interface Props {
    data: string[] | undefined;
    selectedOption?: string | undefined;
    onChange: (value: string) => void;
    onDelete:(index: number) => void;
}

const OptionsComponent: React.FC<Props> = ({ data, selectedOption, onChange, onDelete}) => {
    const handleOptionChange = (option: string) => {
        onChange(option);
    };

    const handleOnDelete = (index: number) => {
        onDelete(index);
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
                    <button onClick={() => handleOnDelete(index)} className="bg-zinc-300 hover:bg-zinc-400 text-zinc-700 font-normal px-3 ml-4 rounded-full">
                        x
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default OptionsComponent;
