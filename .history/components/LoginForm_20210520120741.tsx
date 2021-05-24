import React from 'react'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value})
    };

    handleSubmit = event => {

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><input type="text" placeholder="username" name="password" onChange={this.handleChange}/></div>
                <div><input type="password" placeholder="password" name="password" onChange={this.handleChange}/></div>
                <button type="submit"></button>
            </form>
        )
    }
     
}

export default LoginForm;

