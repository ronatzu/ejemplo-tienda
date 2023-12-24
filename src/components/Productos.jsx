import React from "react"
import '../styles/Productos.css'
export const Productos=(props)=>{
  return(
      <div className="producto">
          <img className='producto_img' src={props.imagen}/>
          <p className='producto_categoria'>{props.categoria}</p>
          <p className='producto_nombre'>{props.nombre}</p>
          <p className='producto_empresa'> {props.empresa}</p>
          <p className='producto_descripcion'> {props.descripcion_corta}</p>
          <p className='producto_precio'><b>{props.precio}$</b></p>
      </div>
  );
};