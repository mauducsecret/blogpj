import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useState } from 'react';

const HomPage = () => {
    const [blogList, setBlogList] = useState([]);

    const getBlogList = async () => {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        const res = await fetch('http://localhost:3000/api/bloglist');
        const posts = await res.json();
        // By returning { props: posts }, the Blog component
        // will receive `posts` as a prop at build time
        setBlogList(posts);
        return true;
    }

    getBlogList();

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <h1>Bai viet</h1>
                </Col>
            </Row>
            <Row>
                {blogList && blogList != undefined && blogList.map((post) => (
                <Row className="mb-3 ml-3">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={'http://localhost:3000/upload/' + post.filename} width="200px" height="200px" />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                <div  dangerouslySetInnerHTML={{__html: post.content}} />
                             </Card.Text>
                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                ))}
            </Row>
        </Container>
    )
}

export default HomPage;