import { useEffect } from 'react';
import axios from 'axios';
// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  console.log(workouts, 'workouts');
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const { data, status } = await axios.get(
          'http://localhost:4000/api/workouts/'
        );

        console.log(JSON.stringify(data, null, 4));
        console.log('response status is: ', status);
        dispatch({ type: 'SET_WORKOUTS', payload: data });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        }
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }

      // const response = await fetch('/api/workouts/');
      // const json = await response.text();

      // console.log(json);

      // if (response.ok) {
      //   setWorkouts(json);
      // }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            // <p key={workout._id}>{workout.title}</p>
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
