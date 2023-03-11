import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupExample() {
  return (
    <Card style={{ width: '18rem' }} className= 'mt-5'>
      <ListGroup variant="flush">
        <ListGroup.Item>ricardo@desafiolatam.cl</ListGroup.Item>
        <ListGroup.Item>Generacion28</ListGroup.Item>
        </ListGroup>
    </Card>
  );
}

export default ListGroupExample;