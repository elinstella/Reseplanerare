import { useState } from 'react';
import './ActivityForm.css';
import PropTypes from 'prop-types';  // Importera PropTypes

const ActivityForm = ({ addActivity }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && date && location) {
            addActivity({ name, date, location });
            setName('');
            setDate('');
            setLocation('');
        } else {
            alert('Fyll i alla fält!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Namn på aktivitet"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Plats"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Lägg till aktivitet</button>
        </form>
    );
};

// Lägg till PropTypes för att validera props
ActivityForm.propTypes = {
    addActivity: PropTypes.func.isRequired, // Validera att addActivity är en funktion och att den är obligatorisk
};

export default ActivityForm;
