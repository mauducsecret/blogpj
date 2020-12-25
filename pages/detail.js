import Banner from '../components/detail/baner';
import Container from 'react-bootstrap/Container';
import Navcomp from '../components/home/navcomp';
import FooterPage from '../components/home/footer';


export default function Detail() {
  return (
    <div>
      <Navcomp />
        <Container>
            <Banner />
        </Container>
      <FooterPage />
    </div>
  )
}
