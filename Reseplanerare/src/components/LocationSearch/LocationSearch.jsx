import { useState } from 'react';
import PropTypes from 'prop-types';

const LocationSearch = ({ onSelectLocation, selectedLocation }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async (event) => {
        setQuery(event.target.value);

        if (event.target.value.length > 2) {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${event.target.value}&key=3407ff6605d14e8fa8b8d5d4d33aa687`);
            const data = await response.json();
            
            if (data.results) {
                setSuggestions(data.results);
            }
        }
    };

    const handleSelectLocation = (location) => {
        // När användaren klickar på en plats, skicka tillbaka det fullständiga platsobjektet
        onSelectLocation(location);  // Skickar platsobjektet
        setQuery(''); // Töm sökrutan
        setSuggestions([]); // Töm förslagen
    };

    return (
        <div>
            <input 
                type="text"
                value={selectedLocation || query} // Använd den valda platsen eller sökningen
                onChange={handleSearch}
                placeholder="Skriv in en plats"
            />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleSelectLocation(suggestion)} // Klickar på en plats och sparar den
                        >
                            {suggestion.formatted}  {/* Visa den formaterade platsen */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

LocationSearch.propTypes = {
    onSelectLocation: PropTypes.func.isRequired,
    selectedLocation: PropTypes.string, // Vald plats som ska visas i input-fältet
};

export default LocationSearch;
