import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Home() {
  return (
    <Container>
      <Row>
        
        <Col>¡Bienvenido!</Col>
        
        <p>¿Te encuentras buscando soluciones informáticas a medida para tus proyectos?</p>  
        
      </Row>
      <Stack gap={3}>
        <div className="p-2">CRUD</div>
        <div className="#form-container">FORMULARIO</div>
      </Stack>
      <br />
      
    </Container>
  );
}

export default Home;