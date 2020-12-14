import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../actions/AuthAction';
import './ResetPassword.scss';

export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            formErrors: {
                username: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validate()) {
            const requestObject = {
                username: this.state.username,
                password: this.state.password
            };
            resetPassword(requestObject)
            .then(res => {
                if(res) {
                    this.props.history.push('/signin');
                }
            })
            .catch(error => {
                console.log(error)
            });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const formErrors = this.setErrors(name, value);

        this.setState({formErrors, [name]: value});
    }

    validate = () => {
        let valid = true;
        let formErrors = this.state.formErrors;

        Object.keys(this.state).forEach(name => {
            formErrors = this.setErrors(name, this.state[name]);
        });

        Object.values(formErrors).forEach(formError => {
            if(formError.length) {
                valid = false;
            }
        });
    
        this.setState({formErrors});
        return valid;
    };

    setErrors(name, value) {

        const formErrors = this.state.formErrors;
        switch (name) {
            case 'username':
                formErrors.username = value.length === 0
                    ? 'User name is required field.' : '';
                break;
            case 'password':
                formErrors.password = value.length === 0
                    ? 'Password is required field.' : ''
                break;
            case 'confirmPassword':
                formErrors.confirmPassword = this.state.password !== value
                ? 'Password do not match.' : '';    
            default:
                break;
        }
        return formErrors;
    }

    render() {
        return (
            <div className="signup-signin">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="card">
                    <img className="logo" src={'/logo.png'}/>
                        <Typography component="h1" variant="h5">
                            Reset Password
                        </Typography>
                        <form className="form" noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                onChange={this.handleChange}
                                error={!!this.state.formErrors.username}
                                helperText={this.state.formErrors.username}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                                error={!!this.state.formErrors.password}
                                helperText={this.state.formErrors.password}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                onChange={this.handleChange}
                                error={!!this.state.formErrors.confirmPassword}
                                helperText={this.state.formErrors.confirmPassword}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleSubmit}
                            >
                                Reset Password
                            </Button>

                            {/* <Link to="signin">
                                <small>Already have an account?</small>
                            </Link> */}
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}