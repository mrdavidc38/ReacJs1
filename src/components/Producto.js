import React from 'react';

const Producto = ({ producto,carrito, productos, agragarProducto }) => {

    const seleccionarproductos=(id)=>{
        const producto=productos.filter(producto=>producto.id===id)
        console.log(producto)
    }
    const { id, nombre, precio } = producto;

    return (<div>
        <h3>{nombre}</h3>
        <h3>${precio}</h3>
         <button
         type="button"
         onClick={()=>seleccionarproductos(id)}
         >Comprar</button>
    </div>);
}

export default Producto;