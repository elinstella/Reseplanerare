// src/components/ActivityList.jsx
import ActivityItem from "../ActivityItem/ActivityItem";
import PropTypes from 'prop-types';  // Importera PropTypes

const ActivityList = ({ activities, onDelete }) => {
    return (
        <ul>
            {activities.map((activity, index) => (
                <ActivityItem
                    key={index}
                    activity={activity}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
};

// Lägg till PropTypes för att validera props
ActivityList.propTypes = {
    activities: PropTypes.array.isRequired,  // Validera att activities är en array och obligatorisk
    onDelete: PropTypes.func.isRequired,     // Validera att onDelete är en funktion och obligatorisk
};

export default ActivityList;
