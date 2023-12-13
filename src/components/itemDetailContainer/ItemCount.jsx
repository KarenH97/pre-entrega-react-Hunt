import React from 'react'
import './itemCount.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ItemCount = () => {

  const [count, setCount] = useState(0)

  const addToCart =()=>{
    Swal.fire({
      title: "Felicidades",
      text: `agregaste ${count} productos a tu carrito `,
      icon: "success"
    });

    //agregar la var de img del producto y cambiar sweet alert
// Swal.fire({
//   title: "Sweet!",
//   text: "Modal with a custom image.",
//   imageUrl: "https://unsplash.it/400/200",
//   imageWidth: 400,
//   imageHeight: 200,
//   imageAlt: "Custom image"
// });
    
  }

  return (


    <>
    <div className='CountBtn'>
     <Button variant="secondary" onClick={() => setCount (count - 1)}>-</Button>
     <Badge className='badge' bg="light" text="dark"> {count} </Badge>
     <Button variant="success" onClick={() => setCount (count + 1)}>+</Button>
     <Button variant="outline-success" onClick={addToCart}>Agregar al carrito</Button>
    </div>
    
    </>
  )
}

export default ItemCount