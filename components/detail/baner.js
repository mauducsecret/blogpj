import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Banner = () => {
    return (
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://www.w3schools.com/w3css/img_workshop.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Banner;