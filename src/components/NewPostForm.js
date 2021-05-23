import React, { Component } from "react";
import love from "../images/love_emo.png";
import NewErrorMessage from "./ErrorMessage/NewErrorMessage";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      comment: "",
      icon: "",
      feelings: "",
      popup: false,
    };
    // console.log(props);
  }

  handleChange = (e) => {
    this.props.newError.message = null;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .newPost(this.props.match.params.id, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleClick = () => {
    this.setState({ popup: true });
  };
  toggle = () => {
    this.setState({ popup: false });
  };

  render() {
    const { book, newError, removeNewError, history } = this.props;
    const { text, comment, feelings } = this.state;
    // console.log("this.props", this.props);
    // console.log("newErrors", newError);
    // console.log("removeNewErrors", removeNewError);
    history.listen(() => {
      console.log("hist");
      removeNewError();
    });
    return (
      <div className="newPost-wrapper">
        {newError.message && (
          <div>
            <NewErrorMessage errors={newError} />
          </div>
        )}
        <div>
          <div className="newPost-container">
            <img className="bookImage" src={book[0].image} alt="a" />
            <form className="newPost-form" onSubmit={this.handleSubmit}>
              <div className="newPost-input">
                <label htmlFor="text">あなただったら、何をしたいと思う？</label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="あなただったら、何をしたいと思う？"
                  value={text}
                  onChange={this.handleChange}
                />
              </div>

              <div className="newPost-input">
                <label htmlFor="comment">コメントをどうぞ！</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  placeholder="コメントをどうぞ"
                  value={comment}
                  onChange={this.handleChange}
                />
              </div>

              <div className="newPost-row">
                <div className="newPost-icon">
                  <h4 onClick={this.toggle}>気持ちアイコン</h4>
                  {this.state.popup === true ? (
                    <div className="newPost-icon-wrapper">
                      <label htmlFor="like">
                        <img src={love} alt="a" />
                      </label>
                      <input
                        type="radio"
                        name="icon"
                        value="happey"
                        id="like"
                        onChange={this.handleChange}
                      />
                    </div>
                  ) : (
                    <div onClick={this.handleClick}>アイコンを選択する</div>
                  )}
                </div>

                <div className="newPost-feeling">
                  <label htmlFor="feeling">感情メーター</label>
                  <input
                    type="range"
                    id="feeling"
                    name="feelings"
                    min="-10"
                    max="10"
                    value={feelings}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="newPost-input">
                <button type="submit" className="newPost-button">
                  投稿する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPostForm;
