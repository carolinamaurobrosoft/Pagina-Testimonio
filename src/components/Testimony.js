import React from 'react'; //usar todo el poder de react

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
        <p className='text-testimony>'> Soy crack negri </p>
      </div> 
    
    </div> 
  );
}

//debemos exportar testimonio para que alguien lo pueda usar
export default Testimony;