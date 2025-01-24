// src/components/ActivityList.jsx
import ActivityItem from "../ActivityItem/ActivityItem";
import PropTypes from 'prop-types';

const ActivityList = ({ activities, onDelete, onEdit }) => {
    return (
        <div className="activity-container">
            <ul>
                {activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        activity={activity}
                        onDelete={() => onDelete(activity.id)}
                        onEdit={() => onEdit(activity)}
                    />
                ))}
            </ul>
        </div>
    );
};

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ActivityList;
