import React from 'react'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value})
    };

    

    render() {
        return (
            <form className="p-10 bg-white rounded flex flex-col justify-center text-center">
                <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
                <div><input type="text" placeholder="username" name="password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" onChange={this.handleChange}/></div>
                <div><input type="password" placeholder="password" name="password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" onChange={this.handleChange}/></div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80">Login</button>
            </form>
        )
    }
     
}

export default LoginForm;

