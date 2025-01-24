import { useState, useEffect } from 'react';
import './ActivityForm.css';
import PropTypes from 'prop-types';

const ActivityForm = ({ addActivity, editActivity, activityToEdit }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    // Om activityToEdit finns, sätt formvärdena till den aktivitetens värden
    useEffect(() => {
        if (activityToEdit) {
            setName(activityToEdit.name);
            setDate(activityToEdit.date);
            setLocation(activityToEdit.location);
        } else {
            setName('');
            setDate('');
            setLocation('');
        }
    }, [activityToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && date && location) {
            if (activityToEdit) {
                // Om vi redigerar en aktivitet, använd editActivity
                editActivity(activityToEdit.id, { name, date, location });
            } else {
                // Om vi skapar en ny aktivitet, använd addActivity
                addActivity({ name, date, location });
            }
            // Återställ formuläret och eventuella felmeddelanden
            setName('');
            setDate('');
            setLocation('');
            setError('');
        } else {
            setError('Vänligen fyll i alla fält!');
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
            <button type="submit">
                {activityToEdit ? 'Uppdatera aktivitet' : 'Lägg till aktivitet'}
            </button>
            {error && <div className="error-message">{error}</div>}
        </form>
    );
};

ActivityForm.propTypes = {
    addActivity: PropTypes.func.isRequired,
    editActivity: PropTypes.func.isRequired,
    activityToEdit: PropTypes.object,
};

export default ActivityForm;
