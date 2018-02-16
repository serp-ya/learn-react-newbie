import React, { Component } from 'react';

export default (OriginalComponent) => (
  class ToggleOpen extends Component {
    state = {
      isOpen: false
    };

    render() {
      return <OriginalComponent
        {...this.props}
        {...this.state}
        toggleOpen = {this.toggleOpen}
      />
    }

    toggleOpen = (event) => {
      event && event.preventDefault && event.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen
      })
    };
  }
)