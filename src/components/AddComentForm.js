import React, { Component } from 'react';

export default class AddCommentForm extends Component {
    state = {
        title: '',
        comment: ''
    };

    render() {

        return (
            <form>
                <fieldset>

                    <div>
                        <label>
                            You're name: <br />
                            <input type = "text" />
                        </label>
                    </div>

                    <div>
                        <label>
                            You're comment: <br />
                            <textarea></textarea>
                        </label>
                    </div>

                </fieldset>

                <input type = "submit" value = "Добавить комментарий" />

            </form>
        );
    };
};