import { Security, ImplicitCallback } from '@okta/okta-react';
import { userInfo } from 'os';
import ReactPiwik from 'react-piwik';

async function checkAuthentication() {
  console.log('PROPS AUTH',this.props)

  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    if (authenticated && !this.state.userinfo) {
      const userinfo = await this.props.auth.getUser();
      this.setState({ authenticated, userinfo });
      if (this.props.user.sub === undefined) {
        console.log('Fetching Filter Data',userinfo);
        this.props.addUser(userinfo);
        this.props.generateFilterData(this.props.preferences);
        ReactPiwik.push(['setUserId', `${userinfo.given_name + ' ' + userinfo.family_name}(${userinfo.email.split('@')[0]})`]);

      }
      this.props.changeAuth(authenticated);
    } else {
      this.setState({ authenticated });
      this.props.changeAuth(authenticated);
    }
  }
}

/* eslint-disable import/prefer-default-export */
export { checkAuthentication };
/*Hello World*/