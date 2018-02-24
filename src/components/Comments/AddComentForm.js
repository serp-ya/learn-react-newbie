import React, { Component } from 'react';

export default class AddCommentForm extends Component {

    state = {
        title: '',
        comment: ''
    };

    changeHandler = (fieldName) => (event) => {
        const { target } = event;

        this.setState({
            [fieldName]: target.value
        });

        if (!this.validationRules[fieldName].length(target.value)) {
            target.style.backgroundColor = '#ffb7b7';
        } else {
            target.style.backgroundColor = 'inherit';
        }
    };

    validationRules = {
        'title': {
            'length': (title) => (title.length >= 5 && title.length <= 15) || title.length === 0
        },
        'comment': {
            'length': (comment) => (comment.length >= 20 && comment.length <= 50) || comment.length === 0
        }
    };

    render() {
        const { title, comment } = this.state;

        return (
            <form>
                <fieldset>

                    <div>
                        <label>
                            You're name: <br />
                            <input
                                type = "text" value = {title}
                                onChange = {this.changeHandler('title')}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            You're comment: <br />
                            <textarea
                                value = {comment}
                                onChange = {this.changeHandler('comment')}
                            ></textarea>
                        </label>
                    </div>

                </fieldset>

                <input type = "submit" value = "Добавить комментарий" />

            </form>
        );
    };
};