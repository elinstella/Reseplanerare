// src/App.jsx
import { useState } from 'react';
import Header from './components/Header/Header';
import ActivityForm from './components/ActivityForm/ActivityForm';
import ActivityList from './components/ActivityList/ActivityList';

const App = () => {
    const [activities, setActivities] = useState([]);

    const addActivity = (activity) => {
        setActivities([...activities, activity]);
    };

    const deleteActivity = (index) => {
        setActivities(activities.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Header />
            <ActivityForm addActivity={addActivity} />
            <ActivityList activities={activities} onDelete={deleteActivity} />
        </div>
    );
};

export default App;
