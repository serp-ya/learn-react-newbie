import React, {Component} from 'react';

export default (OriginalComponent) => (
    class Accordeon extends Component {
        state = {
            openItemId: null
        };

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpen = {this.toggleOpenClose}
            />
        };

        toggleOpenClose = articleId => () => {
            const {openItemId} = this.state;
            this.setState({
                openItemId: (openItemId !== articleId) ? articleId : null
            });
        };
    }
)