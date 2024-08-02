import React from 'react';

const ResponseDisplay = ({ responseData, selectedOptions }) => {
    const { alphabets, numbers, highest_alphabet } = responseData;

    return (
        <div>
            {selectedOptions.includes('alphabets') && (
                <div>
                    <h2>Alphabets</h2>
                    <p>{alphabets.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('numbers') && (
                <div>
                    <h2>Numbers</h2>
                    <p>{numbers.join(', ')}</p>
                </div>
            )}
            {selectedOptions.includes('highest_alphabet') && (
                <div>
                    <h2>Highest Alphabet</h2>
                    <p>{highest_alphabet.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
