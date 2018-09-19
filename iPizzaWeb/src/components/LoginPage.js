import React from 'react';
import { connect }      from 'react-redux';
import { loginUser } from '../actions/users';

class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName: props.users.loggedIn ? props.users.userName : '',
            error: '',
            userLoggedIn: props.users.loggedIn
        };
    };

    onUserNameChange = (e) => {
        const userName = e.target.value.trim();
        this.setState(() => ({ userName }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.userLoggedIn){
            this.setState(() => ({
                error: 'You are already logged in.'
            }));
            return;
        }

        if(!this.state.userName) {
            this.setState(() => ({
                error: 'You need to type valid username'
            }));
            return;
        } 

        this.setState(() => ({
            error: ''
        }));
        
        this.props.loginUser(this.state.userName);
        this.props.history.push('/');
    };

    render() {
        return (
            <section>
                {this.state.error !== '' && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={this.onUserNameChange}
                    />
                    <button>Log In</button>
                </form>
            </section>
        );
    };
}

const mapStateToPorps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => ({
    loginUser: (username) => dispatch(loginUser(username))
});


export default connect(mapStateToPorps, mapDispatchToProps)(LoginPage);