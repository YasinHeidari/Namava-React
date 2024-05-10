import React, { useState } from 'react';
import { Checkbox } from 'antd';
import searchArrowDown from '../../../../images/searchArrowDown.svg'

export default function GenreFilter({ checkboxes, setCheckboxes }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');

    const handleReset = () => {
        setCheckboxes({});
    };

    const options = [
        { text: "اجتماعی", genre_id: "1" },
        { text: "اسکار", genre_id: "2" },
        { text: "اکشن", genre_id: "3" },
        { text: "انیمه", genre_id: "4" },
        { text: "انیمیشن", genre_id: "5" },
        { text: "برترین ها", genre_id: "6" },
        { text: "بیوگرافی", genre_id: "7" },
        { text: "تاریخی", genre_id: "8" },
        { text: "ترسناک", genre_id: "9" },
        { text: "جنایی", genre_id: "10" },
        { text: "جنگی", genre_id: "11" },
        { text: "خانوادگی", genre_id: "12" },
        { text: "درام", genre_id: "13" },
        { text: "دوبله نماوا", genre_id: "14" },
        { text: "راز آلود", genre_id: "15" },
        { text: "عاشقانه", genre_id: "16" },
        { text: "علمی تخیلی", genre_id: "17" },
        { text: "فانتزی", genre_id: "18" },
        { text: "فیلم تئاتر", genre_id: "19" },
        { text: "فیلم کوتاه", genre_id: "20" },
        { text: "کلاسیک", genre_id: "21" },
        { text: "کمدی", genre_id: "22" },
        { text: "کنسرت", genre_id: "23" },
        { text: "کودک", genre_id: "24" },
        { text: "ماجراجویی", genre_id: "25" },
        { text: "مستند", genre_id: "26" },
        { text: "موزیکال", genre_id: "27" },
        { text: "مهیج", genre_id: "28" },
        { text: "ورزشی", genre_id: "29" },
        { text: "وسترن", genre_id: "30" },
    ];

    const handleSelectOptionClick = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = () => {
        // Don't close the content when a checkbox is clicked
    };

    const handleSearchChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    return (
        <div className={`searchFilterBorder d-flex flex-column  select-box ${isActive ? 'active' : ''}`}>
            <div className="select-option d-flex justify-btw align-center" onClick={handleSelectOptionClick}>
                <input type="text" placeholder="ژانرها" readOnly name="soValue" />
                <img src={searchArrowDown} alt='arrow down' className={`searchArrowDown ${isActive ? 'rotate' : ''}`}/>
            </div>
            <div className={`content col-12 z-0 ${isActive ? 'active' : ''}`}>
                <div className="search" style={{ marginBottom:'1rem'}}>
                    <input className='border-radius-12 col-12' type="text" id="optionSearch" placeholder="جستجو ژانرها " onChange={handleSearchChange} name="optionSearch" />
                </div>
                <span className='lighter-white-font line-height-24 font-14 font-weight-normal' >همه ژانرها</span>
                <ul className="options">
                    {options.map((option) => (
                        <li key={option.genre_id} className='white-color font-weight-normal' style={{ display: option.text.indexOf(filter) > -1 ? '' : 'none' }}>
                            <div className='d-flex gap-1'>
                                <Checkbox checked={checkboxes[option.genre_id]} onChange={(e) => setCheckboxes({ ...checkboxes, [option.genre_id]: e.target.checked })} onClick={(e) => e.stopPropagation()} />
                                <p className='font-14 font-weight-normal'>{option.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
