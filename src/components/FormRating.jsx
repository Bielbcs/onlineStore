import React, { Component } from 'react';
import Comment from './Comment';

export default class FormRating extends Component {
  state = {
    email: '',
    ratings: 0,
    review: '',
    comments: [],
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  checkLocalStorage = () => {
    if (localStorage.comments) {
      const comments = JSON.parse(localStorage.comments);
      this.setState({ comments });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  saveComment = (e) => {
    e.preventDefault();
    const { email, ratings, review } = this.state;
    const comment = {
      email,
      ratings,
      review,
    };
    this.addCommentToState(comment);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      email: '',
      ratings: 0,
      review: '',
    });
  }

  addCommentToState = (comment) => {
    const { comments } = this.state;
    const newArray = [...comments, comment];
    this.setState({ comments: newArray });
    localStorage.comments = JSON.stringify(newArray);
  }

  render() {
    const { email, review, comments } = this.state;
    return (
      <div>
        <form onSubmit={ this.saveComment }>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
              data-testid="product-detail-email"
              placeholder="Seu email"
            />
          </label>
          <section>
            <label htmlFor="rating">
              1
              <input
                type="radio"
                name="ratings"
                onChange={ (e) => this.handleChange(e) }
                value={ 1 }
                data-testid="1-rating"
              />
              2
              <input
                type="radio"
                name="ratings"
                onChange={ (e) => this.handleChange(e) }
                value={ 2 }
                data-testid="2-rating"
              />
              3
              <input
                type="radio"
                name="ratings"
                onChange={ (e) => this.handleChange(e) }
                value={ 3 }
                data-testid="3-rating"
              />
              4
              <input
                type="radio"
                name="ratings"
                onChange={ (e) => this.handleChange(e) }
                value={ 4 }
                data-testid="4-rating"
              />
              5
              <input
                type="radio"
                name="ratings"
                onChange={ (e) => this.handleChange(e) }
                value={ 5 }
                data-testid="5-rating"
              />
            </label>
          </section>
          <textarea
            name="review"
            data-testid="product-detail-evaluation"
            value={ review }
            onChange={ (e) => this.handleChange(e) }
          />
          <button type="submit" data-testid="submit-review-btn">Enviar</button>
        </form>
        {comments.map((item, index) => (<Comment
          key={ index }
          email={ item.email }
          rating={ item.ratings }
          review={ item.review }
        />))}
      </div>
    );
  }
}
