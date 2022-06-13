import '../App.css';
import SessionApi from '../api/SessionApi';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function RestaurantPage() {
    const { state } = useLocation();
    console.log(state.location)
    console.log(state.radius)
  return (
    <div className="App">
      <Header/>
      <SessionApi location={state.location} radius={state.radius}/>
    </div>
  );
}

export default RestaurantPage;