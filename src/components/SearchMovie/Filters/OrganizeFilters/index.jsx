import { useState, useEffect } from "react";
import searchArrowDown from '../../../../images/searchArrowDown.svg';
import './index.css';

export default function OrganizeFilter({ checkboxes, setCheckboxes, resetFilters }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');
    const options = [
        { id: 1, text: 'پیش‌فرض (مرتبط‌ترین)' },
        { id: 2, text: 'تازه‌های نماوا' },
        { id: 3, text: 'امتیاز IMDB' },
        { id: 4, text: 'سال ساخت (جدیدترین)' },
        { id: 5, text: 'سال ساخت (قدیمی‌ترین)' }
    ];

    const handleSelectOptionClick = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = (id) => {
        setCheckboxes({ ...checkboxes, [id]: !checkboxes[id] });
    };

    const handleSearchChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    useEffect(() => {
        // Set the default state of radio input with ID 1 as checked
        setCheckboxes({ ...checkboxes, 1: true });
    }, []);

    const handleReset = () => {
        // Reset checkboxes state
        setCheckboxes({});
        // Call resetFilters function from parent
        resetFilters();
    };

    return (
        <div className={`d-flex flex-column select-box ${isActive ? 'active' : ''}`} onClick={handleSelectOptionClick}>
            <div className="select-option d-flex justify-btw align-center">
                <input type="text" placeholder="مرتب سازی" readOnly name="soValue" />
                <img src={searchArrowDown} alt='arrow down' className={`searchArrowDown ${isActive ? 'rotate' : ''}`} />
            </div>
            <div className={`content col-12 z-0 ${isActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <ul className="options">
                    {options.map((option) => (
                        <li key={option.id} className='white-color font-weight-normal' style={{ display: option.text.indexOf(filter) > -1 ? '' : 'none' }}>
                            <div className='d-flex gap-1'>
                                <label className="radio-container">
                                    <input type="radio" name="radioSearch" value={option.id}
                                        checked={checkboxes[option.id] || false}
                                        onChange={() => handleOptionClick(option.id)}
                                        onClick={(e) => e.stopPropagation()} /> {/* Stop propagation here */}
                                    <span className="radio-checkmark"></span>
                                </label>
                                <p className="font-14 font-weight-normal">{option.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}