import React from 'react';

const TextInput = ({ jsonInput, setJsonInput }) => {
    return (
        <div className="form-group">
            <textarea
                className="form-control"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Enter JSON here'
                rows='6'
            />
        </div>
    );
};

export default TextInput;
