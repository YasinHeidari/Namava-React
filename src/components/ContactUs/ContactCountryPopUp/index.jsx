import React, { useState } from 'react';


const CountryPopup= ({ options, onSelect, handleOutsideClick }) => {
    return (
        <div onClick={handleOutsideClick}>
            <select>
                {options.map((option, index) => (
                    <option key={index} value={option.value} onClick={() => onSelect(option.value)}>
                        {`${option.label} (${option.value})`}
                    </option>
                ))}
            </select>
        </div>
    );
};



export default CountryPopup;