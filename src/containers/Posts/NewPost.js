import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../../store/actions/post";
import { fetchBook } from "../../store/actions/books";
import love from "../../images/love_emo.png";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      comment: "",
      icon: "",
      feelings: "",
    };
  }
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    console.log("bookpostslist", this.props.book);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newPost(this.props.match.params.id, this.state);
    this.setState({ text: "", comment: "", icon: "", feeling: "" });
    this.props.history.push(`/`);
  };

  render() {
    const { book, errors } = this.props;
    const { text, comment, feelings } = this.state;
    console.log("errors", errors);
    console.log("bookpostslist", this.props);
    return (
      <div className="newPost-wrapper">
        {Object.keys(book).length === 0 ? (
          <div>No book</div>
        ) : (
          <div>
            <div className="newPost-container">
              <img className="bookImage" src={this.props.book[0].image} alt="a" />
              <form className="newPost-form" onSubmit={this.handleSubmit}>
                <div className="newPost-input">
                  <label htmlFor="text">
                    あなただったら、何をしたいと思う？
                  </label>
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
                    <h4>気持ちアイコン</h4>
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
                  <button className="newPost-button">投稿する</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    book: state.book,
  };
};

export default connect(mapStateToProps, { newPost, fetchBook })(NewPost);
