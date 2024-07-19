import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function About() {
  return (
    <div className='about' id="about">
    <Container>
        <Row>
            <Col><strong>Acerca de mí</strong></Col>
            <br />
        </Row>

        <Card style={{ width: '80rem' }}>
            <Card.Body>
            <Card.Title>Victor Orellana</Card.Title>
            <Card.Text>
            Soy un apasionado estudiante de ingeniería y padre de dos hijos maravillosos. 
            Ellos son mi inspiración y mi motor para seguir aprendiendo y creciendo en este campo. Siempre estoy en busca de oportunidades para mejorar mis habilidades y mantenerme al día con las últimas tendencias. 
            Estoy emocionado por conocer vuestro proyecto y ansío construir soluciones innovadoras.
            </Card.Text>
            <Button variant="success">Saber más</Button>
        </Card.Body>
        </Card>
        </Container>
    </div>
  );
}

export default About;