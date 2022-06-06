import React from 'react'; //usar todo el poder de react
import '../stylesheet/Testimony.css'

//definimos mi componente

function Testimony(props){
  return ( //describir la estructura de mi componente
    <div className='container-testimony'> 
      <img 
        className='img-testimony'
        src={require(`../images/${props.image}-testimony.jpg`)}
        alt = 'Foto de Persona1'/>
      <div className='container-text-testimony'>
        <p className='name-testimony'> <strong> {props.name} </strong>  en {props.country} </p>
        <p className='position-testimony'> {props.position} en <strong> {props.company} </strong></p>
        <p className='text-testimony'> "{props.testimony}" </p>
      </div> 
    
    </div> 
  );
}

//debemos exportar testimonio para que alguien lo pueda usar
export default Testimony;
