import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addNewComment } from '../../ActionCreators';

class AddCommentForm extends Component {

  state = {
    title: '',
    comment: ''
  };

  changeHandler = (fieldName) => (event) => {
    const {target} = event;

    this.setState({
      [fieldName]: target.value
    });

    if (!this.validationRules[fieldName].length(target.value)) {
      target.style.backgroundColor = '#ffb7b7';
    } else {
      target.style.backgroundColor = 'inherit';
    }

    setTimeout(() => {
      this.submitBtn.disabled = !this.isValidForSubmit();
    });
  };

  isValidForSubmit = () => {
    return Object.keys(this.state).every(field => {
      return this.validationRules[field].submit(this.state[field])
    })
  };

  addNewComment = (event) => {
    event.preventDefault();
    const { title, comment } = this.state;
    this.props.addNewComment(this.props.articleId, title, comment);

    this.setState({
      title: '',
      comment: ''
    });
  };

  validationRules = {
    'title': {
      'length': (title) => (title.length >= 5 && title.length <= 15) || title.length === 0,
      'submit':  (title) => title.length >= 5 && title.length <= 15
    },
    'comment': {
      'length': (comment) => (comment.length >= 20 && comment.length <= 50) || comment.length === 0,
      'submit': (comment) => comment.length >= 20 && comment.length <= 50
    }
  };

  render() {
    const {title, comment} = this.state;

    return (
      <form onSubmit={this.addNewComment}>
        <fieldset>

          <div>
            <label>
              You're name: <br/>
              <input
                type="text" value={title}
                onChange={this.changeHandler('title')}
              />
            </label>
          </div>

          <div>
            <label>
              You're comment: <br/>
              <textarea
                value={comment}
                onChange={this.changeHandler('comment')}
              ></textarea>
            </label>
          </div>

        </fieldset>

        <input ref = {submitBtn => this.submitBtn = submitBtn} type="submit" value="Добавить комментарий" disabled/>

      </form>
    );
  };
};

export default connect(null, { addNewComment })(AddCommentForm);