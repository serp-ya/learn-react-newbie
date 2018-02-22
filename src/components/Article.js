import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import { CSSTransitionGroup } from 'react-transition-group';
import { deleteArticle } from '../ActionCreators';

import './article.animation.css';

class Article extends PureComponent{
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    handleDelete = () => {
        const { deleteArticle, article } = this.props;
        deleteArticle(article.id);
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const {title, text, comments} = article;

        return (
            <div>
                <h3>{title}</h3>

                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>

                <button onClick = {this.handleDelete}>
                    Delete me
                </button>

                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {isOpen && (
                        <section>
                            {text}
                            <CommentsList comments = {comments}/>
                        </section>
                    )}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default connect(null, { deleteArticle })(Article)