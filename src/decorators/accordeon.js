import React, {Component} from 'react';

export default (OriginalComponent) => (
    class Accordeon extends Component {
        state = {
            openArticleId: null
        };

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpen = {this.toggleOpenArticle}
            />
        };

        toggleOpenArticle = articleId => () => {
            const {openArticleId} = this.state;
            this.setState({
                openArticleId: (openArticleId !== articleId) ? articleId : null
            });
        };
    }
)