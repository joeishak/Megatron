import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in-no-jquery';

import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
// import '@okta/okta-signin-widget/dist/css/okta-theme.css';

// import '../../node_modules'


class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      logo: 'logo.png'
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div/>;

  }
}

export default SignInWidget;
