import React from 'react';

const Producto = ({ producto,carrito, productos, agregarProducto }) => {
    //destructuring de cada objeto.
    const { id, nombre, precio } = producto;

    const seleccionarproductos=(id)=>{
        const producto=productos.filter(producto=>producto.id===id)[0];
        agregarProducto([ 
            ...carrito, producto
        ]);
}

const eliminarproductos=id=>{
    const productos=carrito.filter(producto=>producto.id!=id)
    agregarProducto(productos)
}
  

    return (<div>
        <h3>{nombre}</h3>
        <h3>${precio}</h3>
        {productos
        ?  <button
        type="button"
        onClick={()=>seleccionarproductos(id)}
        >Comprar</button>
        :  <button
        type="button"
        onClick={()=>eliminarproductos(id)}
        >Eliminar</button>
        }
       
    </div>);
}

export default Producto;