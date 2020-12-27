import Createblogform from '../../components/blog/createblogform';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navcomp from '../../components/home/navcomp';
import FooterPage from '../../components/home/footer';

export default function Login() {
  return (
    <Container fluid>
        <Navcomp />
        <Row>
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Createblogform />
            </Col>
            <Col xs={6} md={4}>
            </Col>
        </Row>
      <FooterPage/>
    </Container>
  )
}
