import React from 'react';

const Producto = ({producto}) => {
    const {id,nombre, precio}=producto;
    return ( <div>
              <h3>{nombre}</h3>

            </div> );
}
 
export default Producto;