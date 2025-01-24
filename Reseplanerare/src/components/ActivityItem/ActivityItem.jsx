import PropTypes from 'prop-types';

const ActivityItem = ({ activity, onDelete, onEdit }) => {
    return (
        <li>
            <h3>{activity.name}</h3>
            <p>Datum: {activity.date}</p>
            <p>Plats: {activity.location}</p>
            <div className="button-container">
                <button className="edit-btn" onClick={() => onEdit(activity)}>Redigera</button>
                <button className="delete-btn" onClick={() => onDelete(activity.id)}>Ta bort</button>
            </div>
        </li>
    );
};

ActivityItem.propTypes = {
    activity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ActivityItem;
