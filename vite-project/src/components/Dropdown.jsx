import React from 'react';

const Dropdown = ({ selectedOptions, setSelectedOptions }) => {
    const handleChange = (e) => {
        const { options } = e.target;
        const value = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);

        setSelectedOptions(value);
    };

    return (
        <div className="form-group">
            <label htmlFor="filter">Select Options:</label>
            <select
                id="filter"
                multiple
                className="form-control"
                value={selectedOptions}
                onChange={handleChange}
            >
                <option value="alphabets">Alphabets</option>
                <option value="numbers">Numbers</option>
                <option value="highest_alphabet">Highest Alphabet</option>
            </select>
        </div>
    );
};

export default Dropdown;
