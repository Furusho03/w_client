import { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      profileImageUrl: "",
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
    this.props.onAuth(authType, this.state).then(() => {
      this.props.history.push('/')
    }).catch(() => {
      return
    });
  };

  render() {
    const { username, email, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError()
    })

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
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
                  <label htmlFor="username">ユーザーネーム</label>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                  />

                  <label htmlFor="image-url">Image Url:</label>
                  <input
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                    type="text"
                  />
                </>
              )}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
