import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/w3css/img_lights.jpg"
                    alt="First slide" width="400"  height="400"
                />
                <Carousel.Caption>
                    <h3>Trang web quan ly chi tieu</h3>
                    <p>Ban co the dung trang web nay de quan ly chi tieu ca nhan</p>
                    <br/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/w3css/img_lights.jpg"
                    alt="Third slide" width="400"  height="400"
                />
                <Carousel.Caption>
                    <h3>Trang web quan ly hoa don hang thang</h3>
                    <p>Ban co the dung no de quan ly chi tieu hang thang</p>
                    <br/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/w3css/img_lights.jpg"
                    alt="Third slide" width="400"  height="400"
                />
                <Carousel.Caption>
                    <h3>Trang web quan ly hoa don mua sam</h3>
                    <p>Giup ban quan ly cac hoa don mua sam</p>
                    <br/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome;