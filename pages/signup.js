import SignUpForm from '../components/signup/signupform';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navcomp from '../components/home/navcomp';
import FooterPage from '../components/home/footer';

export default function Signup() {
  return (
    <Container fluid>
        <Navcomp />
        <Row>
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <SignUpForm />
            </Col>
            <Col xs={6} md={4}>
            </Col>
        </Row>
      <FooterPage/>
    </Container>
  )
}