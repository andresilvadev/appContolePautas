export const environment = {
    production: true,
    apiUrl: 'https://protected-citadel-66992.herokuapp.com',

    tokenWhitelistedDomains: [new RegExp('https://protected-citadel-66992.herokuapp.com')],
    tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
