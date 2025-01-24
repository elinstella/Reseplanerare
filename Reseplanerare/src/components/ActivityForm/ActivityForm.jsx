import { useState, useEffect } from 'react';
import './ActivityForm.css';
import PropTypes from 'prop-types';
import LocationSearch from '../LocationSearch/LocationSearch';

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
            console.log("Lägger till aktivitet:", { name, date, location });

            // Skicka aktivitet till rätt funktion beroende på om det är en ny aktivitet eller en uppdatering
            if (activityToEdit) {
                editActivity(activityToEdit.id, { name, date, location });
            } else {
                addActivity({ name, date, location });
            }

            // Återställ formuläret
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
            <LocationSearch 
                onSelectLocation={(locationData) => {
                    console.log("Vald plats:", locationData);  // Logga den valda platsen för att säkerställa att den är rätt
                    setLocation(locationData.formatted);  // Sätt den formaterade platsen som valts
                }} 
                selectedLocation={location} // Skicka den valda platsen till LocationSearch så den visas i input-fältet
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
