import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ActivityForm from './components/ActivityForm/ActivityForm';
import ActivityList from './components/ActivityList/ActivityList';
import Footer from "./components/Footer/Footer";


const App = () => {
    const [activities, setActivities] = useState([]);
    const [activityToEdit, setActivityToEdit] = useState(null); // Ny state för att hålla reda på aktivitet som ska redigeras

    // Läs aktiviteter från localStorage när appen startar
    useEffect(() => {
        const storedActivities = localStorage.getItem('activities');
        if (storedActivities) {
            setActivities(JSON.parse(storedActivities));
        }
    }, []);

    // Spara aktiviteter i localStorage när de ändras
    useEffect(() => {
        if (activities.length > 0) {
            localStorage.setItem('activities', JSON.stringify(activities));
        }
    }, [activities]);

    const addActivity = (newActivity) => {
        setActivities((prevActivities) => [
            ...prevActivities,
            { ...newActivity, id: Date.now() }, // Generera unik id
        ]);
    };

    const deleteActivity = (id) => {
        setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
    };

    const editActivity = (id, updatedActivity) => {
        setActivities((prevActivities) =>
            prevActivities.map((activity) =>
                activity.id === id ? { ...activity, ...updatedActivity } : activity
            )
        );
        setActivityToEdit(null); // Rensa redigering efter uppdatering
    };

    const handleEdit = (activity) => {
        setActivityToEdit(activity); // Sätt aktiviteten som ska redigeras
    };

    return (
        <div>
            <Header />
            <ActivityForm
                addActivity={addActivity}
                editActivity={editActivity}
                activityToEdit={activityToEdit}
            />
            <ActivityList activities={activities} onDelete={deleteActivity} onEdit={handleEdit} />
            <Footer />
        </div>
    );
};

export default App;
