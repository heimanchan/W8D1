import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.target.value})
  }

  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push("/"));
  }

  render() {
    // if (this.props.formType === "signup") {
    //   const header = (
    //     <div>
    //       <h3>Sign Up</h3>
    //       <Link to="/login">Log In</Link>
    //     </div>
    //   )
    // } else {
    //   const header = (
        // <div>
        //   <h3>Login</h3>
        //   <Link to="/signup">Sign Up</Link>
        // </div>
    //   )
    // }
    const header = this.props.formType === "signup" ?
      (
        <>
          <h3>Sign Up</h3>
          <Link to="/login">Log In</Link>
        </>
      )
      :
      (
        <>
          <h3>Login</h3>
          <Link to="/signup">Sign Up</Link>
        </>
      )
  
    return(
      <form onSubmit={this.handleSubmit}>
        {header}
        <input type="text" value={this.state.username} onChange={this.updateUsername} />
        <input type="text" value={this.state.password} onChange={this.updatePassword} />
        {
          this.props.formType === "signup" ? 
          <button>Sign Up</button>
          :
          <button>Log In</button>
        }
        <ul>
          {this.props.errors.session.map(error => <li>{error}</li>)}
        </ul>
      </form>
    )
  }
}