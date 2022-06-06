import React from 'react'; //usar todo el poder de react
import '../stylesheet/Testimony.css'

//definimos mi componente

function Testimony(){
  return ( //describir la estructura de mi componente
    <div className='container-testimony'> 
      <img 
        className='img-testimony'
        src={require('../images/persona1-testimony.jpg')}
        alt = 'Foto de Persona1'/>
      <div className='container-text-testimony'>
        <p className='name-testimony'> Emma Bostian en Suecia </p>
        <p className='position-testimony'> Ingeniera de Software en Spotify</p>
        <p className='text-testimony'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." </p>
      </div> 
    
    </div> 
  );
}

//debemos exportar testimonio para que alguien lo pueda usar
export default Testimony;