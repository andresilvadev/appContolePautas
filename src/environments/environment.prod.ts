export const environment = {
  production: true,
  apiUrl: 'https://capptan-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('capptan-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
