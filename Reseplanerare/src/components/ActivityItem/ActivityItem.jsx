// src/components/ActivityItem.jsx
import PropTypes from 'prop-types';  // Importera PropTypes

const ActivityItem = ({ activity, onDelete }) => {
    return (
        <li>
            <h3>{activity.name}</h3>
            <p>Datum: {activity.date}</p>
            <p>Plats: {activity.location}</p>
            <button onClick={onDelete}>Ta bort</button>
        </li>
    );
};

// Lägg till PropTypes för att validera props
ActivityItem.propTypes = {
    activity: PropTypes.shape({    // Validera att activity är ett objekt med dessa specifika egenskaper
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,  // Validera att onDelete är en funktion och obligatorisk
};

export default ActivityItem;
