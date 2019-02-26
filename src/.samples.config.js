const buildSettings = {
  build: 'http://70.176.243.97:8551/apps/adobecallback/',
  local: 'http://localhost:4300/implicit/callback'
}

export default {
    oidc: {
      clientId: '0oagwkc5qdpHzkGnK0h7',
      issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
      redirectUri: buildSettings.local,
      scope:[ 'openid', 'profil', 'email' ]
    },
    resourceServer: {
      messagesUrl: 'http://localhost:4300/api/messages',
    },
  };