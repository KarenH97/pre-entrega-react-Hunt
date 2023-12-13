import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CardWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Carrito
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h5>carrito</h5>
        
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
    
  )
}

export default CardWidget