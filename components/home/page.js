import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useState } from 'react';

const HomPage = () => {
    const [countriesList, setCountriesList] = useState([]);

    const getCountriesList = async () => {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        const res = await fetch('http://localhost:3000/api/bloglist');
        const posts = await res.json();
        // By returning { props: posts }, the Blog component
        // will receive `posts` as a prop at build time
        setCountriesList(posts);
        return true;
    }

    getCountriesList();

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Giup ban tiet kiem tien</h1>
                </Col>
            </Row>
            <Row>
                {countriesList && countriesList != undefined && countriesList.map((post) => (
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={'http://localhost:3000/upload/' + post.filename} width="200px" height="200px" />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                <div  dangerouslySetInnerHTML={{__html: post.content}} />
                             </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomPage;