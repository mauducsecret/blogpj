import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

const Navcomp = () => {
  const isLogin = useSelector((state) => state.isLogin)
  const dispatch = useDispatch()
  const logOut = () => dispatch({
    type: 'LOGOUT',
  })

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">Home</Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          {isLogin &&
            <Button onClick={logOut}>Logout</Button>
          }
          {!isLogin &&
            <Link href="/login">Login</Link>
          }
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navcomp;