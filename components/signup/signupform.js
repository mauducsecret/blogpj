import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert'

const SignUpForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (formData) => {
        const firstName = formData.firstname;
        const lastName = formData.lastname;
        const email = formData.email;
        const password = formData.password;
        const addressOnce = formData.addressOnce;
        const confirmpassword = formData.confirmpassword;
        const addressTwo = formData.addressTwo;
        const city = formData.city;
        const state = formData.state;
        const zipcode = formData.zipcode;

        const data = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                firstname: firstName,
                lastname:  lastName,
                email:email,
                password:password,
                addressOnce: addressOnce,
                addressTwo: addressTwo,
                city: city,
                state: state,
                zipcode: zipcode
            })
        }).then(x =>
            x.json()
        );
        if (data == true) {
            alert('Register Success Full');
        }
    }

    const [countriesList, setCountriesList] = useState([]);

    const getCountriesList = async() => {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        const res = await fetch('http://localhost:3000/api/countrieslist');
        const posts = await res.json();
        const result = posts.result;
        // By returning { props: posts }, the Blog component
        // will receive `posts` as a prop at build time
        setCountriesList(result);
        return true;
    }
    
    getCountriesList();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control  ref={register({ required: true, maxLength: 30 })} name="firstname" placeholder="First Name" />
                <Form.Text className="text-muted">
                    {errors.firstname &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.firstname?.type === "required" && <p>First Name is required</p>}
                            {errors.firstname?.type === "maxLength" && <p>Max length of first name is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 30 })} name="lastname" placeholder="Last Name" />
                <Form.Text className="text-muted">
                    {errors.lastname &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.lastname?.type === "required" && <p>Last Name is required</p>}
                            {errors.lastname?.type === "maxLength" && <p>Max length of last name is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 30 })} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    {errors.email &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.email?.type === "required" && <p>Email is required</p>}
                            {errors.email?.type === "maxLength" && <p>Max length of email is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 30 })} name="password" type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    {errors.password &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.password?.type === "required" && <p>Password is required</p>}
                            {errors.password?.type === "maxLength" && <p>Max length of password is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 30 })} name="confirmpassword" type="password" placeholder="Confirm Password" />
                <Form.Text className="text-muted">
                    {errors.confirmpassword &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.confirmpassword?.type === "required" && <p>Confirm Password is required</p>}
                            {errors.confirmpassword?.type === "maxLength" && <p>Max length of confirm password is 30 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 255 })} name="addressOnce" placeholder="1234 Main St" />
                <Form.Text className="text-muted">
                    {errors.addressOnce &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.addressOnce?.type === "required" && <p>Address is required</p>}
                            {errors.addressOnce?.type === "maxLength" && <p>Max length of address is 255 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control ref={register({ required: true, maxLength: 255 })} name="addressTwo" placeholder="Apartment, studio, or floor" />
                <Form.Text className="text-muted">
                    {errors.addressTwo &&
                        // if errors then display alert
                        <Alert variant="danger">
                            {errors.addressTwo?.type === "required" && <p>Address is required</p>}
                            {errors.addressTwo?.type === "maxLength" && <p>Max length of address is 255 characters!</p>}
                        </Alert>
                    }
                </Form.Text>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" ref={register({ required: true, maxLength: 30 })} />
                    <Form.Text className="text-muted">
                        {errors.city &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.city?.type === "required" && <p>City is required</p>}
                                {errors.city?.type === "maxLength" && <p>Max length of city is 30 characters!</p>}
                            </Alert>
                        }
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control name="state" as="select" defaultValue="Choose..." ref={register()}>
                        {countriesList && countriesList != undefined && countriesList.map((post) => (
                            <option value={post.name} >{post.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control name="zipcode" ref={register({ required: true, maxLength: 11 })}/>
                    <Form.Text className="text-muted">
                        {errors.zipcode &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.zipcode?.type === "required" && <p>zipcode is required</p>}
                                {errors.zipcode?.type === "maxLength" && <p>Max length of zipcode is 11 characters!</p>}
                            </Alert>
                        }
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" name="termcondition" label="Check me out" ref={register({ required: true})} />
                <Form.Text className="text-muted">
                        {errors.termcondition &&
                            // if errors then display alert
                            <Alert variant="danger">
                                {errors.termcondition?.type === "required" && <p>Term condition is required</p>}
                                {errors.termcondition?.type === "maxLength" && <p>Max length of Term condition is 11 characters!</p>}
                            </Alert>
                        }
                    </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default SignUpForm;