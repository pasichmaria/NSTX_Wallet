import React, { useState, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const HelpCard = ({
                            question,
                            answer
                        }: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="bg-gray-800 hover:bg-teal-500 p-4 rounded-lg shadow-lg mb-4 transition-colors duration-500 ease-in-out">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleFAQ}
            >
                <h3 className="text-lg ">{question}</h3>
                {isOpen ? <FaMinus/> : <FaPlus/>}
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px"
                }}
                className="mt-4 text-gray-300 overflow-hidden transition-all duration-500 ease-in-out"
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};
