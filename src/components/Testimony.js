import React from 'react'; //usar todo el poder de react
import '../stylesheet/Testimony.css'

//definimos mi componente

function Testimony(props){
  const {
    name, image,position,testimony, country, company
  } = props
  return ( //describir la estructura de mi componente
    <div className='container-testimony'> 
      <img 
        className='img-testimony'
        src={require(`../images/${image}-testimony.jpg`)}
        alt = 'Foto de Persona'/>
      <div className='container-text-testimony'>
        <p className='name-testimony'> <strong> {name} </strong>  en {country} </p>
        <p className='position-testimony'> {position} en <strong> {company} </strong></p>
        <p className='text-testimony'> "{testimony}" </p>
      </div> 
    
    </div> 
  );
}

//debemos exportar testimonio para que alguien lo pueda usar
export default Testimony;
