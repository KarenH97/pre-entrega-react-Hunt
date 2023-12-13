import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'

const ItemDetail = () => {
  return (
    <><p>itemdetail</p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ItemCount></ItemCount>
    </Card>
   
    </>
  )
}

export default ItemDetail