import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {

//crear un arreglo con objetos
const [productos, guardar]=useState(
  [{id:1, nombre:'camisa 1', precio:50},
  {id:2, nombre:'camisa 2', precio:40},
  {id:3, nombre:'camisa 3', precio:30},
  {id:4, nombre:'camisa 4', precio:20}]
  );
  // crear un state de carrito con su funcion modioficadora
const [carrito, agregarProducto]=useState([]);

//variable fecha paar enviar como props
const fecha=new Date().getFullYear();
  return (
    <Fragment>
   <Header 
   titulo='tienda virtual'
   />

   <h1>Lista de productos</h1>
   { productos.map(producto=>(
        <Producto 
        key={producto.id}
        productos={productos}
        producto={producto}
        carrito={carrito}
        agregarProducto={agregarProducto}
        />
        ))}

        <Carrito
        
        carrito={carrito}
        agregarProducto={agregarProducto}
        
        />

   <Footer
   fecha={fecha}
   />
    </Fragment>
  );
}

export default App;
