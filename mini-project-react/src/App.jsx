import './App.css';
import WeatherApp from './WeatherApp.jsx';

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#ADD8E6", color: "navy", textAlign: "center", padding: "20px" ,fontFamily:"Roboto,sans-serif"}}>
  <h1>Skymet Weather</h1>
</div>
      <WeatherApp />
    </>
  );
}

export default App;
