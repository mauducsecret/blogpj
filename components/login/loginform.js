import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

const LoginForm = () => {

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const loginSuccess = () =>
        dispatch({
            type: 'LOGINSUCESS',
        })
    // function to output form data
    // we need to pass it to onSubmit of form element
    const onSubmit = async (formData) => {
        const res = await fetch(`http://localhost:3000/api/login?email=${formData.email}&password=${formData.password}`);
        const post = await res.json();
        if (post == true) {
            loginSuccess();
            Router.push('/');
        } else {
            console.log("Response Return");
            console.log(post);
            alert('Login Failed');
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" ref={register({ required: true, maxLength: 30 })} type="email" maxLength="30" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    {errors.email &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.email?.type === "required" && <p>Email is required</p>}
                            {errors.email?.type === "maxLength" && <p>Max length of Email is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" ref={register({ required: true, minLength: 5 })} type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    {errors.password &&
                        <Alert variant="danger">
                            {errors.password?.type === "required" && <p>Password is required</p>}
                            {errors.password?.type === "minLength" && <p>Min length of title is 5 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm;