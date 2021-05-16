import React, { Component } from "react";
import './AuthForm.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      age: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  render() {
    const { username, email, password, age } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } =
      this.props;
    console.log("props",errors)
    history.listen(() => {
      removeError();
    });

    return (
      <div className="auth-form-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && (
          
            <div key="a">
              {console.log("authform",errors)}
              <ErrorMessage errors={errors} />
            </div>
          )}
          <label htmlFor="email">メールアドレス:</label>
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            type="text"
          />

          <label htmlFor="password">パスワード:</label>
          <input
            className="form-control"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            type="password"
          />
          {signUp && (
            <>
              <label htmlFor="username">ユーザーネーム:</label>
              <input
                className="form-control"
                id="username"
                name="username"
                onChange={this.handleChange}
                value={username}
                type="text"
              />

              <label htmlFor="age">年齢:</label>
              <input
                className="form-control"
                id="age"
                name="age"
                onChange={this.handleChange}
                value={age}
                type="text"
              />
            </>
          )}
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
