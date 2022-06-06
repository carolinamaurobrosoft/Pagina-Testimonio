import './App.css';
//importamos nuestro componenete
import Testimony from './components/Testimony.js';

const reviews = [{name: "Emma Bostian",country:"Suecia", position: "Ingeniera de Software", company: "Spotify", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "persona1"},
{name: "Carolina Mauro",country:"Argentina", position: "Desadorrallora Web", company: "Brosofr", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "persona2"},
{name: "Constanza Mauro",country:"Alemania", position: "Creadora de contenido", company: "Meta", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "persona3"}]


function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
      </div>
      {reviews.map((r,i) => (<Testimony key={i} name={r.name}
        country={r.country}
        position={r.position}
        company={r.company}
        testimony={r.testimony}
        image={r.image} />))}
    </div>
  );
}

export default App;
