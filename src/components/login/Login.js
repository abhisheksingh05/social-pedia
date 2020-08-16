import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.value          
        });
    }
    emailChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({email: value});
    }
    passwordChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({password: value});
    }
    
    login = (event) =>{
        event.preventDefault();

        const {email, password}= this.state;
        const{history} = this.props

        console.log(`${this.state.email}, ${this.state.password}`);
        fetch('https://conduit.productionready.io/api/users/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "user":{
                    "email":email,
                    "password": password
                }
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data) );
            history.push('/home')
        //   this.setState({articles: data.articles, articlesCount:data.articlesCount});
        }).catch(error=> console.log( 'error',error ));
    }

    render() {
        return (
            <div>
               <Form onSubmit={this.login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={this.state.email} 
                            onChange={this.emailChangeHandler}
                            placeholder="Enter email"  />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                            onChange={this.passwordChangeHandler}
                            value={this.state.password} 
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
