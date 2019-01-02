import { Security, ImplicitCallback } from '@okta/okta-react';

async function checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      if (authenticated && !this.state.userinfo) {
        const userinfo = await this.props.auth.getUser();
        this.setState({ authenticated, userinfo });
        if(this.props.user.sub ===  undefined ){
          this.props.updateOKTAUser(userinfo);
          this.props.getUserSettings(userinfo.sub);
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