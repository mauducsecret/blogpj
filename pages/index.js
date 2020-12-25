import HomPage from '../components/home/page';
import Navcomp from '../components/home/navcomp';
import CarouselHome from '../components/home/slidecomp';
import FooterPage from '../components/home/footer';

export default function Index() {
  return (
    <div>
      <Navcomp />
      <CarouselHome />
      <HomPage />
      <FooterPage />
    </div>
  )
}
